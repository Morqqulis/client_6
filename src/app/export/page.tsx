'use client'

import UserService from '@/lib/service'
import { Music, Upload } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { parse } from 'papaparse'
import { useEffect, useState } from 'react'

const ExportPage = () => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  //   const [parsedData, setParsedData] = useState(null)
  const [isUploaded, setIsUploaded] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 30
          } else {
            clearInterval(interval)
            return 100
          }
        })
      }, 500)
      return () => clearInterval(interval)
    }
  }, [loading])

  const uploadCSV = async (fileInput) => {
    try {
      const userService = new UserService()
      await userService.upload_csv(fileInput)
    } catch (error) {
      console.error('Error uploading CSV:', error)
      throw new Error('Failed to upload CSV')
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    const fileInput = event.target.files[0]

    setTimeout(() => {
      parse(fileInput, {
        complete: (result) => {
          setLoading(false)
          setProgress(100)
          //  setParsedData(result.data)
          uploadCSV(fileInput)
            .then(() => {
              console.log('CSV file uploaded successfully')
              setIsUploaded(true)
              localStorage.setItem('parsedData', JSON.stringify(result.data))
              router.push('/export/table')
            })
            .catch((error) => {
              setIsUploaded(false)
              console.error('Failed to upload CSV:', error)
            })
        },
        header: true,
      })
    }, 2000)
  }

  return (
    <main>
      <section>
        <div className="justify-center w-8/12 px-4 mx-auto mt-10 text-white border border-gray-500 rounded-md box">
          <div>
            <div className="flex items-center gap-2 py-4">
              {/* <FontAwesomeIcon icon={faMusic} className="px-2 text-[#50b6cd]" /> */}
              <Music className={`text-[#50b6cd]`} />
              <h1 className="text-white">AI Music Scheduler</h1>
            </div>
            <hr className="border-gray-800" />
          </div>
          <div className="md:grid md:grid-cols-5">
            <div></div>
            <div className="col-span-3">
              <div className="py-4">
                <h2 className="font-semibold">Import your library</h2>
                <p className="py-4">
                  Experience the future of music management with our AI music scheduler. Effortlessly organize and
                  optimize your playlists using cutting-edge artificial intelligence technology
                </p>
              </div>
              <button>
                <input
                  className="hidden"
                  id="upload-input"
                  type="file"
                  name="file"
                  accept=".csv"
                  onChange={handleSubmit}
                />
                <label
                  htmlFor="upload-input"
                  className="flex cursor-pointer items-center gap-2 rounded-md bg-[#DA2867] px-4 py-4 text-sm font-semibold text-white"
                >
                  Import CSV
                  <Upload className="w-4 h-4" />
                </label>
              </button>
              {!isUploaded && (
                <p className="my-2 text-red-500">
                  Failed to upload CSV. please try again and make sure you are using .csv file
                </p>
              )}
              <div className="py-4">
                <p className="text-gray-400">file type accepted (csv)</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70">
            <div className="absolute flex h-80 w-80 justify-center border-2 border-black bg-[#0c1326] text-center text-white">
              <div className="flex flex-col justify-center h-full">
                <div className="h-12 mb-4 bg-white rounded-md" style={{ width: `${progress}%` }}></div>
                <p className="text-lg">Importing your library...</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default ExportPage
