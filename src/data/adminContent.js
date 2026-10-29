
const PRODUCTS_KEY = "bspx_admin_products_v1";
const BLOGS_KEY = "bspx_admin_blogs_v1";
const CONTENT_EVENT = "bspx-content-updated";

function readList(key, fallback = []) {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);

    if (raw === null) return fallback;

    const parsed = JSON.parse(raw);

    return Array.isArray(parsed) ? parsed : fallback;
  } catch (error) {
    console.error(`Could not read ${key} from localStorage:`, error);
    return fallback;
  }
}

function writeList(key, items) {
  if (typeof window === "undefined") return false;

  try {
    window.localStorage.setItem(key, JSON.stringify(items));

    window.dispatchEvent(
      new CustomEvent(CONTENT_EVENT, {
        detail: { key },
      })
    );

    return true;
  } catch (error) {
    console.error(`Could not save ${key}:`, error);
    return false;
  }
}

export function getAdminProducts(fallback = []) {
  return readList(PRODUCTS_KEY, fallback);
}

export function saveAdminProducts(products) {
  return writeList(PRODUCTS_KEY, products);
}

export function getAdminBlogs(fallback = []) {
  return readList(BLOGS_KEY, fallback);
}

export function saveAdminBlogs(blogs) {
  return writeList(BLOGS_KEY, blogs);
}

export function subscribeToAdminContent(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const onCustomChange = (event) => {
    callback(event.detail?.key ?? null);
  };

  const onStorageChange = (event) => {
    if (
      event.key === PRODUCTS_KEY ||
      event.key === BLOGS_KEY ||
      event.key === null
    ) {
      callback(event.key);
    }
  };

  window.addEventListener(CONTENT_EVENT, onCustomChange);
  window.addEventListener("storage", onStorageChange);

  return () => {
    window.removeEventListener(CONTENT_EVENT, onCustomChange);
    window.removeEventListener("storage", onStorageChange);
  };
}

export function toStorefrontProduct(product) {
  return {
    ...product,
    id: `admin-${product.id}`,
    name: product.name,
    category: product.category || "Other",
    price: Number(product.price) || 0,
    oldPrice: Number(product.comparePrice ?? product.oldPrice) || 0,
    comparePrice: Number(product.comparePrice ?? product.oldPrice) || 0,
    image: product.image || "",
    tone: product.color || product.tone || "",
    tag: product.tag || "New",
    description: product.description || "",
    sizes: product.sizes || {},
    sku: product.sku || "",
    status: product.status || "Draft",
  };
}

export function getPublishedStorefrontProducts(existingProducts = []) {
  const adminProducts = getAdminProducts([])
    .filter((product) => product.status === "Published")
    .map(toStorefrontProduct);

  const existingIds = new Set(
    existingProducts.map((product) => String(product.id))
  );

  const uniqueAdminProducts = adminProducts.filter(
    (product) => !existingIds.has(String(product.id))
  );

  return [...existingProducts, ...uniqueAdminProducts];
}
