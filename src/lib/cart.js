import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set, get) => ({
    cart: [],
    shippingDetails: {
      firstName: "",
      lastName: "",
      idNumber: "",
      email: "",
      address: "",
      addressNumber: "",
      piso: "",
      city: "",
      localidad: "",
      provincia: "",
      mobile: "",
      postalCode: "",
      deliveryNote: "",
      discountCode:""
    },
    paymentDetails: {
      tarjetaSeleccionada: "",
      numeroTarjeta: "",
      mesExpiracion: "",
      anioExpiracion: "",
      codigoSeguridad: "",
      nombreTitular: "",
      tipoIdentificacion: "",
      numeroIdentificacion: "",
      cuotas: 1,
    },
    addToCart: (product, quantity = 1, size = null) =>
      set((state) => {
        const existingProduct = state.cart.find(
          (item) => item._id === product._id && item.size === size
        );
        if (existingProduct) {
          return {
            cart: state.cart.map((item) =>
              item._id === product._id && item.size === size
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
    removeFromCart: (id, size = null) =>
      set((state) => ({
        cart: state.cart.filter(
          (item) => item._id !== id || item.size !== size
        ),
      })),
    clearCart: () => set({ cart: [] }),
    increaseQuantity: (id, size = null) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item._id === id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      })),
    decreaseQuantity: (id, size = null) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item._id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      })),
    getTotal: () => {
      const cart = get().cart;
      return cart.reduce((total, item) => {
        const price_ = item.precioDescuento || item.precio;
        return total + price_ * item.quantity;
      }, 0);
    },
    getProducts: () => get().cart,
    getTotalItems: () => {
      const cart = get().cart;
      return cart.reduce((total, item) => total + item.quantity, 0);
    },
    updateShippingDetails: (newData) =>
      set((state) => ({
        shippingDetails: { ...state.shippingDetails, ...newData },
      })),
    updatePaymentDetails: (newData) =>
      set((state) => ({
        paymentDetails: { ...state.paymentDetails, ...newData },
      })),
    resetFormData: () =>
      set(() => ({
        shippingDetails: {
          firstName: "",
          lastName: "",
          idNumber: "",
          email: "",
          address: "",
          addressNumber: "",
          piso: "",
          city: "",
          localidad: "",
          provincia: "",
          mobile: "",
          postalCode: "",
          deliveryNote: "",
          idNumber: "",
        },
        paymentDetails: {
          tarjetaSeleccionada: "",
          numeroTarjeta: "",
          mesExpiracion: "",
          anioExpiracion: "",
          codigoSeguridad: "",
          nombreTitular: "",
          tipoIdentificacion: "",
          numeroIdentificacion: "",
          totalPesos: 0,
          cuotas: 1,
          discountCode: {},
        },
        applyDiscountCode: async (code) => {
          try {
            const response = await axios.get(`/api/codes?code=${code}`);
            const discountCode = response.data;
            if (discountCode && !discountCode.isUsed) {
              const discountAmount = discountCode.isPercentaje
                ? (get().getTotal() * discountCode.valor) / 100
                : discountCode.valor;
              set({
                discountCode: code,
                discountAmount: discountAmount
              });
            } else {
              console.error("Discount code is invalid or already used");
            }
          } catch (error) {
            console.error("Failed to apply discount code:", error);
          }
        },
      })),
  }))
);

export default useStore;
