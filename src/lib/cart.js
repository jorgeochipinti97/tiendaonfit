import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useStore = create(devtools((set, get) => ({
  cart: [],
  addToCart: (product, quantity = 1, size = null) => set(state => {
    const existingProduct = state.cart.find(
      item => item.id === product._id && item.size === size
    );
    if (existingProduct) {
      return {
        cart: state.cart.map((item) =>
          item.id === product._id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      };
    } else {
      return {
        cart: [...state.cart, { ...product, quantity, size }],
      };
    }
  }),
  removeFromCart: (id, size = null) => set(state => ({
    cart: state.cart.filter((item) => item.id !== id || item.size !== size),
  })),
  clearCart: () => set({ cart: [] }),
  increaseQuantity: (id, size = null) => set(state => ({
    cart: state.cart.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ),
  })),
  decreaseQuantity: (id, size = null) => set(state => ({
    cart: state.cart.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  })),
  getTotal: () => {
    const cart = get().cart;
    return cart.reduce((total, item) => {
      const price = item.precioDescuento || item.precio;
      return total + price * item.quantity;
    }, 0);
  },
})))

export default useStore;
