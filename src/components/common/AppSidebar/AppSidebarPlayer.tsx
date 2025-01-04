'use client'

import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const tracks = [
  {
    title: 'DUA LIPA - Training Season',
    image:
      'https://i.discogs.com/llDrJIc80BrlyF7qrd09CCiprguIgC3-VZPzkjIDtfM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5ODA3/ODA5LTE3MDgwMzg2/OTAtNzUyMi5qcGVn.jpeg',
    url: '',
  },
  {
    title: 'Preview',
    image:
      'https://i.discogs.com/dL8ZENtEl5VD_kV8I-iBTci80VThEu2NGjT9THcuulg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTc1OTI2/ODktMTY4ODE4NDU4/My0yNDE4LmpwZWc.jpeg',
    url: '',
  },
  {
    title: 'Preview',
    image:
      'https://i.discogs.com/F6cNWcVLwBWkL3Xb4svBanfaAb22zhrO08Z-W88qK8o/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NTE0/Nzg0LTE3MDU0OTkx/MjQtOTEzNi5qcGVn.jpeg',
    url: '',
  },
]

const AppSidebarPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const currentTrack = tracks[currentTrackIndex]

  const playNextTrack = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1)
    }
  }

  const playPreviousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1)
    }
  }

  return (
    <div className="flex flex-col items-center text-white">
      {currentTrack.image && (
        <Image
          src={currentTrack.image}
          className="h-20 w-28 rounded-lg lg:h-28 lg:w-36"
          alt={currentTrack.title}
          width={144}
          height={112}
        />
      )}
      {currentTrack && (
        <div>
          <h3 className="py-2 text-center text-[12px] uppercase">{currentTrack.title}</h3>
          <audio
            src={currentTrack.url || '#'}
            className="mx-4 h-4 w-44 lg:h-6 lg:w-40 xl:w-44"
            controls
            autoPlay={false}
          />
        </div>
      )}
      <div className="flex gap-14 py-0 lg:py-4">
        <button
          className="hover:text-custom-blue active:text-custom-red duration-300"
          onClick={playPreviousTrack}
          type="button"
          aria-label="Previous track"
        >
          <CircleArrowLeft />
        </button>
        <button
          className="hover:text-custom-blue active:text-custom-red duration-300"
          onClick={playNextTrack}
          type="button"
          aria-label="Next track"
        >
          <CircleArrowRight />
        </button>
      </div>
    </div>
  )
}

export default AppSidebarPlayer
