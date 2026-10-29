
import { useEffect, useState } from "react";


import {
  getAdminBlogs,
  getPublishedStorefrontProducts,
  subscribeToAdminContent,
} from "./adminContent";

const EMPTY_PRODUCTS = [];
const EMPTY_BLOGS = [];

/**
 * Combines existing shop products with published products
 * created in the admin panel.
 */
export function useStorefrontProducts(existingProducts = EMPTY_PRODUCTS) {
  const [products, setProducts] = useState(() =>
    getPublishedStorefrontProducts(existingProducts)
  );

  useEffect(() => {
    const refresh = () => {
      setProducts(getPublishedStorefrontProducts(existingProducts));
    };

    refresh();

    return subscribeToAdminContent((key) => {
      if (!key || key === "bspx_admin_products_v1") {
        refresh();
      }
    });
  }, [existingProducts]);

  return products;
}

/**
 * Combines existing blog posts with published admin articles.
 */
export function usePublishedAdminBlogs(existingBlogs = EMPTY_BLOGS) {
  const [blogs, setBlogs] = useState(() =>
    combineBlogs(existingBlogs)
  );

  useEffect(() => {
    const refresh = () => {
      setBlogs(combineBlogs(existingBlogs));
    };

    refresh();

    return subscribeToAdminContent((key) => {
      if (!key || key === "bspx_admin_blogs_v1") {
        refresh();
      }
    });
  }, [existingBlogs]);

  return blogs;
}

function combineBlogs(existingBlogs) {
  const adminBlogs = getAdminBlogs([])
    .filter((blog) => blog.status === "Published")
    .map((blog) => ({
      ...blog,
      id: `admin-${blog.id}`,
      title: blog.title,
      category: blog.category || "General",
      author: blog.author || "Admin",
      date: blog.date || "",
      image: blog.image || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      isAdminContent: true,
    }));

  const existingIds = new Set(
    existingBlogs.map((blog) => String(blog.id))
  );

  return [
    ...existingBlogs,
    ...adminBlogs.filter(
      (blog) => !existingIds.has(String(blog.id))
    ),
  ];
}
