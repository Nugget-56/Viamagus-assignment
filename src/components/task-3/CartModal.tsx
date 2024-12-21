import { useState } from 'react'
import { Minus, Plus, ShoppingCart, X } from 'lucide-react'
import { Product, formatPrice } from './ShoppingCart'

interface CartModalProps {
  products: Product[]
  updateQuantity: (id: number, change: number) => void
}

export function CartModal({ products, updateQuantity }: CartModalProps) {
  const [open, setOpen] = useState(false)
  const [discount, setDiscount] = useState(0)

  const cartItems = products.filter(product => product.quantity > 0);
  const totalItems = cartItems.reduce((sum, product) => sum + product.quantity, 0);
  const subtotal = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const total = subtotal - (subtotal * discount / 100);

  return (
    <div>
      <button
        className="flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded"
        onClick={() => setOpen(true)}
      >
        <ShoppingCart className="h-4 w-4" />
        CART ({totalItems})
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-white w-full max-w-md rounded-md">
            <button
              className="absolute top-4 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
              aria-label="Close cart"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold p-4 pb-2 border-b">Your Cart</h2>
            <div className="flex flex-col gap-2 mt-8 min-h-[15vh] max-h-[60vh] overflow-auto px-4">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Cart is empty, add some items!</p>
              ) : (
                cartItems.map((product) => (
                  <div key={product.id} className="flex flex-col gap-2 py-4 border-b">
                    <div className='flex justify-between'>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatPrice(product.price)} each
                        </p>
                      </div>
                      <div className="flex items-center md:space-x-2">
                        <button
                          className="border border-gray-300 rounded p-2"
                          onClick={() => updateQuantity(product.id, -1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{product.quantity}</span>
                        <button
                          className="border border-gray-300 rounded p-2"
                          onClick={() => updateQuantity(product.id, 1)}
                          aria-label={`Increase quantity of ${product.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>    
                    </div>
                    <div className="flex justify-end text-gray-600 font-semibold">
                      Subtotal: {formatPrice(product.price * product.quantity)}                    
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="bg-gray-100 space-y-4 p-4 rounded-md">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="w-full flex items-center mb-4">
                <label htmlFor="discount" className="text-gray-600 mr-2">Discount (%):</label>
                <input
                  id="discount"
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(Math.max(0, Math.min(100, Number(e.target.value))))}
                  className="w-15 p-1 pl-2 border border-gray-300 rounded"
                  min="0"
                  max="100"
                />
              </div>
              <div className="flex justify-between font-bold text-xl">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button className="w-full bg-gray-900 text-white hover:bg-gray-800 bg-cover py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}