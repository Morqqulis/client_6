// import { IP } from './config.js'
export const IP = 'https://analytics.radiostation.ai/app/'
// const LOCALUSE = 'http://127.0.0.1:8000/'

class UserService {
  async hello(data) {
    const res = await fetch(IP + 'hello/ ', {
      method: 'POST',
      body: data,
    })
    console.log(res)
    return res.json()
  }

  async get_songs_data() {
    const res = await fetch(IP + 'get_songs_data/ ', {
      method: 'GET',
    })
    return res.json()
  }

  async get_file_name() {
    const res = await fetch(IP + 'get_file_name/ ', {
      method: 'GET',
    })
    return res.json()
  }

  async analyse_csv() {
    const res = await fetch(IP + 'analyse_csv/ ', {
      method: 'GET',
    })
    return res.json()
  }

  async upload_csv(data) {
    console.log(data)
    const res = await fetch(IP + 'upload_csv_file/ ', {
      method: 'POST',
      body: data,
    })
    return res.json()
  }

  // Function to download playlist
  async downloadPlaylist() {
    try {
      const response = await fetch(IP + 'download-playlist/')
      if (!response.ok) {
        throw new Error('Failed to download playlist CSV')
      }
      return await response.blob()
    } catch (error) {
      console.error('Error downloading playlist CSV:', error)
      throw error
    }
  }

  // Function to download logs
  async downloadLogs() {
    try {
      const response = await fetch(IP + 'download-logs/')
      if (!response.ok) {
        throw new Error('Failed to download logs ZIP')
      }
      return await response.blob()
    } catch (error) {
      console.error('Error downloading logs ZIP:', error)
      throw error
    }
  }
}

export default UserService
