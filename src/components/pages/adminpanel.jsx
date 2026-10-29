
import React, { useMemo, useState } from "react";
import {
  LayoutDashboard, Package, FileText, Plus, Search, Menu, X,
  Pencil, Trash2, Upload, Image as ImageIcon, Check, Clock,
  ArrowUpRight, Shirt, Settings, Eye, Save, CalendarDays,
  Boxes, House, LockKeyhole
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  getAdminProducts,
  getAdminBlogs,
  saveAdminProducts,
  saveAdminBlogs,
} from "../../data/adminContent";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const initialProducts = [
  {
    "id": 1,
    "name": "Essential Oversized Tee",
    "category": "T-Shirts",
    "price": 899,
    "comparePrice": 1199,
    "sku": "BSPX-001",
    "color": "Obsidian Black",
    "status": "Published",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",
    "description": "Relaxed silhouette for effortless everyday styling.",
    "sizes": {
      "XS": 0,
      "S": 5,
      "M": 8,
      "L": 8,
      "XL": 4,
      "XXL": 0,
      "XXXL": 0
    },
    "colorHex": "#22221f",
    "bg": "#e6e3d9",
    "rating": 4.8,
    "reviews": 124,
    "tag": "BESTSELLER"
  },
  {
    "id": 2,
    "name": "Urban Graphic Tee",
    "category": "T-Shirts",
    "price": 1099,
    "comparePrice": 1399,
    "sku": "BSPX-002",
    "color": "Cloud White",
    "status": "Published",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=90",
    "description": "Statement streetwear with a modern everyday fit.",
    "sizes": {
      "XS": 0,
      "S": 4,
      "M": 6,
      "L": 6,
      "XL": 3,
      "XXL": 0,
      "XXXL": 0
    },
    "colorHex": "#f4f1e9",
    "bg": "#e9e6de",
    "rating": 4.7,
    "reviews": 86,
    "tag": "NEW ARRIVAL"
  },
  {
    "id": 3,
    "name": "Classic Everyday Tee",
    "category": "T-Shirts",
    "price": 799,
    "comparePrice": 999,
    "sku": "BSPX-003",
    "color": "Natural Beige",
    "status": "Published",
    "image": "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=90",
    "description": "Minimal design for a versatile everyday wardrobe.",
    "sizes": {
      "XS": 0,
      "S": 8,
      "M": 12,
      "L": 10,
      "XL": 5,
      "XXL": 2,
      "XXXL": 0
    },
    "colorHex": "#c7b69b",
    "bg": "#e5dfd3",
    "rating": 4.9,
    "reviews": 203,
    "tag": "FAVOURITE"
  },
  {
    "id": 4,
    "name": "Relaxed Fit Essential",
    "category": "T-Shirts",
    "price": 999,
    "comparePrice": 1299,
    "sku": "BSPX-004",
    "color": "Midnight Black",
    "status": "Published",
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=90",
    "description": "Relaxed proportions with a clean streetwear finish.",
    "sizes": {
      "XS": 0,
      "S": 5,
      "M": 8,
      "L": 7,
      "XL": 4,
      "XXL": 0,
      "XXXL": 0
    },
    "colorHex": "#171714",
    "bg": "#deded6",
    "rating": 4.8,
    "reviews": 97,
    "tag": "TRENDING"
  },
  {
    "id": 5,
    "name": "Premium Cotton Tee",
    "category": "T-Shirts",
    "price": 1199,
    "comparePrice": 1499,
    "sku": "BSPX-005",
    "color": "Classic White",
    "status": "Published",
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=90",
    "description": "A versatile staple for a clean, elevated look.",
    "sizes": {
      "XS": 0,
      "S": 4,
      "M": 7,
      "L": 6,
      "XL": 3,
      "XXL": 0,
      "XXXL": 0
    },
    "colorHex": "#f7f5ef",
    "bg": "#e7e4dc",
    "rating": 4.8,
    "reviews": 74,
    "tag": "PREMIUM"
  },
  {
    "id": 6,
    "name": "Street Culture Tee",
    "category": "T-Shirts",
    "price": 1099,
    "comparePrice": 1399,
    "sku": "BSPX-006",
    "color": "Charcoal",
    "status": "Published",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=90",
    "description": "Contemporary styling inspired by street culture.",
    "sizes": {
      "XS": 0,
      "S": 4,
      "M": 6,
      "L": 5,
      "XL": 3,
      "XXL": 0,
      "XXXL": 0
    },
    "colorHex": "#454540",
    "bg": "#dfded6",
    "rating": 4.7,
    "reviews": 61,
    "tag": "JUST DROPPED"
  },
  {
    "id": 7,
    "name": "Minimal Logo Tee",
    "category": "T-Shirts",
    "price": 899,
    "comparePrice": 1099,
    "sku": "BSPX-007",
    "color": "Stone",
    "status": "Published",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=90",
    "description": "Understated design with a modern minimalist feel.",
    "sizes": {
      "XS": 0,
      "S": 6,
      "M": 8,
      "L": 7,
      "XL": 4,
      "XXL": 0,
      "XXXL": 0
    },
    "colorHex": "#b8b2a6",
    "bg": "#e8e3d9",
    "rating": 4.8,
    "reviews": 92,
    "tag": "ESSENTIAL"
  },
  {
    "id": 8,
    "name": "Weekend Oversized Tee",
    "category": "T-Shirts",
    "price": 999,
    "comparePrice": 1299,
    "sku": "BSPX-008",
    "color": "Off White",
    "status": "Published",
    "image": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=90",
    "description": "An easygoing silhouette for off-duty streetwear.",
    "sizes": {
      "XS": 0,
      "S": 5,
      "M": 9,
      "L": 8,
      "XL": 4,
      "XXL": 0,
      "XXXL": 0
    },
    "colorHex": "#eee9dc",
    "bg": "#e5e0d6",
    "rating": 4.9,
    "reviews": 115,
    "tag": "POPULAR"
  },
  {
    "id": 9,
    "name": "Oversized Lion Hoodie",
    "category": "Hoodies",
    "price": 1499,
    "comparePrice": 1799,
    "sku": "HD-001",
    "color": "Olive Green",
    "status": "Published",
    "image": "",
    "description": "Premium oversized hoodie with a statement graphic.",
    "sizes": {
      "XS": 2,
      "S": 4,
      "M": 8,
      "L": 10,
      "XL": 6,
      "XXL": 3,
      "XXXL": 1
    },
    "colorHex": "#66734b",
    "bg": "#e6e3d9",
    "rating": 4.8,
    "reviews": 0,
    "tag": "BESTSELLER"
  }
];

const initialBlogs = [
  {
    id: 101,
    title: "How to Style an Oversized Hoodie",
    category: "Style Guide",
    author: "Admin",
    status: "Published",
    date: "2026-10-20",
    image: "",
    excerpt: "Simple ways to make oversized hoodies part of your everyday wardrobe.",
    content: "",
  },
];

function loadInitialAdminProducts() {
  const savedProducts = getAdminProducts(null);
  if (!Array.isArray(savedProducts)) return initialProducts;

  // Merge the saved admin content with the storefront starter catalogue.
  // Saved edits win for matching product names; additional admin products are kept.
  const normaliseName = (value) => String(value || "").trim().toLowerCase();
  const savedByName = new Map(
    savedProducts.map((product) => [normaliseName(product.name), product])
  );
  const matchedNames = new Set();

  const mergedDefaults = initialProducts.map((starter) => {
    const saved = savedByName.get(normaliseName(starter.name));
    if (!saved) return starter;
    matchedNames.add(normaliseName(starter.name));
    return { ...starter, ...saved, id: starter.id };
  });

  const extras = savedProducts.filter(
    (product) => !matchedNames.has(normaliseName(product.name)) &&
      !initialProducts.some((starter) => normaliseName(starter.name) === normaliseName(product.name))
  );

  const usedIds = new Set(mergedDefaults.map((product) => String(product.id)));
  const safeExtras = extras.map((product, index) => {
    let id = product.id;
    if (usedIds.has(String(id))) id = `saved-${id}-${index}`;
    usedIds.add(String(id));
    return { ...product, id };
  });

  return [...mergedDefaults, ...safeExtras];
}


const emptyProduct = () => ({
  name: "",
  category: "Hoodies",
  price: "",
  comparePrice: "",
  sku: "",
  color: "",
  status: "Draft",
  image: "",
  description: "",
  sizes: Object.fromEntries(SIZES.map((s) => [s, 0])),
});

const emptyBlog = () => ({
  title: "",
  category: "",
  author: "Admin",
  status: "Draft",
  date: new Date().toISOString().slice(0, 10),
  image: "",
  excerpt: "",
  content: "",
});

const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

const stockTotal = (product) =>
  Object.values(product.sizes || {}).reduce(
    (total, quantity) => total + (Number(quantity) || 0),
    0
  );

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-3.5 py-3 text-sm text-gray-800 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100 placeholder:text-gray-400";

function Field({ label, children }) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-xs font-semibold text-gray-600">
        {label}
      </span>
      {children}
    </label>
  );
}

function Status({ status }) {
  const published = status === "Published";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${
        published
          ? "bg-emerald-50 text-emerald-700"
          : "bg-amber-50 text-amber-700"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          published ? "bg-emerald-500" : "bg-amber-500"
        }`}
      />
      {status}
    </span>
  );
}

function StatCard({ title, value, detail, icon: Icon }) {
  return (
    <div className="group rounded-2xl border border-gray-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-gray-500">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
            {value}
          </p>
        </div>
        <div className="rounded-xl bg-violet-50 p-3 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-3 text-[11px] text-gray-400">{detail}</p>
    </div>
  );
}

function ImageUpload({ image, onChange }) {
  const [error, setError] = useState("");

  function handleFile(file) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Please select an image smaller than 5 MB.");
      return;
    }

    setError("");
    const reader = new FileReader();

    reader.onload = () => onChange(reader.result);
    reader.onerror = () => setError("Could not read the image.");
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <label
        className="flex min-h-44 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-center transition hover:border-violet-400 hover:bg-violet-50/40"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          handleFile(event.dataTransfer.files?.[0]);
        }}
      >
        <input
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(event) => handleFile(event.target.files?.[0])}
        />

        {image ? (
          <img
            src={image}
            alt="Preview"
            className="max-h-48 max-w-full rounded-lg object-contain"
          />
        ) : (
          <>
            <div className="mb-3 rounded-xl bg-white p-3 text-violet-600 shadow-sm">
              <Upload size={22} />
            </div>
            <span className="text-sm font-semibold text-gray-700">
              Upload an image
            </span>
            <span className="mt-1 text-xs text-gray-400">
              Click or drag and drop
            </span>
            <span className="mt-2 text-[10px] text-gray-400">
              PNG, JPG, WEBP · Max 5 MB
            </span>
          </>
        )}
      </label>

      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}

      {image && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="mt-2 text-xs font-medium text-red-600 hover:underline"
        >
          Remove image
        </button>
      )}
    </div>
  );
}

export default function AdminPanel() {
  const [section, setSection] = useState("Dashboard");
  const [products, setProducts] = useState(() => loadInitialAdminProducts());
  const [blogs, setBlogs] = useState(() => getAdminBlogs(initialBlogs));
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modal, setModal] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [productForm, setProductForm] = useState(emptyProduct());
  const [blogForm, setBlogForm] = useState(emptyBlog());
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [notice, setNotice] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  function handleAdminLogin(event) {
    event.preventDefault();
    if (loginUsername.trim() === "admin" && loginPassword === "bspx") {
      setIsAuthenticated(true);
      setLoginError("");
      setLoginPassword("");
      return;
    }
    setLoginError("Incorrect username or password. Please try again.");
  }

  function notify(message) {
    setNotice(message);
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => setNotice(""), 2800);
  }

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        `${product.name} ${product.category} ${product.sku} ${product.color}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [products, search]
  );

  const filteredBlogs = useMemo(
    () =>
      blogs.filter((blog) =>
        `${blog.title} ${blog.category} ${blog.author}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [blogs, search]
  );

  const publishedProducts = products.filter(
    (item) => item.status === "Published"
  ).length;

  const publishedBlogs = blogs.filter(
    (item) => item.status === "Published"
  ).length;

  const totalInventory = products.reduce(
    (total, product) => total + stockTotal(product),
    0
  );

  function openProduct(product = null) {
    setEditingId(product?.id ?? null);
    setProductForm(
      product
        ? {
            ...product,
            sizes: { ...emptyProduct().sizes, ...product.sizes },
          }
        : emptyProduct()
    );
    setModal("product");
  }

  function openBlog(blog = null) {
    setEditingId(blog?.id ?? null);
    setBlogForm(blog ? { ...blog } : emptyBlog());
    setModal("blog");
  }

  function saveProduct(event) {
    event.preventDefault();

    if (!productForm.name.trim()) {
      notify("Please enter a product name.");
      return;
    }

    const product = {
      ...productForm,
      id: editingId ?? Date.now(),
      price: Number(productForm.price) || 0,
      comparePrice: Number(productForm.comparePrice) || 0,
      sizes: Object.fromEntries(
        Object.entries(productForm.sizes).map(([size, quantity]) => [
          size,
          Math.max(0, Number(quantity) || 0),
        ])
      ),
    };

    const nextProducts = editingId
      ? products.map((item) => item.id === editingId ? product : item)
      : [product, ...products];

    if (!saveAdminProducts(nextProducts)) {
      notify("Could not save product. Browser storage may be full.");
      return;
    }

    setProducts(nextProducts);
    setModal("");
    notify(editingId ? "Product updated" : "Product added");
  }

  function saveBlog(event) {
    event.preventDefault();

    if (!blogForm.title.trim()) {
      notify("Please enter a blog title.");
      return;
    }

    const blog = { ...blogForm, id: editingId ?? Date.now() };

    const nextBlogs = editingId
      ? blogs.map((item) => item.id === editingId ? blog : item)
      : [blog, ...blogs];

    if (!saveAdminBlogs(nextBlogs)) {
      notify("Could not save article. Browser storage may be full.");
      return;
    }

    setBlogs(nextBlogs);
    setModal("");
    notify(editingId ? "Blog updated" : "Blog created");
  }

  function toggleStatus(type, id) {
    if (type === "product") {
      const nextProducts = products.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "Published" ? "Draft" : "Published" }
          : item
      );

      if (!saveAdminProducts(nextProducts)) {
        notify("Could not update product status.");
        return;
      }

      setProducts(nextProducts);
    } else {
      const nextBlogs = blogs.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "Published" ? "Draft" : "Published" }
          : item
      );

      if (!saveAdminBlogs(nextBlogs)) {
        notify("Could not update article status.");
        return;
      }

      setBlogs(nextBlogs);
    }

    notify("Publication status updated");
  }

  function confirmDelete() {
    if (!deleteTarget) return;

    if (deleteTarget.type === "product") {
      const nextProducts = products.filter((item) => item.id !== deleteTarget.id);

      if (!saveAdminProducts(nextProducts)) {
        notify("Could not delete product.");
        return;
      }

      setProducts(nextProducts);
    } else {
      const nextBlogs = blogs.filter((item) => item.id !== deleteTarget.id);

      if (!saveAdminBlogs(nextBlogs)) {
        notify("Could not delete article.");
        return;
      }

      setBlogs(nextBlogs);
    }

    setDeleteTarget(null);
    notify("Item deleted");
  }

  const navigation = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Products", icon: Package },
    { label: "Blogs", icon: FileText },
  ];

  if (!isAuthenticated) {
    return (
      <div className="admin-root flex min-h-screen items-center justify-center bg-[#f8f8fb] px-4 py-10 font-['Poppins'] text-gray-900 antialiased">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        `}</style>
        <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-9">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200">
            <LockKeyhole size={25} />
          </div>
          <div className="mt-6 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-600">BSPX Studio</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">Admin Login</h1>
            <p className="mt-2 text-sm leading-6 text-gray-500">Sign in to manage products and blog content.</p>
          </div>
          <form onSubmit={handleAdminLogin} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold text-gray-600">Username</span>
              <input autoComplete="username" required value={loginUsername} onChange={(event) => setLoginUsername(event.target.value)} placeholder="Enter admin username" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold text-gray-600">Password</span>
              <input type="password" autoComplete="current-password" required value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} placeholder="Enter admin password" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
            </label>
            {loginError && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-xs text-red-600">{loginError}</p>}
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-100">
              <LockKeyhole size={16} /> Sign in to Admin
            </button>
          </form>
          <p className="mt-6 text-center text-[10px] leading-5 text-gray-400">Authorized access only</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-root min-h-screen bg-[#f8f8fb] font-['Poppins'] font-normal text-gray-900 antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalEnter {
          from { opacity: 0; transform: translateY(12px) scale(.99); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes toastEnter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .admin-animate { animation: fadeUp .3s ease-out both; }
        .admin-modal-animate { animation: modalEnter .22s ease-out both; }
        .admin-toast-animate { animation: toastEnter .2s ease-out both; }
        .admin-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .admin-scrollbar::-webkit-scrollbar-thumb { background: #dedee8; border-radius: 20px; }
        @media (prefers-reduced-motion: reduce) {
          .admin-animate, .admin-modal-animate, .admin-toast-animate {
            animation: none !important;
          }
          .admin-root *, .admin-root *::before, .admin-root *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="flex min-h-screen">
        {mobileMenu && (
          <button
            aria-label="Close navigation"
            onClick={() => setMobileMenu(false)}
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-[82px] items-center gap-3 border-b border-gray-100 px-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 text-white">
              <Package size={21} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold tracking-tight">Studio Admin</p>
              <p className="mt-1 text-[10px] text-gray-400">Content management</p>
            </div>
            <button
              className="ml-auto rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
              onClick={() => setMobileMenu(false)}
              aria-label="Close menu"
            >
              <X size={19} />
            </button>
          </div>

          <div className="px-4 pt-8">
            <p className="mb-3 px-3 text-[9px] font-semibold tracking-[1.5px] text-gray-400">
              WORKSPACE
            </p>
            <nav className="space-y-1">
              {navigation.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => {
                    setSection(label);
                    setSearch("");
                    setMobileMenu(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-xs transition duration-200 ${
                    section === label
                      ? "bg-violet-50 font-semibold text-violet-700"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  {label === "Products" && (
                    <span className="ml-auto text-[10px] text-gray-400">
                      {products.length}
                    </span>
                  )}
                  {label === "Blogs" && (
                    <span className="ml-auto text-[10px] text-gray-400">
                      {blogs.length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto border-t border-gray-100 p-4">
            <button
              onClick={() => notify("Connect your settings page here.")}
              className="mb-4 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs text-gray-500 hover:bg-gray-50"
            >
              <Settings size={17} /> Settings
            </button>
            <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
                A
              </div>
              <div>
                <p className="text-[11px] font-semibold">Administrator</p>
                <p className="mt-1 text-[10px] text-gray-400">Store manager</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex min-h-[72px] flex-wrap items-center justify-between gap-3 border-b border-gray-200/80 bg-white/95 px-3 py-3 backdrop-blur-xl sm:px-6 lg:px-9">
            <div className="flex items-center gap-3">
              <button
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
                onClick={() => setMobileMenu(true)}
                aria-label="Open menu"
              >
                <Menu size={21} />
              </button>
              <div className="min-w-0">
                <p className="text-base font-bold tracking-tight text-gray-950 sm:text-lg">{section}</p>
                <p className="mt-1 hidden text-xs font-medium text-gray-500 sm:block">
                  Manage your store and content
                </p>
              </div>
            </div>
            <div className="flex max-w-full items-center gap-2 sm:gap-3">
              <span className="hidden items-center gap-2 text-xs font-medium text-gray-600 md:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Workspace active
              </span>
              <Link
                to="/"
                aria-label="Back to home"
                title="Back to home"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-100 sm:px-4"
              >
                <House size={16} />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Home</span>
              </Link>
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 ring-2 ring-violet-50">
                A
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-9">
            {section === "Dashboard" && (
              <div className="admin-animate space-y-7">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="mb-2 text-[9px] font-semibold tracking-[1.5px] text-violet-600">
                      OVERVIEW
                    </p>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                      Good to see you.
                    </h1>
                    <p className="mt-2 text-xs leading-6 text-gray-500">
                      Here&apos;s what&apos;s happening with your store.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openBlog()}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-medium transition hover:bg-gray-50"
                    >
                      <FileText size={16} /> New blog
                    </button>
                    <button
                      onClick={() => openProduct()}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-xs font-medium text-white transition hover:bg-violet-700"
                    >
                      <Plus size={17} /> Add product
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <StatCard title="Total products" value={products.length} detail={`${publishedProducts} published`} icon={Package} />
                  <StatCard title="Blog articles" value={blogs.length} detail={`${publishedBlogs} published`} icon={FileText} />
                  <StatCard title="Total inventory" value={totalInventory} detail="Across all size variants" icon={Boxes} />
                  <StatCard title="Draft content" value={products.filter((p) => p.status === "Draft").length + blogs.filter((b) => b.status === "Draft").length} detail="Awaiting publication" icon={Clock} />
                </div>

                <section className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white">
                  <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-6">
                    <div>
                      <h2 className="text-base font-bold tracking-tight text-gray-900">Recent products</h2>
                      <p className="mt-1 text-[10px] text-gray-400">Latest inventory updates</p>
                    </div>
                    <button onClick={() => setSection("Products")} className="flex items-center gap-1 text-[11px] font-medium text-violet-600 hover:text-violet-800">
                      View all <ArrowUpRight size={15} />
                    </button>
                  </div>

                  {products.slice(0, 5).map((product) => (
                    <div key={product.id} className="flex items-center gap-3 border-b border-gray-50 px-5 py-4 last:border-0 sm:px-6">
                      <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-gray-100 text-gray-400">
                        {product.image ? <img src={product.image} alt={product.name} className="h-full w-full object-cover" /> : <Shirt size={20} />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium">{product.name}</p>
                        <p className="mt-1 truncate text-[10px] text-gray-400">{product.category} · {product.color || "No color"}</p>
                      </div>
                      <div className="hidden text-right sm:block">
                        <p className="text-xs font-semibold">{money(product.price)}</p>
                        <p className="mt-1 text-[10px] text-gray-400">{stockTotal(product)} units</p>
                      </div>
                      <Status status={product.status} />
                    </div>
                  ))}
                  {products.length === 0 && <p className="p-8 text-center text-xs text-gray-400">Add your first product to get started.</p>}
                </section>

                <section className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white">
                  <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-6">
                    <div>
                      <h2 className="text-base font-bold tracking-tight text-gray-900">Recent articles</h2>
                      <p className="mt-1 text-[10px] text-gray-400">Your latest blog content</p>
                    </div>
                    <button onClick={() => setSection("Blogs")} className="flex items-center gap-1 text-[11px] font-medium text-violet-600">
                      View all <ArrowUpRight size={15} />
                    </button>
                  </div>
                  {blogs.slice(0, 4).map((blog) => (
                    <div key={blog.id} className="flex items-center gap-3 border-b border-gray-50 px-5 py-4 last:border-0 sm:px-6">
                      <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-violet-50 text-violet-500">
                        {blog.image ? <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" /> : <FileText size={20} />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium">{blog.title}</p>
                        <p className="mt-1 text-[10px] text-gray-400">{blog.category || "General"} · {blog.date}</p>
                      </div>
                      <Status status={blog.status} />
                    </div>
                  ))}
                  {blogs.length === 0 && <p className="p-8 text-center text-xs text-gray-400">No articles yet.</p>}
                </section>
              </div>
            )}

            {(section === "Products" || section === "Blogs") && (
              <div className="admin-animate space-y-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="mb-2 text-[9px] font-semibold tracking-[1.5px] text-violet-600">
                      {section === "Products" ? "INVENTORY" : "CONTENT"}
                    </p>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                      {section === "Products" ? "Products" : "Blog articles"}
                    </h1>
                    <p className="mt-2 text-xs text-gray-500">
                      {section === "Products"
                        ? "Manage listings, images, sizes and stock."
                        : "Create, edit and publish your articles."}
                    </p>
                  </div>
                  <button
                    onClick={() => section === "Products" ? openProduct() : openBlog()}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-xs font-medium text-white transition hover:bg-violet-700"
                  >
                    <Plus size={17} />
                    {section === "Products" ? "Add product" : "Create article"}
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {section === "Products" ? (
                    <>
                      <StatCard title="All products" value={products.length} detail="All listings" icon={Package} />
                      <StatCard title="Published" value={publishedProducts} detail="Live listings" icon={Check} />
                      <StatCard title="Low stock" value={products.filter((p) => stockTotal(p) < 5).length} detail="Fewer than 5 units" icon={Boxes} />
                    </>
                  ) : (
                    <>
                      <StatCard title="All articles" value={blogs.length} detail="All content" icon={FileText} />
                      <StatCard title="Published" value={publishedBlogs} detail="Live articles" icon={Check} />
                      <StatCard title="Drafts" value={blogs.filter((b) => b.status === "Draft").length} detail="Unpublished articles" icon={Clock} />
                    </>
                  )}
                </div>

                <section className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white">
                  <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:px-6">
                    <div>
                      <h2 className="text-base font-bold tracking-tight text-gray-900">
                        {section === "Products" ? "All products" : "All articles"}
                      </h2>
                      <p className="mt-1 text-[10px] text-gray-400">
                        {section === "Products" ? filteredProducts.length : filteredBlogs.length} items
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 focus-within:border-violet-400">
                      <Search size={16} className="text-gray-400" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={`Search ${section.toLowerCase()}...`}
                        className="w-full min-w-0 bg-transparent text-xs outline-none sm:w-48"
                      />
                      {search && <button onClick={() => setSearch("")}><X size={14} /></button>}
                    </div>
                  </div>

                  {section === "Products" ? (
                    <div className="admin-scrollbar overflow-x-auto">
                      <table className="w-full min-w-[780px] text-left text-xs">
                        <thead className="bg-gray-50/70 text-[10px] text-gray-400">
                          <tr>
                            <th className="px-5 py-4 font-medium">Product</th>
                            <th className="px-4 py-4 font-medium">SKU / Color</th>
                            <th className="px-4 py-4 font-medium">Price</th>
                            <th className="px-4 py-4 font-medium">Sizes / Stock</th>
                            <th className="px-4 py-4 font-medium">Status</th>
                            <th className="px-5 py-4 text-right font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredProducts.map((product) => (
                            <tr key={product.id} className="border-t border-gray-100 transition hover:bg-gray-50/60">
                              <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-gray-100 text-gray-400">
                                    {product.image ? <img src={product.image} alt={product.name} className="h-full w-full object-cover" /> : <ImageIcon size={19} />}
                                  </div>
                                  <div>
                                    <p className="font-medium">{product.name}</p>
                                    <p className="mt-1 text-[10px] text-gray-400">{product.category}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-4">
                                <p>{product.sku || "—"}</p>
                                <p className="mt-1 text-[10px] text-gray-400">{product.color || "—"}</p>
                              </td>
                              <td className="px-4 py-4 font-medium">
                                {money(product.price)}
                                {product.comparePrice > product.price && <p className="mt-1 text-[10px] text-gray-400 line-through">{money(product.comparePrice)}</p>}
                              </td>
                              <td className="px-4 py-4">
                                <div className="flex max-w-36 flex-wrap gap-1">
                                  {Object.entries(product.sizes || {}).filter(([, qty]) => Number(qty) > 0).map(([size]) => (
                                    <span key={size} className="rounded border border-gray-200 px-1.5 py-1 text-[9px] text-gray-500">{size}</span>
                                  ))}
                                </div>
                                <p className="mt-1.5 text-[10px] text-gray-400">{stockTotal(product)} units</p>
                              </td>
                              <td className="px-4 py-4"><Status status={product.status} /></td>
                              <td className="px-5 py-4">
                                <div className="flex justify-end gap-1">
                                  <button title="Toggle status" onClick={() => toggleStatus("product", product.id)} className="rounded-lg p-2 text-gray-400 transition hover:bg-violet-50 hover:text-violet-600"><Eye size={16} /></button>
                                  <button title="Edit" onClick={() => openProduct(product)} className="rounded-lg p-2 text-gray-400 transition hover:bg-violet-50 hover:text-violet-600"><Pencil size={16} /></button>
                                  <button title="Delete" onClick={() => setDeleteTarget({ type: "product", id: product.id, name: product.name })} className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"><Trash2 size={16} /></button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {filteredProducts.length === 0 && <p className="p-10 text-center text-xs text-gray-400">No products found.</p>}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
                      {filteredBlogs.map((blog) => (
                        <article key={blog.id} className="overflow-hidden rounded-xl border border-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/40">
                          <div className="relative grid h-40 place-items-center overflow-hidden bg-violet-50 text-violet-300">
                            {blog.image ? <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" /> : <FileText size={34} />}
                            <div className="absolute left-3 top-3"><Status status={blog.status} /></div>
                          </div>
                          <div className="p-4">
                            <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-400">
                              <span className="rounded-md bg-violet-50 px-2 py-1 text-violet-600">{blog.category || "General"}</span>
                              <span className="flex items-center gap-1"><CalendarDays size={12} /> {blog.date}</span>
                            </div>
                            <h3 className="mt-3 line-clamp-2 text-sm font-bold leading-6 text-gray-900">{blog.title}</h3>
                            <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-gray-500">{blog.excerpt || "No excerpt provided."}</p>
                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                              <span className="text-[10px] text-gray-400">By {blog.author || "Admin"}</span>
                              <div className="flex gap-1">
                                <button title="Toggle status" onClick={() => toggleStatus("blog", blog.id)} className="rounded-lg p-2 text-gray-400 hover:bg-violet-50 hover:text-violet-600"><Eye size={15} /></button>
                                <button title="Edit" onClick={() => openBlog(blog)} className="rounded-lg p-2 text-gray-400 hover:bg-violet-50 hover:text-violet-600"><Pencil size={15} /></button>
                                <button title="Delete" onClick={() => setDeleteTarget({ type: "blog", id: blog.id, name: blog.title })} className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"><Trash2 size={15} /></button>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                      {filteredBlogs.length === 0 && <p className="p-10 text-center text-xs text-gray-400 sm:col-span-2 xl:col-span-3">No blog articles found.</p>}
                    </div>
                  )}
                </section>
              </div>
            )}

            <footer className="flex flex-col gap-2 border-t border-gray-200 pt-5 text-[10px] text-gray-400 sm:flex-row sm:justify-between">
              <span>Studio Admin · Content Management</span>
              <span>Minimal workspace</span>
            </footer>
          </div>
        </main>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-gray-950/40 p-3 py-6 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModal("");
          }}
        >
          <div className="admin-modal-animate my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-7">
              <div>
                <p className="mb-1 text-[9px] font-semibold tracking-[1.5px] text-violet-600">
                  {editingId ? "UPDATE CONTENT" : "CREATE NEW"}
                </p>
                <h2 className="text-lg font-semibold">
                  {modal === "product"
                    ? editingId ? "Edit product" : "Add product"
                    : editingId ? "Edit article" : "Create article"}
                </h2>
              </div>
              <button onClick={() => setModal("")} className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            {modal === "product" ? (
              <form onSubmit={saveProduct}>
                <div className="admin-scrollbar max-h-[calc(100vh-190px)] space-y-6 overflow-y-auto p-5 sm:p-7">
                  <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    <div className="space-y-4">
                      <Field label="Product name *">
                        <input required className={inputClass} value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} placeholder="Oversized Lion Hoodie" />
                      </Field>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Category">
                          <select className={inputClass} value={productForm.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}>
                            <option>Hoodies</option><option>T-Shirts</option><option>Shirts</option><option>Jeans</option><option>Jackets</option><option>Accessories</option><option>Other</option>
                          </select>
                        </Field>
                        <Field label="Color">
                          <input className={inputClass} value={productForm.color} onChange={(e) => setProductForm({ ...productForm, color: e.target.value })} placeholder="Olive Green" />
                        </Field>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Selling price (₹) *">
                          <input required type="number" min="0" className={inputClass} value={productForm.price} onChange={(e) => setProductForm({ ...productForm, price: e.target.value })} placeholder="1499" />
                        </Field>
                        <Field label="Original price (₹)">
                          <input type="number" min="0" className={inputClass} value={productForm.comparePrice} onChange={(e) => setProductForm({ ...productForm, comparePrice: e.target.value })} placeholder="1799" />
                        </Field>
                      </div>
                      <Field label="SKU">
                        <input className={inputClass} value={productForm.sku} onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })} placeholder="HD-001" />
                      </Field>
                      <Field label="Description">
                        <textarea rows={4} className={inputClass} value={productForm.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} placeholder="Describe your product..." />
                      </Field>
                    </div>

                    <div className="space-y-4">
                      <Field label="Product image">
                        <ImageUpload image={productForm.image} onChange={(image) => setProductForm({ ...productForm, image })} />
                      </Field>
                      <Field label="Publication status">
                        <select className={inputClass} value={productForm.status} onChange={(e) => setProductForm({ ...productForm, status: e.target.value })}>
                          <option>Draft</option><option>Published</option>
                        </select>
                      </Field>
                      <div className="rounded-xl bg-gray-50 p-4">
                        <p className="text-xs font-semibold">Product summary</p>
                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="text-gray-500">Total stock</span>
                          <span className="font-semibold">{stockTotal(productForm)} units</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <span className="text-gray-500">Sizes enabled</span>
                          <span className="font-semibold">{Object.values(productForm.sizes).filter((q) => Number(q) > 0).length} sizes</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold"><Shirt size={17} className="text-violet-600" /> Size & inventory</h3>
                        <p className="mt-1 text-[10px] text-gray-400">Enter stock quantity for each size.</p>
                      </div>
                      <span className="rounded-lg bg-violet-50 px-3 py-2 text-[10px] font-semibold text-violet-700">{stockTotal(productForm)} units total</span>
                    </div>

                    <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-7">
                      {SIZES.map((size) => (
                        <label key={size} className="min-w-0">
                          <span className="mb-2 block text-center text-[10px] font-semibold text-gray-500">{size}</span>
                          <input
                            type="number"
                            min="0"
                            aria-label={`${size} stock`}
                            className="w-full min-w-0 rounded-lg border border-gray-200 px-1 py-3 text-center text-xs outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                            value={productForm.sizes?.[size] ?? 0}
                            onChange={(e) => setProductForm({
                              ...productForm,
                              sizes: { ...productForm.sizes, [size]: e.target.value },
                            })}
                          />
                        </label>
                      ))}
                    </div>
                    <p className="mt-3 text-[10px] leading-5 text-gray-400">
                      Set a size&apos;s quantity to 0 when it is unavailable.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-2 border-t border-gray-100 bg-gray-50/70 px-5 py-4 sm:px-7">
                  <button type="button" onClick={() => setModal("")} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-medium transition hover:bg-gray-50">Cancel</button>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-xs font-medium text-white transition hover:bg-violet-700"><Save size={16} /> Save product</button>
                </div>
              </form>
            ) : (
              <form onSubmit={saveBlog}>
                <div className="admin-scrollbar max-h-[calc(100vh-190px)] space-y-5 overflow-y-auto p-5 sm:p-7">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <Field label="Article title *">
                        <input required className={inputClass} value={blogForm.title} onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })} placeholder="Enter an engaging title" />
                      </Field>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Category">
                          <input className={inputClass} value={blogForm.category} onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })} placeholder="Style guide" />
                        </Field>
                        <Field label="Author">
                          <input className={inputClass} value={blogForm.author} onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })} />
                        </Field>
                      </div>
                      <Field label="Publish date">
                        <input type="date" className={inputClass} value={blogForm.date} onChange={(e) => setBlogForm({ ...blogForm, date: e.target.value })} />
                      </Field>
                      <Field label="Short excerpt">
                        <textarea rows={3} className={inputClass} value={blogForm.excerpt} onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })} placeholder="Summarise your article..." />
                      </Field>
                      <Field label="Article content">
                        <textarea rows={8} className={inputClass} value={blogForm.content} onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })} placeholder="Write your full article..." />
                      </Field>
                    </div>
                    <div className="space-y-4">
                      <Field label="Cover image">
                        <ImageUpload image={blogForm.image} onChange={(image) => setBlogForm({ ...blogForm, image })} />
                      </Field>
                      <Field label="Publication status">
                        <select className={inputClass} value={blogForm.status} onChange={(e) => setBlogForm({ ...blogForm, status: e.target.value })}>
                          <option>Draft</option><option>Published</option>
                        </select>
                      </Field>
                      <div className="rounded-xl bg-violet-50 p-4 text-xs leading-6 text-violet-800">
                        <p className="font-semibold">Publishing checklist</p>
                        <p className="mt-1 text-[11px]">Review the title, cover image and excerpt before publishing. A connected backend is needed to display articles on your live website.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 border-t border-gray-100 bg-gray-50/70 px-5 py-4 sm:px-7">
                  <button type="button" onClick={() => setModal("")} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-medium transition hover:bg-gray-50">Cancel</button>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-xs font-medium text-white transition hover:bg-violet-700"><Save size={16} /> Save article</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-gray-950/40 p-4 backdrop-blur-sm">
          <div className="admin-modal-animate w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-50 text-red-600"><Trash2 size={21} /></div>
            <h2 className="mt-4 text-base font-semibold">Delete this item?</h2>
            <p className="mt-2 text-xs leading-6 text-gray-500">
              &quot;{deleteTarget.name}&quot; will be removed from the current session.
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setDeleteTarget(null)} className="rounded-xl border border-gray-200 px-4 py-3 text-xs font-medium hover:bg-gray-50">Cancel</button>
              <button onClick={confirmDelete} className="rounded-xl bg-red-600 px-4 py-3 text-xs font-medium text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}

      {notice && (
        <div role="status" className="admin-toast-animate fixed bottom-5 right-5 z-[80] flex max-w-[calc(100vw-40px)] items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-xs font-medium text-gray-800 shadow-xl">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Check size={15} /></span>
          {notice}
        </div>
      )}
    </div>
  );
}
