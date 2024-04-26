import categories from 'app/sanity/schemaTypes/categories';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export type SanityStoreState = {
  hero: any;
  products: any;
  categories: any;
  congrats: any;
};

export type Actions = {
  addProducts: (product: any) => void; ///add types for this later
  addCategories: (category: any) => void; ///add types for this later
addHero: (heroes: any) => void; ///add types for this later
 addCongrats: (congrat: any) => void; ///add types for this later
}

export const useSanityStore = create<SanityStoreState & Actions>()( persist((set,get) => ({
      products: [],
      categories: [],
      hero:[],
      congrats:[],
     addProducts: (product) => set(state => ({ products:  product})),
     addHero: (heroes) => set(state => ({ hero:  heroes })),
     addCategories: (category) => set(state => ({ categories: category })),
     addCongrats: (congrat) => set(state => ({ congrats: congrat })),
    }),
    { name: 'sanity-store', 
    skipHydration: true 
  }
  )
)