'use client'

import { useEffect, useState } from 'react'
import { useFileStore } from '@/stores/useFileStore'
import UserService from '@/lib/service'
import FrontierPlot from '@/components/custom/FrontierPlot'

interface FrontierData {
  embedded_x: number[]
  embedded_y: number[]
  xx: number[]
  yy: number[]
  Z: number[][]
  level_start: number
  level_end: number
  level_size: number
  zmax: number
  songs: string[]
}

const StationPage = () => {
  const fileUploaded = useFileStore((state) => state.fileUploaded)

  const [frontierData, setFrontierData] = useState<{ tsne: FrontierData; pca: FrontierData }>({
    tsne: {
      embedded_x: [],
      embedded_y: [],
      xx: [],
      yy: [],
      Z: [],
      level_start: 0,
      level_end: 0,
      level_size: 0,
      zmax: 0,
      songs: [],
    },
    pca: {
      embedded_x: [],
      embedded_y: [],
      xx: [],
      yy: [],
      Z: [],
      level_start: 0,
      level_end: 0,
      level_size: 0,
      zmax: 0,
      songs: [],
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      if (fileUploaded) {
        const service = new UserService()
        try {
          const res = await service.analyse_csv()
          if (res) {
            setFrontierData({
              tsne: res['station_fit_score_t_sine'],
              pca: res['station_fit_score_pca'],
            })
          }
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    }

    fetchData()
  }, [fileUploaded])

  return (
    <main className="min-h-screen text-white bg-gray-900">
      <section className="container px-4 py-8 mx-auto">
        {fileUploaded ? (
          <div>
            <div className="text-center">{/* <FrontierPlot2 frontierData={tsneFrontierData} /> */}</div>
            <div className="text-center">
              <h1 className="mt-4 text-[18px] text-white">Station Fit</h1>
              <FrontierPlot frontierData={frontierData.tsne} />
            </div>
          </div>
        ) : (
          <div className="grid h-48 grid-cols-1 gap-4 place-items-center">
            <h1 className="text-white">No File Uploaded</h1>
          </div>
        )}
      </section>
    </main>
  )
}

export default StationPage
