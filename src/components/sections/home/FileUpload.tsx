'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFileStore } from '@/stores/useFileStore'
import { Upload } from 'lucide-react'
import Papa from 'papaparse'
import { useRef } from 'react'

export function FileUpload() {
  const { setFileName, setCsvData, setFileUploaded, fileUploaded } = useFileStore()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedData = results.data as Record<string, string>[]
          setCsvData(parsedData)
          setFileName(file.name)
          setFileUploaded(true)
        },
      })
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  if (fileUploaded) {
    return null
  }

  return (
    <div className="relative">
      <Input
        ref={fileInputRef}
        className="hidden"
        id="upload-input"
        type="file"
        name="file"
        accept=".csv"
        onChange={handleFileChange}
      />
      <Button
        className="border-muted border border-custom-red !bg-transparent !py-2 text-sm font-medium hover:border-custom-blue sm:text-base md:text-lg lg:!py-5"
        variant="ghost"
        onClick={handleButtonClick}
      >
        Upload CSV
        <Upload className="ml-2 w-4 h-4" />
      </Button>
    </div>
  )
}
