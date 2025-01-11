'use client'
import { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'

const Charts = () => {
  const [plotWidth, setPlotWidth] = useState(400)
  // @ts-ignore
  const [chartData, setChartData] = useState({
    artistBarChartData: { x: [], y: [] },
    artistBarChartDataTop50: { x: [], y: [] },
    everybodyArtistBarchart: [],
    volumeAddedOvertime: [],
    volumeOfSongs: { x: [], y: [] },
    genreBarChartData: { x: [], y: [] },
    paretoFittedGenres: [],
    songsPerYear: { x: [], y: [] },
    songsPerYearAbsolute: { x: [], y: [] },
    gammaFittedSongsPerYear: [],
    popularityDistribution: { x: [], y: [] },
    songsLength: [],
    otherFeatures: {
      'Time Signature': [],
      Key: [],
      Mode: [],
    },
    musicalFeaturesTraces: [],
  })

  useEffect(() => {
    const updateWidth = () => {
      setPlotWidth(window.innerWidth > 768 ? 900 : window.innerWidth === 768 ? 700 : 400)
    }

    window.addEventListener('resize', updateWidth)
    updateWidth()

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // useEffect(() => {
  //   // Example: fetchChartData().then(setChartData)
  // }, [])

  const commonLayout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { size: 10, color: '#fff' },
    width: 400,
    height: 400,
  }

  const renderChart = (data, layout) => <Plot data={data} layout={{ ...commonLayout, ...layout }} />

  return (
    <main>
      <div className="flex h-screen overflow-hidden bg-[#0c1326]">
        <div className="flex overflow-y-auto flex-col flex-1">
          <div className="justify-items-stretch text-center lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3">
            {renderChart([{ x: chartData.artistBarChartData.x, y: chartData.artistBarChartData.y, type: 'bar' }], {
              title: 'Artist Bar Chart',
              xaxis: { tickangle: 80, title: 'Artists' },
              yaxis: { title: 'Num Songs' },
            })}

            {renderChart(
              [{ x: chartData.artistBarChartDataTop50.x, y: chartData.artistBarChartDataTop50.y, type: 'bar' }],
              {
                title: 'Top 50 Artist Bar Chart',
                xaxis: { tickangle: 80, title: 'Artists' },
                yaxis: { title: 'Num Songs' },
              },
            )}

            {renderChart(
              [
                {
                  x: chartData.artistBarChartData.x,
                  y: chartData.artistBarChartData.y,
                  type: 'bar',
                  name: 'All artists',
                },
                { x: chartData.artistBarChartData.x, y: chartData.everybodyArtistBarchart, name: 'Pareto fitted' },
              ],
              {
                title: 'Everybody Artist Bar Chart',
                xaxis: { tickangle: 80, title: 'Artists' },
                yaxis: { title: 'Num Songs' },
              },
            )}

            {renderChart([{ x: chartData.volumeAddedOvertime, type: 'histogram', histfunc: 'count' }], {
              title: 'Volume Added Over Time',
            })}

            {renderChart([{ x: chartData.volumeOfSongs.x, y: chartData.volumeOfSongs.y, type: 'bar' }], {
              title: 'Volume of songs binned by |songs from that artist|',
              xaxis: { title: 'Quasi-frequency domain' },
              yaxis: { title: 'Volume' },
            })}

            {renderChart(
              [{ x: chartData.genreBarChartData.x, y: chartData.genreBarChartData.y, type: 'bar', name: 'All Genres' }],
              { title: 'All genres', xaxis: { showticklabels: false, title: 'Genres' }, yaxis: { title: 'Num Songs' } },
            )}

            {renderChart(
              [
                { x: chartData.genreBarChartData.x, y: chartData.genreBarChartData.y, type: 'bar', name: 'All Genres' },
                { x: chartData.genreBarChartData.x, y: chartData.paretoFittedGenres, name: 'Pareto Fitted' },
              ],
              { title: 'All genres', xaxis: { showticklabels: false, title: 'Genres' }, yaxis: { title: 'Num Songs' } },
            )}

            {renderChart(
              [
                {
                  x: chartData.genreBarChartData.x.slice(0, 50),
                  y: chartData.genreBarChartData.y.slice(0, 50),
                  type: 'bar',
                },
              ],
              { title: 'Top 50 genres', xaxis: { tickangle: 80, title: 'Genres' }, yaxis: { title: 'Num Songs' } },
            )}

            {renderChart(
              [
                {
                  x: chartData.genreBarChartData.x.slice(-50),
                  y: chartData.genreBarChartData.y.slice(-50),
                  type: 'bar',
                },
              ],
              { title: 'Bottom 50 genres', xaxis: { tickangle: 80, title: 'Genres' }, yaxis: { title: 'Num Songs' } },
            )}

            {renderChart([{ x: chartData.songsPerYear.x, y: chartData.songsPerYear.y, type: 'bar' }], {
              title: 'Songs Per Year',
              xaxis: { title: 'Year' },
              yaxis: { title: 'Num Songs' },
            })}

            {renderChart(
              [
                {
                  x: chartData.songsPerYearAbsolute.x,
                  y: chartData.songsPerYearAbsolute.y,
                  name: 'Songs per year',
                  type: 'bar',
                },
                { x: chartData.songsPerYearAbsolute.x, y: chartData.gammaFittedSongsPerYear, name: 'Gamma Fitted' },
              ],
              {
                title: 'Songs per year (in absolute time)',
                xaxis: { showticklabels: false, title: 'Years Ago' },
                yaxis: { title: 'Num Songs' },
              },
            )}

            {renderChart(
              [{ x: chartData.popularityDistribution.x, y: chartData.popularityDistribution.y, type: 'bar' }],
              { title: 'Popularity Distribution', xaxis: { title: 'Popularity' }, yaxis: { title: 'Num Songs' } },
            )}

            {renderChart([{ x: chartData.songsLength, type: 'histogram' }], {
              title: 'Histogram of Songs Length',
              xaxis: { title: 'Durations' },
              yaxis: { title: 'Num Songs' },
            })}

            {renderChart(
              [
                {
                  x: chartData.otherFeatures['Time Signature'],
                  type: 'histogram',
                  marker: { color: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'] },
                  autobinx: true,
                },
              ],
              {
                title: 'Time Signature',
                bargap: 0.2,
                xaxis: { title: 'Beats Per Bar' },
                yaxis: { title: 'Num Songs' },
              },
            )}

            {renderChart(
              [
                {
                  x: chartData.otherFeatures['Key'],
                  type: 'histogram',
                  marker: {
                    opacity: 0.5,
                    color: [
                      'red',
                      'green',
                      'blue',
                      'orange',
                      'purple',
                      'yellow',
                      'cyan',
                      'magenta',
                      'brown',
                      'gray',
                      'red',
                      'green',
                    ],
                  },
                },
              ],
              {
                title: 'Key',
                bargap: 0.2,
                xaxis: {
                  title: 'Key',
                  tickmode: 'array',
                  tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                  ticktext: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
                },
                yaxis: { title: 'Num Songs' },
              },
            )}

            {renderChart(
              [
                {
                  x: chartData.otherFeatures['Mode'],
                  type: 'histogram',
                  autobinx: true,
                  marker: { color: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)'] },
                },
              ],
              {
                title: 'Major vs Minor Key',
                bargap: 0.2,
                xaxis: { title: 'Mode', tickmode: 'array', tickvals: [0, 1], ticktext: ['Minor', 'Major'] },
                yaxis: { title: 'Num Songs' },
              },
            )}

            <div className="col-span-1">
              {renderChart(chartData.musicalFeaturesTraces, {
                title: 'Histogram of Musical Features',
                grid: { rows: 9, columns: 1, pattern: 'independent', roworder: 'bottom to top' },
                xaxis: { title: 'Value' },
                yaxis: { title: 'Num Songs' },
                width: plotWidth,
                height: 900,
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Charts
