import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { CartModal } from "./CartModal";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const formatPrice = (value: number) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(value);
};

const productList = [
  {
    id: 1,
    name: "Whole Milk",
    price: 2.49,
    quantity: 0,
  },
  {
    id: 2,
    name: "White Bread",
    price: 1.99,
    quantity: 0,
  },
  {
    id: 3,
    name: "Large Eggs",
    price: 3.29,
    quantity: 0,
  },
  {
    id: 4,
    name: "Basmati Rice",
    price: 4.99,
    quantity: 0,
  },
  {
    id: 5,
    name: "Fuji Apples",
    price: 0.79,
    quantity: 0,
  },
  {
    id: 6,
    name: "Bar Soap",
    price: 1.25,
    quantity: 0,
  },
  {
    id: 7,
    name: "Mint Toothpaste",
    price: 3.49,
    quantity: 0,
  },
  {
    id: 8,
    name: "Herbal Shampoo",
    price: 5.99,
    quantity: 0,
  },
];


export default function Shop() {
  const [products, setProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem("cartData");
    return stored ? JSON.parse(stored) : productList;
  });

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(products));
  }, [products]);

  const updateQuantity = (id: number, change: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      )
    );
  };

  return (
    <>
    <header className="flex justify-between items-center px-4 md:px-8 py-6 bg-[url('/cart/bg.png')] bg-cover bg-center border-b border-gray-300">
      <h1 className="text-2xl font-bold">SHOP</h1>
      <CartModal products={products} updateQuantity={updateQuantity} />
    </header>
    <div className="px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="overflow-hidden border border-gray-300 rounded-md">
            <div className="flex items-center justify-center text-gray-400 aspect-square">
              {product.name}
            </div>
            <div className="p-4">
              <h2 className="font-bold text-base mb-2">{product.name}</h2>
              <p className="font-semibold">{formatPrice(product.price)}</p>
            </div>
            <div className="flex items-center p-4 pt-0">
              {product.quantity === 0 ? (
                <button
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 py-2 rounded"
                  onClick={() => updateQuantity(product.id, 1)}
                >
                  ADD TO CART
                </button>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <button
                    className="flex justify-center items-center border w-20 border-gray-300 rounded p-2"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-medium">{product.quantity}</span>
                  <button
                    className="flex justify-center items-center border w-20 border-gray-300 rounded p-2"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}