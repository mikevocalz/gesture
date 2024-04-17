import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export type SanityStoreState = {
hero: string
products: string
categories:string
}


export type Actions = {
  addTask: (title: string, description?: string) => void
  dragTask: (id: string | null) => void
  removeTask: (title: string) => void
}

export const useTaskStore = create<SanityStoreState & Actions>()(
  persist(
    set => ({
      products: [],
      categories: [],
      hero:[]
    }),
    { name: 'task-store', skipHydration: true }
  )
)