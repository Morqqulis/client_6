'use client'
import React, { useState, useEffect } from 'react'

import { ClipLoader } from 'react-spinners'
import JSZip from 'jszip'
import SchedulerDashboard from '@/components/custom/SheduleDashboard'
import UserService from '@/lib/service'

const ViewLogs = () => {
  const [logData, setLogData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDay, setSelectedDay] = useState('Monday')

  useEffect(() => {
    const fetchLogData = async () => {
      try {
        const userService = new UserService()
        const zipData = await userService.downloadLogs()
        const zip = await JSZip.loadAsync(zipData)
        const logFileNames = Object.keys(zip.files)
        const extractedLogs = []
        await Promise.all(
          logFileNames.map(async (fileName) => {
            const logFile = zip.file(fileName)
            if (logFile) {
              const logText = await logFile.async('text')
              const logLines = logText.split('\n').map((line) => {
                const records = []
                let record = ''
                let insideQuotes = false
                for (const char of line) {
                  if (char === '"') {
                    insideQuotes = !insideQuotes
                  } else if (char === ',' && !insideQuotes) {
                    records.push(record.trim())
                    record = ''
                  } else {
                    record += char
                  }
                }
                records.push(record.trim())
                return records.map((record) => record.replace(/\s{2,}/g, ' '))
              })

              let currentHour = 1
              logLines.forEach((line) => {
                if (
                  line.includes(
                    '----------------------------------------------------------------------------------------------------',
                  )
                ) {
                  const hour = currentHour
                  if (hour === 12) {
                    line[
                      line.indexOf(
                        '----------------------------------------------------------------------------------------------------',
                      )
                    ] = `${hour}:00 PM`
                  } else if (hour > 11) {
                    line[
                      line.indexOf(
                        '----------------------------------------------------------------------------------------------------',
                      )
                    ] = `${hour - 12}:00 PM`
                  } else {
                    line[
                      line.indexOf(
                        '----------------------------------------------------------------------------------------------------',
                      )
                    ] = `${hour}:00 AM`
                  }
                  currentHour++
                }
              })

              extractedLogs.push({ fileName, logLines })
            }
          }),
        )
        setLogData(extractedLogs)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching logs:', error)
        setLoading(false)
      }
    }

    fetchLogData()
  }, [])

  const filteredLogs = logData.filter((log) => log.fileName.includes(selectedDay.toLowerCase()))

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const handleDayChange = (day) => {
    setSelectedDay(day)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0c1326]">
      <div className="flex overflow-y-auto flex-col flex-1">
        <div className="mx-4">
          <SchedulerDashboard />
        </div>
        <div className="px-4 py-2">
          <h2 className="my-4 text-center text-2xl font-bold uppercase text-[#DA2867]">Log View</h2>
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <ClipLoader color="#DA2867" loading={loading} size={90} />
            </div>
          ) : (
            <div className="overflow-x-auto mx-4">
              <div className="flex justify-between mb-4 border border-gray-600">
                {daysOfWeek.map((day) => (
                  <button
                    key={day}
                    className={`px-10 py-4 uppercase ${
                      selectedDay === day ? 'rounded-lg bg-[#DA2867] text-white' : 'text-gray-200'
                    }`}
                    onClick={() => handleDayChange(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
              {filteredLogs.map((logFile, index) => (
                <div key={index} className="mt-4">
                  <table className="w-full">
                    <tbody className="text-white">
                      {index === 0 && (
                        <tr>
                          <td
                            colSpan={logFile.logLines[0].length}
                            className="px-4 py-4 text-center text-white bg-black rounded-xl"
                          >
                            12:00 AM
                          </td>
                        </tr>
                      )}
                      {logFile.logLines.map(
                        (logLine, rowIndex) =>
                          logLine.some((cellData) => cellData.trim() !== '') && (
                            <React.Fragment key={rowIndex}>
                              <tr>
                                {logLine.map((cellData, cellIndex) => (
                                  <td
                                    key={`${rowIndex}-${cellIndex}`}
                                    className={`rounded-xl px-4 py-4 font-semibold ${
                                      (cellData.includes(':00') && cellData.includes('AM')) || cellData.includes('PM')
                                        ? 'text-center text-white'
                                        : 'text-black'
                                    }`}
                                    style={{
                                      whiteSpace: 'nowrap',
                                      backgroundColor:
                                        logLine.includes('Break') && logLine.length === 1
                                          ? '#4EB123'
                                          : logLine.some((cellData) =>
                                                ['Top Of Hour Sequence', 'Donut ID', 'Chruch & Roll Link'].includes(
                                                  cellData,
                                                ),
                                              )
                                            ? '#DE3737'
                                            : logLine.some(
                                                  (cellData) =>
                                                    cellData.includes('ID - New Music Spotlight') ||
                                                    cellData.includes('ID - Short') ||
                                                    cellData.includes('ID - Position'),
                                                )
                                              ? '#FFC08D'
                                              : logLine.some(
                                                    (cellData) =>
                                                      (cellData.includes('00') && cellData.includes('AM')) ||
                                                      cellData.includes('PM'),
                                                  )
                                                ? 'rgb(0, 0, 0)'
                                                : '#3B88FF',
                                    }}
                                  >
                                    {cellData}
                                  </td>
                                ))}
                              </tr>
                              {rowIndex < logFile.logLines.length - 1 && (
                                <tr>
                                  <td colSpan={logLine.length} style={{ height: '8px' }}></td>
                                </tr>
                              )}
                            </React.Fragment>
                          ),
                      )}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewLogs
