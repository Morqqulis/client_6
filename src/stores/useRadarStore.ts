import { create } from 'zustand'

interface IRadarStore {
  percentage: number
  range: [number, number]
  minAge: number
  maxAge: number
  selectedGender: 'male' | 'female'
  selectedGenres: Set<string>
  availableGenres: string[]

  setPercentage: (percentage: number) => void
  setRange: (percentage: [number, number]) => void
  setMinAge: (minAge: number) => void
  setMaxAge: (maxAge: number) => void
  setSelectedGender: (gender: 'male' | 'female') => void
  setSelectedGenres: (genres: Set<string>) => void
  setAvailableGenres: (genres: unknown[]) => void

  addGenre: (genre: string) => void
  removeGenre: (genre: string) => void
}

export const useRadarStore = create<IRadarStore>((set) => ({
  percentage: 100,
  range: [0, 120],
  minAge: 0,
  maxAge: 120,
  selectedGender: 'male',
  selectedGenres: new Set(),
  availableGenres: [],

  setPercentage: (percentage: number) => set({ percentage }),
  setRange: (range: [number, number]) => set({ range }),
  setMinAge: (minAge: number = 0) => set({ minAge }),
  setMaxAge: (maxAge: number = 120) => set({ maxAge }),
  setSelectedGender: (gender: 'male' | 'female' = 'male') => set({ selectedGender: gender }),
  setSelectedGenres: (genres: Set<string>) => set({ selectedGenres: genres }),
  setAvailableGenres: (genres: string[]) => set({ availableGenres: genres }),

  addGenre: (genre: string) => set((state) => ({ selectedGenres: new Set(state.selectedGenres.add(genre)) })),
  removeGenre: (genre: string) =>
    set((state) => {
      const newSet = new Set(state.selectedGenres)
      newSet.delete(genre)
      return { selectedGenres: newSet }
    }),
}))
