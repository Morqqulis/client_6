'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fetchChartData } from '@/lib/api'
import { ArtistBarChart } from './ArtistBarChart'
import { GenreBarChart } from './GenreBarChart'
import { SongsPerYearChart } from './SongsPerYearChart'
import { PopularityDistributionChart } from './PopularityDistributionChart'
import { MusicalFeaturesChart } from './MusicalFeaturesChart'

export function ChartGrid() {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    const loadChartData = async () => {
      const data = await fetchChartData()
      setChartData(data)
    }
    loadChartData()
  }, [])

  if (!chartData) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Artist Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ArtistBarChart data={chartData.artistBarChartData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Genre Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <GenreBarChart data={chartData.genreBarChartData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Songs Per Year</CardTitle>
        </CardHeader>
        <CardContent>
          <SongsPerYearChart data={chartData.songsPerYear} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Popularity Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <PopularityDistributionChart data={chartData.popularityDistribution} />
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Musical Features</CardTitle>
        </CardHeader>
        <CardContent>
          <MusicalFeaturesChart data={chartData.musicalFeatures} />
        </CardContent>
      </Card>
    </div>
  )
}
