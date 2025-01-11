'use client'

import { useFileStore } from '@/stores/useFileStore'
import { AnalyticsData } from '@/types/analytics'
import { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'
import { AnalyticsChart } from './AnalyticsChart'

export function AnalyticsLoader() {
  const { fileUploaded } = useFileStore()
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (fileUploaded) {
      setIsLoading(true)
      setError(null)

      setTimeout(() => {
        setAnalyticsData({
          artists_barchart: JSON.stringify([
            ['Artist1', 10],
            ['Artist2', 8],
            ['Artist3', 6],
          ]),
          top50_artists_barchart: JSON.stringify([
            ['Artist1', 10],
            ['Artist2', 8],
            ['Artist3', 6],
          ]),
          volume_of_songs: JSON.stringify([
            [1, 100],
            [2, 80],
            [3, 60],
          ]),
          all_genres: JSON.stringify([
            ['Genre1', 20],
            ['Genre2', 15],
            ['Genre3', 10],
          ]),
          songs_per_year: JSON.stringify([
            [2020, 50],
            [2021, 60],
            [2022, 70],
          ]),
          popularity_distribution: JSON.stringify([
            [1, 10],
            [2, 20],
            [3, 15],
          ]),
        })
        setIsLoading(false)
      }, 100)
    } else {
      setAnalyticsData(null)
      setIsLoading(false)
      setError(null)
    }
  }, [fileUploaded])

  useEffect(() => {
    console.log(analyticsData)

    return () => {}
  }, [analyticsData])

  if (!fileUploaded) {
    return <div className="flex justify-center items-center p-4 text-center h-dvh">Upload a file to view analytics</div>
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4 text-center h-dvh">
        <RingLoader size={120} color={'#36ad47'} />
      </div>
    )
  }

  if (error) {
    return <div className="flex justify-center items-center p-4 text-center text-red-500 h-dvh">{error}</div>
  }

  return (
    <section className={`py-10`}>
      <div className={`px-5 mx-auto w-full`}>
        <h1 className="mb-8 text-2xl font-bold text-center text-custom-red">Analytics</h1>
        <div className={`className="grid lg:grid-cols-3" auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2`}>
          {analyticsData && (
            <AnalyticsChart
              title="Artist Bar Chart"
              data={JSON.parse(analyticsData.artists_barchart)}
              xAxisTitle="Artists"
              yAxisTitle="Number of Songs"
            />
            // <Plot data={JSON.parse(analyticsData.artists_barchart)} layout={{ title: 'Artist Bar Chart' }} />
          )}
        </div>
      </div>
    </section>
  )
}
