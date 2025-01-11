import { LogIn, Logs, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SchedulerDashboard = () => {
  const [selectedButton, setSelectedButton] = useState('')
  const router = useRouter()
  const removeFile = () => {
    router.push('/export')
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-full text-gray-300">
      {/* <button
        className={`scheduler-button flex flex-col items-center justify-center h-20 text-xl rounded-lg border border-gray-600 ${
          selectedButton === "Clock" ? "border-red-700" : ""
        }`}
        onClick={() => setSelectedButton("Clock")}
      >
        <FontAwesomeIcon icon={faClock} className="h-8" />
        <span className="text-[14px]">Clock</span>
      </button> */}
      <Link
        href="/export/table"
        className={`scheduler-button flex h-20 flex-col items-center justify-center rounded-lg border border-gray-600 text-xl ${
          selectedButton === 'Playlist' ? 'border-red-700' : ''
        }`}
        onClick={() => setSelectedButton('Playlist')}
      >
        <Logs className="h-8" />
        <span className="text-[14px]">Playlist</span>
      </Link>
      <Link
        href="/export/table/logs"
        className={`scheduler-button flex h-20 flex-col items-center justify-center rounded-lg border border-gray-600 text-xl ${
          selectedButton === 'Log' ? 'border-red-700' : ''
        }`}
        onClick={() => setSelectedButton('Log')}
      >
        <LogIn className="h-8" />
        <span className="text-[14px]">Log</span>
      </Link>
      <button
        className="flex flex-col justify-center items-center h-20 text-xl rounded-lg border border-gray-600 scheduler-button"
        onClick={removeFile}
      >
        <TrashIcon className="h-8" />
        <span className="text-[14px]">Remove File</span>
      </button>
    </div>
  )
}

export default SchedulerDashboard
