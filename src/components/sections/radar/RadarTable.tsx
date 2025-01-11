'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import UserService from '@/lib/service'
import { useFileStore } from '@/stores/useFileStore'
import { useRadarStore } from '@/stores/useRadarStore'
import { useEffect, useState } from 'react'

const RadarTable = () => {
  const [header, setHeader] = useState([])
  const notdisplay = ['Artist IDs', 'Spotify ID', 'Added By']
  const [data, setData] = useState([])
  const { fileUploaded } = useFileStore()

  const { gender, percentage, minAge, maxAge, selectedGenres } = useRadarStore()

  const filteredData = data.filter((song) => {
    const ageIndex = header.indexOf('Age')
    const maleIndex = header.indexOf('Male')
    const femaleIndex = header.indexOf('Female')
    const genresIndex = header.indexOf('Genres')

    let ageCondition = true
    let maleCondition = true
    let femaleCondition = true
    let genresCondition = true

    if (ageIndex !== -1) {
      const age = parseInt(song[ageIndex])
      ageCondition = age >= minAge && age <= maxAge
    }

    // Male filtering
    if (maleIndex !== -1 && gender === 'male' && percentage !== undefined) {
      const maleValue = parseInt(song[maleIndex])
      maleCondition = maleValue <= percentage
    }

    if (femaleIndex !== -1 && gender === 'female' && percentage !== undefined) {
      const maleValue = parseInt(song[femaleIndex])
      femaleCondition = maleValue <= percentage
    }

    // Genre filtering
    if (genresIndex !== -1) {
      const selectedGenresArray = Array.from(selectedGenres)

      if (selectedGenresArray.length === 0) {
        genresCondition = true
      } else {
        genresCondition = selectedGenresArray.every((genre) => song[genresIndex].includes(genre))
      }
    }

    // Return true only if all conditions are met
    return ageCondition && maleCondition && femaleCondition && genresCondition
  })

  useEffect(() => {
    if (fileUploaded) {
      const service = new UserService()
      setTimeout(() => {
        service.get_songs_data().then((res) => {
          const json = JSON.parse(res)
          if (json) {
            setHeader(json['columns'])
            setData(json['data'])
          }
        })
      }, 500)
    }
  }, [fileUploaded])

  
  if (!fileUploaded)
    return (
      <div className="grid h-48 grid-cols-1 place-items-center gap-4">
        <h1 className="text-white">No File Uploaded</h1>
      </div>
    )

  return (
    <div className="table-container max-h-[64vh] max-w-[99%] overflow-auto">
      <Table className="h-full whitespace-nowrap bg-[#0c1326] text-white">
        <TableHeader className="">
          <TableHead>
            <TableRow>
              <th className="px-4 py-3 text-left text-sm font-semibold">Index</th>

              {header.map(
                (head, index) =>
                  !notdisplay.includes(head) && (
                    <TableRow key={index}>
                      <TableCell key={index} className="px-4 py-3 text-left text-sm font-semibold">
                        {head}
                      </TableCell>
                    </TableRow>
                  ),
              )}
            </TableRow>
          </TableHead>
        </TableHeader>
        <TableBody className="text-sm font-light text-white">
          {filteredData.map((song, rowIndex) => (
            <TableRow key={rowIndex} className="border-b border-[#151c2f]">
              <TableCell className="px-4 py-3">{rowIndex + 1}</TableCell>
              {song.map(
                (details, colIndex) =>
                  !notdisplay.includes(header[colIndex]) && (
                    <TableCell key={colIndex} className="px-4 py-3">
                      {details}
                    </TableCell>
                  ),
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default RadarTable
