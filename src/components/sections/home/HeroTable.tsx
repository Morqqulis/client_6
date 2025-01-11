'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useFileStore } from '@/stores/useFileStore'
import { useMemo } from 'react'

export function HeroTable() {
  const notdisplay = ['Spotify ID', 'Artist IDs', 'Added By']
  const { data, highlightedTitles, sortOption } = useFileStore()

  const sortedData = useMemo(() => {
    if (sortOption === 'default') return data

    return [...data].sort((a, b) => {
      switch (sortOption) {
        case 'popularity-asc':
          return parseInt(a['Popularity'] || '0') - parseInt(b['Popularity'] || '0')
        case 'popularity-desc':
          return parseInt(b['Popularity'] || '0') - parseInt(a['Popularity'] || '0')
        case 'release-date-asc':
          return new Date(a['Release Date'] || '').getTime() - new Date(b['Release Date'] || '').getTime()
        case 'release-date-desc':
          return new Date(b['Release Date'] || '').getTime() - new Date(a['Release Date'] || '').getTime()
        case 'track-name-asc':
          return (a['Track Name'] || '').localeCompare(b['Track Name'] || '')
        case 'track-name-desc':
          return (b['Track Name'] || '').localeCompare(a['Track Name'] || '')
        case 'artist-asc':
          return (a['Artist Name(s)'] || '').localeCompare(b['Artist Name(s)'] || '')
        case 'artist-desc':
          return (b['Artist Name(s)'] || '').localeCompare(a['Artist Name(s)'] || '')
        case 'duration-asc':
          return parseInt(a['Duration (ms)'] || '0') - parseInt(b['Duration (ms)'] || '0')
        case 'duration-desc':
          return parseInt(b['Duration (ms)'] || '0') - parseInt(a['Duration (ms)'] || '0')
        default:
          return 0
      }
    })
  }, [data, sortOption])

  if (data.length === 0) return null

  return (
    <Table className={`text-left whitespace-nowrap`}>
      <TableHeader className={``}>
        <TableRow className={`border-custom-red/50`}>
          <TableHead className={`px-4 py-3 text-left !font-semibold !text-white lg:text-sm`}>Index</TableHead>
          {Object.keys(data[0] || {}).map(
            (key) =>
              !notdisplay.includes(key) && (
                <TableHead className={`px-4 py-3 text-left !font-semibold !text-white lg:text-sm`} key={key}>
                  {key}
                </TableHead>
              ),
          )}
        </TableRow>
      </TableHeader>
      <TableBody className={``}>
        {sortedData.map((row, index) => (
          <TableRow className={`border-neutral-100/10`} key={index}>
            <TableCell className={`px-4 py-3 border-none`}>{index + 1}</TableCell>
            {Object.entries(row).map(
              ([key, value]) =>
                !notdisplay.includes(key) && (
                  <TableCell
                    className={`border-none px-4 py-3 ${
                      key === 'Track Name' && Array.isArray(highlightedTitles) && highlightedTitles.includes(value)
                        ? 'text-custom-red'
                        : ''
                    }`}
                    key={key}
                  >
                    {value}
                  </TableCell>
                ),
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
