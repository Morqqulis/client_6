'use client'
import SchedulerDashboard from '@/components/custom/SheduleDashboard'
import UserService from '@/lib/service'
import React, { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'

const PlaylistTable = () => {
  const [playlistData, setPlaylistData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const userService = new UserService()
        const playlistBlob = await userService.downloadPlaylist()
        const data = await parseCSV(playlistBlob)
        // @ts-ignore
        setPlaylistData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching playlist data:', error)
        setLoading(false)
      }
    }

    fetchPlaylistData()
  }, [])

  const parseCSV = async (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const text = event.target.result
        // @ts-ignore
        const parsedData = text.split('\n').map((row) => row.split(','))
        resolve(parsedData)
      }
      reader.onerror = (error) => reject(error)
      reader.readAsText(blob)
    })
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0c1326]">
      <div className="flex overflow-y-auto flex-col flex-1">
        <div className="mx-4">
          <SchedulerDashboard />
        </div>
        <div className="px-4 py-2">
          <h2 className="my-4 text-center text-2xl font-bold uppercase text-[#DA2867]">Playlist</h2>
          <hr className="my-2 border border-gray-700" />
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <ClipLoader color="#DA2867" loading={loading} size={90} />
            </div>
          ) : (
            <table className="w-full">
              <tbody className="text-white">
                {playlistData.map((rowData, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={
                      rowIndex === 0 ? 'bg-gray-600 text-lg font-semibold uppercase text-white' : 'bg-gray-900'
                    }
                  >
                    {rowData.map((cellData, cellIndex) => (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className={`border-b border-gray-700 px-4 py-4 ${
                          cellIndex === rowData.length - 1 &&
                          (cellData.toLowerCase().includes('gold')
                            ? 'text-yellow-500'
                            : cellData.toLowerCase().includes('hot')
                              ? 'text-red-500'
                              : cellData.toLowerCase().includes('recurrent')
                                ? 'text-blue-400'
                                : '')
                        }`}
                      >
                        {cellIndex === 2 ? cellData.split(' ')[0] : cellData}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlaylistTable
