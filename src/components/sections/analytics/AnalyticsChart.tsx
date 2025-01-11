'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Plot from 'react-plotly.js'
import { useEffect, useState } from 'react'

interface AnalyticsChartProps {
  title: string
  data: Array<[string | number, number]>
  xAxisTitle: string
  yAxisTitle: string
}

export function AnalyticsChart({ title, data, xAxisTitle, yAxisTitle }: AnalyticsChartProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      const cardContent = document.querySelector('.card-content')
      if (cardContent) {
        setWidth(cardContent.clientWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent className="card-content">
        <Plot
          data={[
            {
              x: data.map((item) => item[0]),
              y: data.map((item) => item[1]),
              type: 'bar',
            },
          ]}
          layout={{
            width: width,
            height: 400,
            title: title,
            xaxis: { title: xAxisTitle },
            yaxis: { title: yAxisTitle },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            font: {
              color: '#fff',
            },
            margin: { l: 50, r: 50, b: 50, t: 50 },
          }}
          config={{ responsive: true }}
        />
      </CardContent>
    </Card>
  )
}
