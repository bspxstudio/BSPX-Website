
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  House,
  Package,
  Plus,
  Search,
  Pencil,
  Trash2,
  Upload,
  Image as ImageIcon,
  X,
  Save,
  Boxes,
  Eye,
  Check,
  AlertCircle,
} from "lucide-react";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const CATEGORIES = [
  "Hoodies",
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Jackets",
  "Accessories",
  "Other",
];

const starterProducts = [
  {
    id: 1,
    name: "Oversized Lion Hoodie",
    category: "Hoodies",
    price: "1499",
    comparePrice: "1799",
    sku: "HD-001",
    color: "Olive Green",
    status: "Published",
    image: "",
    description: "Premium oversized hoodie with a statement graphic.",
    sizes: {
      XS: 2,
      S: 4,
      M: 8,
      L: 10,
      XL: 6,
      XXL: 3,
      XXXL: 1,
    },
  },
  {
    id: 2,
    name: "Classic Everyday Tee",
    category: "T-Shirts",
    price: "799",
    comparePrice: "999",
    sku: "TS-002",
    color: "Black",
    status: "Published",
    image: "",
    description: "Everyday relaxed-fit cotton T-shirt.",
    sizes: {
      XS: 3,
      S: 6,
      M: 12,
      L: 10,
      XL: 5,
      XXL: 2,
      XXXL: 0,
    },
  },
];

const makeEmptyProduct = () => ({
  name: "",
  category: "Hoodies",
  price: "",
  comparePrice: "",
  sku: "",
  color: "",
  status: "Draft",
  image: "",
  description: "",
  sizes: Object.fromEntries(SIZES.map((size) => [size, 0])),
});

const inputClass =
  "w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-medium text-slate-800 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100";

function formatMoney(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

function getStock(product) {
  return Object.values(product.sizes || {}).reduce(
    (sum, quantity) => sum + (Number(quantity) || 0),
    0
  );
}

function StatusPill({ status }) {
  const published = status === "Published";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
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

function ProductField({ label, children }) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-xs font-bold tracking-wide text-slate-600">
        {label}
      </span>
      {children}
    </label>
  );
}

function ProductImageUpload({ image, onChange }) {
  const [error, setError] = useState("");

  function handleFile(file) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Choose a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be smaller than 5 MB.");
      return;
    }

    setError("");

    const reader = new FileReader();

    reader.onload = () => onChange(String(reader.result || ""));
    reader.onerror = () =>
      setError("Unable to read this image. Try another file.");

    reader.readAsDataURL(file);
  }

  return (
    <div>
      <label
        className="flex min-h-44 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-4 text-center transition hover:border-violet-400 hover:bg-violet-50/50"
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
            alt="Product preview"
            className="max-h-48 max-w-full rounded-xl object-contain"
          />
        ) : (
          <>
            <span className="mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-white text-violet-600 shadow-sm">
              <Upload size={21} />
            </span>

            <span className="text-sm font-bold text-slate-800">
              Upload product image
            </span>

            <span className="mt-1 text-xs text-slate-500">
              Click or drag and drop
            </span>

            <span className="mt-2 text-[11px] text-slate-400">
              PNG, JPG, WEBP · Max 5 MB
            </span>
          </>
        )}
      </label>

      {error && (
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-600">
          <AlertCircle size={14} />
          {error}
        </p>
      )}

      {image && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="mt-2 text-xs font-semibold text-red-600 hover:underline"
        >
          Remove image
        </button>
      )}
    </div>
  );
}

export default function Product() {
  const navigate = useNavigate();

  const [products, setProducts] = useState(starterProducts);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(makeEmptyProduct());
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const searchableText =
        `${product.name} ${product.category} ${product.sku} ${product.color}`.toLowerCase();

      const matchesSearch = searchableText.includes(query);
      const matchesStatus =
        statusFilter === "All" || product.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [products, search, statusFilter]);

  const totalStock = products.reduce(
    (sum, product) => sum + getStock(product),
    0
  );

  const publishedCount = products.filter(
    (product) => product.status === "Published"
  ).length;

  function showNotice(message) {
    setNotice(message);
  }

  function openCreate() {
    setEditingId(null);
    setForm(makeEmptyProduct());
    setModalOpen(true);
  }

  function openEdit(product) {
    setEditingId(product.id);

    setForm({
      ...makeEmptyProduct(),
      ...product,
      sizes: {
        ...makeEmptyProduct().sizes,
        ...product.sizes,
      },
    });

    setModalOpen(true);
  }

  function saveProduct(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      showNotice("Please enter a product name.");
      return;
    }

    if (form.price === "" || Number(form.price) < 0) {
      showNotice("Enter a valid product price.");
      return;
    }

    const product = {
      ...form,
      id: editingId ?? Date.now(),
      name: form.name.trim(),
      price: String(Number(form.price) || 0),
      comparePrice: String(Number(form.comparePrice) || 0),
      sizes: Object.fromEntries(
        SIZES.map((size) => [
          size,
          Math.max(0, Number(form.sizes[size]) || 0),
        ])
      ),
    };

    setProducts((current) =>
      editingId
        ? current.map((item) =>
            item.id === editingId ? product : item
          )
        : [product, ...current]
    );

    setModalOpen(false);

    showNotice(
      editingId
        ? "Product updated successfully."
        : "Product added successfully."
    );
  }

  function toggleStatus(product) {
    setProducts((current) =>
      current.map((item) =>
        item.id === product.id
          ? {
              ...item,
              status:
                item.status === "Published" ? "Draft" : "Published",
            }
          : item
      )
    );

    showNotice(
      product.status === "Published"
        ? "Product moved to draft."
        : "Product published."
    );
  }

  function confirmDelete() {
    if (!deleteTarget) return;

    setProducts((current) =>
      current.filter((item) => item.id !== deleteTarget.id)
    );

    setDeleteTarget(null);
    showNotice("Product deleted.");
  }

  function updateForm(key, value) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  return (
    <div className="min-h-screen bg-[#f7f7fb] font-['Poppins'] text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-[1500px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-9">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200">
              <Package size={21} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-base font-extrabold tracking-tight sm:text-lg">
                Product Management
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-500">
                Manage listings, pricing and inventory
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 sm:flex-none sm:px-4"
            >
              <House size={16} />
              Back to Home
            </button>

            <Link
              to="/admin"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50 sm:flex-none sm:px-4"
            >
              <ArrowLeft size={15} />
              Admin dashboard
            </Link>

            <button
              type="button"
              onClick={openCreate}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 sm:flex-none"
            >
              <Plus size={16} />
              Add product
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-9 lg:py-10">
        <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-violet-600">
              Inventory workspace
            </p>

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Your products<span className="text-violet-600">.</span>
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Add products, update images and prices, and keep track of stock
              for every size.
            </p>
          </div>

          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
          >
            <Plus size={17} />
            Create product
          </button>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Total products
              </p>
              <span className="rounded-xl bg-violet-50 p-2.5 text-violet-600">
                <Package size={19} />
              </span>
            </div>
            <p className="mt-4 text-3xl font-extrabold tracking-tight">
              {products.length}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400">
              All listings in this session
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Published
              </p>
              <span className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
                <Check size={19} />
              </span>
            </div>
            <p className="mt-4 text-3xl font-extrabold tracking-tight">
              {publishedCount}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400">
              Visible product listings
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Total inventory
              </p>
              <span className="rounded-xl bg-sky-50 p-2.5 text-sky-600">
                <Boxes size={19} />
              </span>
            </div>
            <p className="mt-4 text-3xl font-extrabold tracking-tight">
              {totalStock}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400">
              Units across all sizes
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h2 className="text-base font-extrabold tracking-tight">
                All products
              </h2>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <label className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-50 sm:w-64">
                <Search size={16} className="shrink-0 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products..."
                  className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                  className={`${search ? "" : "hidden"} text-slate-400 hover:text-slate-700`}
                >
                  <X size={14} />
                </button>
              </label>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                aria-label="Filter by status"
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-violet-400"
              >
                <option>All</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-4 py-4">SKU / Color</th>
                  <th className="px-4 py-4">Price</th>
                  <th className="px-4 py-4">Size stock</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t border-slate-100 transition hover:bg-slate-50/70"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-slate-100 text-slate-400">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <ImageIcon size={19} />
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="max-w-xs truncate font-bold text-slate-900">
                            {product.name}
                          </p>
                          <p className="mt-1 text-xs font-medium text-slate-500">
                            {product.category}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <p className="font-semibold text-slate-700">
                        {product.sku || "—"}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {product.color || "No color"}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <p className="font-extrabold text-slate-900">
                        {formatMoney(product.price)}
                      </p>

                      {Number(product.comparePrice) > Number(product.price) && (
                        <p className="mt-1 text-xs text-slate-400 line-through">
                          {formatMoney(product.comparePrice)}
                        </p>
                      )}
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex max-w-40 flex-wrap gap-1">
                        {SIZES.filter(
                          (size) => Number(product.sizes?.[size]) > 0
                        ).map((size) => (
                          <span
                            key={size}
                            className="rounded-md border border-slate-200 px-1.5 py-1 text-[10px] font-bold text-slate-600"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                      <p className="mt-1.5 text-xs font-semibold text-slate-500">
                        {getStock(product)} units
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <StatusPill status={product.status} />
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1">
                        <button
                          type="button"
                          title="Toggle status"
                          aria-label={`Toggle status for ${product.name}`}
                          onClick={() => toggleStatus(product)}
                          className="rounded-lg p-2.5 text-slate-400 transition hover:bg-violet-50 hover:text-violet-700"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          type="button"
                          title="Edit"
                          aria-label={`Edit ${product.name}`}
                          onClick={() => openEdit(product)}
                          className="rounded-lg p-2.5 text-slate-400 transition hover:bg-violet-50 hover:text-violet-700"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          type="button"
                          title="Delete"
                          aria-label={`Delete ${product.name}`}
                          onClick={() => setDeleteTarget(product)}
                          className="rounded-lg p-2.5 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:hidden">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="min-w-0 rounded-2xl border border-slate-200 p-4 transition hover:border-violet-200 hover:shadow-sm"
              >
                <div className="flex min-w-0 gap-3">
                  <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-xl bg-slate-100 text-slate-400">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ImageIcon size={22} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1">
                      <StatusPill status={product.status} />
                    </div>
                    <h3 className="break-words text-sm font-extrabold leading-5">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {product.category} · {product.color || "No color"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-lg font-extrabold">
                      {formatMoney(product.price)}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      SKU: {product.sku || "—"} · Stock: {getStock(product)}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-1">
                    <button
                      type="button"
                      aria-label={`Toggle status for ${product.name}`}
                      onClick={() => toggleStatus(product)}
                      className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-violet-50 hover:text-violet-700"
                    >
                      <Eye size={15} />
                    </button>

                    <button
                      type="button"
                      aria-label={`Edit ${product.name}`}
                      onClick={() => openEdit(product)}
                      className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-violet-50 hover:text-violet-700"
                    >
                      <Pencil size={15} />
                    </button>

                    <button
                      type="button"
                      aria-label={`Delete ${product.name}`}
                      onClick={() => setDeleteTarget(product)}
                      className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {SIZES.filter(
                    (size) => Number(product.sizes?.[size]) > 0
                  ).map((size) => (
                    <span
                      key={size}
                      className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600"
                    >
                      {size}: {product.sizes[size]}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="px-5 py-14 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-400">
                <Package size={22} />
              </div>
              <h3 className="mt-4 text-sm font-extrabold">No products found</h3>
              <p className="mt-1 text-xs text-slate-500">
                Try a different search or add a new product.
              </p>
              <button
                type="button"
                onClick={openCreate}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-violet-700"
              >
                <Plus size={15} />
                Add product
              </button>
            </div>
          )}
        </section>

        <p className="border-t border-slate-200 pt-5 text-center text-xs font-medium leading-5 text-slate-400">
          Product changes are currently stored in React state for this session.
          Connect a backend/database for permanent storage.
        </p>
      </main>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/50 p-3 py-5 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-600">
                  Product details
                </p>
                <h2
                  id="product-modal-title"
                  className="mt-1 text-lg font-extrabold tracking-tight sm:text-xl"
                >
                  {editingId ? "Edit product" : "Add a product"}
                </h2>
              </div>

              <button
                type="button"
                aria-label="Close product form"
                onClick={() => setModalOpen(false)}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-800"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={saveProduct}>
              <div className="max-h-[calc(100dvh-170px)] space-y-6 overflow-y-auto p-4 sm:p-7">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <ProductField label="Product name *">
                      <input
                        required
                        maxLength={120}
                        className={inputClass}
                        value={form.name}
                        onChange={(event) =>
                          updateForm("name", event.target.value)
                        }
                        placeholder="e.g. Oversized Graphic Hoodie"
                      />
                    </ProductField>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <ProductField label="Category">
                        <select
                          className={inputClass}
                          value={form.category}
                          onChange={(event) =>
                            updateForm("category", event.target.value)
                          }
                        >
                          {CATEGORIES.map((category) => (
                            <option key={category}>{category}</option>
                          ))}
                        </select>
                      </ProductField>

                      <ProductField label="Color">
                        <input
                          className={inputClass}
                          value={form.color}
                          onChange={(event) =>
                            updateForm("color", event.target.value)
                          }
                          placeholder="Black, Olive Green..."
                        />
                      </ProductField>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <ProductField label="Selling price (₹) *">
                        <input
                          required
                          type="number"
                          min="0"
                          step="1"
                          className={inputClass}
                          value={form.price}
                          onChange={(event) =>
                            updateForm("price", event.target.value)
                          }
                          placeholder="1499"
                        />
                      </ProductField>

                      <ProductField label="Original price (₹)">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          className={inputClass}
                          value={form.comparePrice}
                          onChange={(event) =>
                            updateForm("comparePrice", event.target.value)
                          }
                          placeholder="1799"
                        />
                      </ProductField>
                    </div>

                    <ProductField label="SKU / Product code">
                      <input
                        className={inputClass}
                        value={form.sku}
                        onChange={(event) =>
                          updateForm("sku", event.target.value)
                        }
                        placeholder="HD-001"
                      />
                    </ProductField>

                    <ProductField label="Description">
                      <textarea
                        rows={4}
                        className={`${inputClass} resize-y`}
                        value={form.description}
                        onChange={(event) =>
                          updateForm("description", event.target.value)
                        }
                        placeholder="Describe fabric, fit, features and care instructions..."
                      />
                    </ProductField>
                  </div>

                  <div className="space-y-4">
                    <ProductField label="Product image">
                      <ProductImageUpload
                        image={form.image}
                        onChange={(image) => updateForm("image", image)}
                      />
                    </ProductField>

                    <ProductField label="Publication status">
                      <select
                        className={inputClass}
                        value={form.status}
                        onChange={(event) =>
                          updateForm("status", event.target.value)
                        }
                      >
                        <option>Draft</option>
                        <option>Published</option>
                      </select>
                    </ProductField>

                    <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
                      <p className="text-sm font-extrabold text-slate-900">
                        Product summary
                      </p>

                      <div className="mt-3 flex items-center justify-between gap-3 text-sm">
                        <span className="font-medium text-slate-500">
                          Selling price
                        </span>
                        <span className="font-extrabold text-slate-900">
                          {formatMoney(form.price)}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                        <span className="font-medium text-slate-500">
                          Total stock
                        </span>
                        <span className="font-extrabold text-slate-900">
                          {getStock(form)} units
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                        <span className="font-medium text-slate-500">
                          Sizes in stock
                        </span>
                        <span className="font-extrabold text-slate-900">
                          {
                            SIZES.filter(
                              (size) => Number(form.sizes[size]) > 0
                            ).length
                          }{" "}
                          sizes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <section className="rounded-2xl border border-slate-200 p-4 sm:p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-extrabold">
                        <Boxes size={17} className="text-violet-600" />
                        Size & inventory
                      </h3>
                      <p className="mt-1 text-xs font-medium text-slate-500">
                        Set available units for each size. Use 0 for
                        out-of-stock sizes.
                      </p>
                    </div>

                    <span className="w-fit rounded-lg bg-violet-50 px-3 py-2 text-xs font-extrabold text-violet-700">
                      {getStock(form)} units total
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                    {SIZES.map((size) => (
                      <ProductField key={size} label={`${size} stock`}>
                        <input
                          aria-label={`${size} stock quantity`}
                          type="number"
                          min="0"
                          step="1"
                          className={`${inputClass} px-2 text-center`}
                          value={form.sizes[size] ?? 0}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              sizes: {
                                ...current.sizes,
                                [size]: event.target.value,
                              },
                            }))
                          }
                        />
                      </ProductField>
                    ))}
                  </div>
                </section>
              </div>

              <div className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-slate-50/80 px-4 py-4 sm:flex-row sm:justify-end sm:px-7">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-violet-700"
                >
                  <Save size={16} />
                  {editingId ? "Save changes" : "Save product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-50 text-red-600">
              <Trash2 size={21} />
            </div>

            <h2 className="mt-4 text-lg font-extrabold">
              Delete this product?
            </h2>

            <p className="mt-2 break-words text-sm leading-6 text-slate-500">
              <span className="font-bold text-slate-700">
                {deleteTarget.name}
              </span>{" "}
              will be removed from this session.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={confirmDelete}
                className="rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white hover:bg-red-700"
              >
                Delete product
              </button>
            </div>
          </div>
        </div>
      )}

      {notice && (
        <div
          role="status"
          className="fixed bottom-4 left-4 right-4 z-[70] mx-auto flex max-w-md items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 shadow-xl sm:bottom-6 sm:left-auto sm:right-6"
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <Check size={15} />
          </span>
          <span>{notice}</span>
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setNotice("")}
            className="ml-auto text-slate-400 hover:text-slate-700"
          >
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
