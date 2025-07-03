import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
  eco_score: number;
  carbon_saved: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalCarbonSaved: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,
      addItem: (item) => {
        const items = get().items;
        const existingItem = items.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            items: [...items, { ...item, quantity: 1 }],
          });
        }

        // Update totals
        const newItems = get().items;
        const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
        set({ total, itemCount });
      },
      removeItem: (id) => {
        const items = get().items.filter((item) => item.id !== id);
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
        set({ items, total, itemCount });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        const items = get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
        set({ items, total, itemCount });
      },
      clearCart: () => set({ items: [], total: 0, itemCount: 0 }),
      getTotalCarbonSaved: () => {
        return get().items.reduce(
          (total, item) => total + item.carbon_saved * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);