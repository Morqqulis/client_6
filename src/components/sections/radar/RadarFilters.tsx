'use client'
import UserService from '@/lib/service'
import { useFileStore } from '@/stores/useFileStore'
import { useRadarStore } from '@/stores/useRadarStore'
import { useEffect } from 'react'
import RadarBalanceBlock from './RadarBalanceBlock'
import RadarGenresBlock from './RadarGenresBlock'
import RadarRangeBlock from './RadarRangeBlock'

const RadarFilters = () => {
  const { fileUploaded } = useFileStore()
  const { setAvailableGenres } = useRadarStore()

  useEffect(() => {
    if (fileUploaded) {
      const service = new UserService()
      setTimeout(() => {
        service.get_songs_data().then((res) => {
          const json = JSON.parse(res)
          console.log(json) // Log the entire JSON response
          if (json && json.data && json.columns) {
            const genresIndex = json.columns.indexOf('Genres')
            if (genresIndex !== -1) {
              const genres = json.data.map((item) => item[genresIndex])
              console.log(genres)

              const allGenres = genres
                .flat()
                .join(',')
                .split(',')
                .map((genre) => genre.trim())
              const uniqueGenres = Array.from(new Set(allGenres))
              console.log(uniqueGenres) // Log unique genres

              setAvailableGenres(uniqueGenres)
            } else {
              console.log('Genres column not found.')
            }
          } else {
            console.log('Invalid JSON structure.')
          }
        })
      }, 500)
    }
  }, [fileUploaded, setAvailableGenres])

  //   if (!fileUploaded)
  //     return (
  //       <div className="grid h-48 grid-cols-1 gap-4 place-items-center">
  //         <h1 className="text-white">No File Uploaded</h1>
  //       </div>
  //     )

  return (
    <div className="m-4 gap-4 md:grid md:grid-cols-3">
      <RadarRangeBlock />
      <RadarBalanceBlock />
      <RadarGenresBlock />
    </div>
  )
}

export default RadarFilters
