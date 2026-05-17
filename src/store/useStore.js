import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      eggUnlocked: false,
      unlockEgg: () => set({ eggUnlocked: true }),
      lenis: null,
      setLenis: (lenis) => set({ lenis }),
    }),
    {
      name: 'niru-portfolio',
      partialize: (state) => ({
        theme: state.theme,
        eggUnlocked: state.eggUnlocked,
      }),
    }
  )
)

export default useStore
