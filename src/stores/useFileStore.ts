import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type SortOption =
  | 'default'
  | 'popularity-asc'
  | 'popularity-desc'
  | 'release-date-asc'
  | 'release-date-desc'
  | 'track-name-asc'
  | 'track-name-desc'
  | 'artist-asc'
  | 'artist-desc'
  | 'duration-asc'
  | 'duration-desc'

interface FileState {
  fileName: string
  fileUploaded: boolean
  data: Record<string, string>[]
  highlightedTitles: string[]
  sortOption: SortOption
  setFileName: (name: string) => void
  setFileUploaded: (uploaded: boolean) => void
  setCsvData: (data: Record<string, string>[]) => void
  removeFile: () => void
  toggleHighlight: () => void
  setSortOption: (option: SortOption) => void
}

export const useFileStore = create<FileState>()(
  persist(
    (set) => ({
      fileName: '',
      fileUploaded: false,
      data: [],
      highlightedTitles: [],
      sortOption: 'default',
      setFileName: (name) => set({ fileName: name }),
      setFileUploaded: (uploaded) => set({ fileUploaded: uploaded }),
      setCsvData: (data) => set({ data, fileUploaded: true }),
      removeFile: () =>
        set({
          fileName: '',
          fileUploaded: false,
          data: [],
          highlightedTitles: [],
          sortOption: 'default',
        }),
      toggleHighlight: () =>
        set((state) => {
          const currentHighlightedTitles = state.highlightedTitles || []
          const allTitles = state.data.map((row) => row['Track Name'])
          const newHighlightedTitles = currentHighlightedTitles.length === 0 ? allTitles : []
          return { highlightedTitles: newHighlightedTitles }
        }),
      setSortOption: (option) => set({ sortOption: option }),
    }),
    {
      name: 'file-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        fileName: state.fileName,
        fileUploaded: state.fileUploaded,
        data: state.data,
        highlightedTitles: state.highlightedTitles,
        sortOption: state.sortOption,
      }),
    },
  ),
)
