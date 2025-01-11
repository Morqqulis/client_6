export interface TrackData {
  TW: string
  LW: string
  TITLE: string
  ARTIST: string
  IMAGE: string | null
}

export interface CsvState {
  fileName: string
  fileUploaded: boolean
  data: TrackData[]
}

export type CsvAction =
  | { type: 'SET_FILE_NAME'; payload: string }
  | { type: 'SET_FILE_UPLOADED'; payload: boolean }
  | { type: 'SET_CSV_DATA'; payload: TrackData[] }
  | { type: 'REMOVE_FILE' }
