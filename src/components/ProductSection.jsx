import React, { Suspense, use } from "react";
import { Check } from "lucide-react";

/* Loader (DaisyUI) */
const Loader = () => (
  <div className="flex justify-center py-10">
    <span className="loading loading-spinner loading-lg"></span>
  </div>
);

/* Card */
const ToolsSectionCard = ({ product, addToCart, cartItem }) => {
  const badgeClasses = {
    best_seller: "bg-yellow-100 text-yellow-700",
    popular: "bg-indigo-100 text-indigo-600",
    new: "bg-green-100 text-green-600",
  };

  const alreadyAdded = cartItem.find((i) => i.id === product.id);

  return (
    <div className="p-4 rounded-lg shadow relative bg-white">
      <span
        className={`absolute top-2 right-2 px-3 py-1 text-xs rounded-full font-medium ${badgeClasses[product.tagType]}`}
      >
        {product.tag}
      </span>

      <div className="w-14 h-14 flex items-center justify-center border rounded-full mb-4">
        <img src={product.icon} alt={product.name} />
      </div>

      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-500 text-sm">{product.description}</p>

      <p className="mt-2">
        <span className="text-2xl font-bold">${product.price}</span>/{product.period}
      </p>

      <ul className="mt-3 space-y-1">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <Check className="text-green-500 w-4" />
            {f}
          </li>
        ))}
      </ul>

      <button
        disabled={alreadyAdded}
        onClick={() => addToCart(product)}
        className="w-full mt-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold disabled:opacity-50"
      >
        {alreadyAdded ? "Added" : "Buy Now"}
      </button>
    </div>
  );
};

/* Cart Card */
const CartSectionCard = ({ cart, removeItem }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md mt-4">
      <div className="flex items-center gap-3">
        <img src={cart.icon} className="w-10 h-10" />
        <div>
          <h3 className="font-bold">{cart.name}</h3>
          <p className="text-sm text-gray-500">${cart.price}</p>
        </div>
      </div>

      <button onClick={() => removeItem(cart)} className="text-red-500 font-semibold">
        Remove
      </button>
    </div>
  );
};

/* Grid */
const ProductGrid = ({ productData, addToCart, cartItem }) => {
  const products = use(productData);

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {products.map((p) => (
        <ToolsSectionCard
          key={p.id}
          product={p}
          addToCart={addToCart}
          cartItem={cartItem}
        />
      ))}
    </div>
  );
};

/* Main Section */
const ToolsSection = ({
  productData,
  addToCart,
  cartItem,
  selectBtn,
  setSelectBtn,
  removeItem,
  checkOut,
}) => {
  return (
    <section className="py-10 max-w-7xl mx-auto" id="products">
      <h1 className="text-3xl font-bold text-center mb-2">
        Premium Digital Tools
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Boost your productivity with our tools
      </p>

      <div className="flex w-64 mx-auto border rounded-full overflow-hidden">
        <button
          onClick={() => setSelectBtn("products")}
          className={`flex-1 py-2 ${
            selectBtn === "products"
              ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
              : ""
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setSelectBtn("cart")}
          className={`flex-1 py-2 ${
            selectBtn === "cart"
              ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
              : ""
          }`}
        >
          Cart ({cartItem.length})
        </button>
      </div>

      {selectBtn === "products" ? (
        <Suspense fallback={<Loader />}>
          <ProductGrid
            productData={productData}
            addToCart={addToCart}
            cartItem={cartItem}
          />
        </Suspense>
      ) : (
        <div className="max-w-3xl mx-auto mt-10">
          {cartItem.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            <>
              {cartItem.map((c) => (
                <CartSectionCard key={c.id} cart={c} removeItem={removeItem} />
              ))}

              <div className="flex justify-between mt-6 font-bold">
                <span>Total</span>
                <span>
                  ${cartItem.reduce((acc, val) => acc + val.price, 0)}
                </span>
              </div>

              <button
                onClick={checkOut}
                className="w-full mt-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-md"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default ToolsSection;