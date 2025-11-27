/**
 * Shopping Cart State Management
 * Uses Zustand for global state
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ExpansionPackItem {
  packId: string;
  packName: string;
  price: number;
  setup: number;
}

export interface CartItem {
  agentId: string;
  agentName: string;
  agentIcon: string;
  levelId: string;
  levelName: string;
  basePrice: number;
  setup: number;
  expansionPacks: ExpansionPackItem[];
}

interface CartStore {
  items: CartItem[];
  billingCycle: 'monthly' | 'annual';
  
  // Actions
  addAgent: (agent: CartItem) => void;
  removeAgent: (agentId: string) => void;
  toggleExpansionPack: (agentId: string, packId: string) => void;
  setBillingCycle: (cycle: 'monthly' | 'annual') => void;
  clearCart: () => void;
  
  // Getters
  getSubtotal: () => number;
  getTotal: () => number;
  getSavings: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      billingCycle: 'monthly',
      
      addAgent: (agent) => {
        set((state) => {
          // Check if agent already exists
          const exists = state.items.find((i) => i.agentId === agent.agentId);
          if (exists) {
            return state; // Don't add duplicates
          }
          return { items: [...state.items, agent] };
        });
      },
      
      removeAgent: (agentId) => {
        set((state) => ({
          items: state.items.filter((item) => item.agentId !== agentId),
        }));
      },
      
      toggleExpansionPack: (agentId, packId) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.agentId !== agentId) return item;
            
            const packExists = item.expansionPacks.find((p) => p.packId === packId);
            
            if (packExists) {
              // Remove pack
              return {
                ...item,
                expansionPacks: item.expansionPacks.filter((p) => p.packId !== packId),
              };
            } else {
              // Add pack (need to get pack data from somewhere - TBD)
              // For now, just return item as is
              return item;
            }
          });
          
          return { items: newItems };
        });
      },
      
      setBillingCycle: (cycle) => {
        set({ billingCycle: cycle });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getSubtotal: () => {
        const state = get();
        return state.items.reduce((total, item) => {
          const itemTotal = item.basePrice + 
            item.expansionPacks.reduce((sum, pack) => sum + pack.price, 0);
          return total + itemTotal;
        }, 0);
      },
      
      getTotal: () => {
        const state = get();
        const subtotal = state.getSubtotal();
        return state.billingCycle === 'annual' ? subtotal * 0.8 * 12 : subtotal;
      },
      
      getSavings: () => {
        const state = get();
        const subtotal = state.getSubtotal();
        return state.billingCycle === 'annual' ? subtotal * 0.2 * 12 : 0;
      },
    }),
    {
      name: 'agents-booster-cart',
    }
  )
);
