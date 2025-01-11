'use client'

import { Button } from '@/components/ui/button'
import { useFileStore } from '@/stores/useFileStore'
import { Music } from 'lucide-react'
import { SortDropdown } from './SortDropdown'

export function FileInfo() {
  const { fileName, fileUploaded, removeFile, toggleHighlight } = useFileStore()

  const handleRemoveFile = () => {
    removeFile()
  }

  return (
    <div className="w-full sm:w-auto">
      <h1
        className={`text-primary bg-secondary w-fit ${
          fileUploaded ? 'border-custom-red' : 'border-muted'
        } rounded-lg border px-2 py-1.5 text-sm font-medium sm:text-base md:text-lg`}
      >
        {fileUploaded ? fileName : 'No file uploaded'}
      </h1>
      {fileUploaded && (
        <div className="flex flex-col gap-4 justify-between items-start w-full sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <h2 className="flex gap-2 items-center mt-2 text-base font-medium text-white sm:text-lg">
              <Music className="w-4 h-4 sm:h-5 sm:w-5" />
              Playlist Analytics
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <Button
                className="text-base border border-muted hover:border-custom-red sm:text-sm"
                variant="ghost"
                size="default"
                onClick={toggleHighlight}
              >
                Highlight Track Names
              </Button>
              <SortDropdown />
            </div>
          </div>
          <Button
            className="mt-4 text-base border border-muted hover:border-custom-red sm:mt-0 sm:text-sm"
            variant="destructive"
            size="default"
            onClick={handleRemoveFile}
          >
            Remove File
          </Button>
        </div>
      )}
    </div>
  )
}
