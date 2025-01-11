'use client'
import { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'

interface FrontierPlotProps {
  frontierData: {
    Z: number[][]
    xx: number[]
    yy: number[]
    embedded_x: number[]
    embedded_y: number[]
    level_end: number
    zmax: number
    songs: string[]
  }
}

const FrontierPlot: React.FC<FrontierPlotProps> = ({ frontierData }) => {
  const [plotSize, setPlotSize] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const updatePlotSize = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      let newWidth = 1200 // Default width
      let newHeight = 800 // Default height

      if (windowWidth <= 768) {
        // For smaller screens (e.g., mobile)
        newWidth = windowWidth * 0.9 // Adjust as needed
        newHeight = windowHeight * 0.5 // Adjust as needed
      } else if (windowWidth <= 1024) {
        // For medium screens
        newWidth = 800
        newHeight = 800
      }

      setPlotSize({ width: newWidth, height: newHeight })
    }

    updatePlotSize()
    window.addEventListener('resize', updatePlotSize)
    return () => window.removeEventListener('resize', updatePlotSize)
  }, [])

  return (
    <Plot
      data={[
        {
          z: frontierData.Z,
          x: frontierData.xx,
          y: frontierData.yy,
          type: 'contour',
          colorscale: 'Blues',
          showscale: false,
          contours: {
            end: frontierData.level_end,
          },
        },
        {
          z: frontierData.Z,
          x: frontierData.xx,
          y: frontierData.yy,
          type: 'contour',
          opacity: 0.5,
          showscale: false,
          colorscale: [
            [0, 'white'],
            [1, 'green'],
          ],
          contours: {
            start: 0,
            end: frontierData.zmax,
            size: frontierData.zmax,
          },
        },
        {
          z: frontierData.Z,
          x: frontierData.xx,
          y: frontierData.yy,
          type: 'contour',
          showscale: false,
          colorscale: [
            [0, 'blue'],
            [1, 'green'],
          ],
          contours: {
            coloring: 'lines',
            start: 0,
            end: 0,
          },
          line: {
            width: 2,
          },
        },
        {
          x: frontierData.embedded_x,
          y: frontierData.embedded_y,
          mode: 'markers',
          type: 'scatter',
          marker: { size: 8, color: 'black' },
          cliponaxis: false,
        },
      ]}
      layout={{
        width: plotSize.width,
        height: plotSize.height,
        font: {
          color: 'white',
        },
        margin: {
          l: 50,
          r: 50,
          b: 50,
          t: 50,
          pad: 4,
        },
        annotations: frontierData.songs.map((track, index) => ({
          x: frontierData.embedded_x[index],
          y: frontierData.embedded_y[index],
          text: track,
          showarrow: true,
          font: {
            family: 'Arial',
            size: 14,
            color: 'green',
          },
        })),
        plot_bgcolor: 'rgba(0,0,0,0)',
        paper_bgcolor: 'rgba(0,0,0,0)',
      }}
    />
  )
}

export default FrontierPlot
