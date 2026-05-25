import { create } from 'zustand'
import axios from 'axios'

export const useCartStore = create((set, get) => ({

  isClose: true,

  cart: [],

  products: [],

  // CARGAR PRODUCTOS DESDE BACKEND
  getProducts: async () => {

    try {

      const response = await axios.get(
        'http://localhost:3000/api/products'
      )

      set({
        products: response.data
      })

    } catch (error) {

      console.log(error)

    }

  },

  toggleClose: () => set((state) => ({
    isClose: !state.isClose
  })),

  resetCart: () => set(() => ({
    cart: []
  })),

  addItemToCart: (newItem) => set((state) => ({
    cart: [...state.cart, newItem]
  })),

  updateItemInCart: (updateItem) => set((state) => ({
    cart: state.cart.map(item =>
      item.name === updateItem.name
        ? { ...updateItem }
        : item
    )
  })),

  deleteItemfromCart: (name) => set((state) => ({
    cart: state.cart.filter(item => item.name !== name)
  })),

  totalCard: () =>
    get().cart.reduce(
      (acc, item) => acc + (item.quantity * item.price),
      0
    )

}))