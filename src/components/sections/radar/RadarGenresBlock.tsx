'use client'

import { useRadarStore } from '@/stores/useRadarStore'

const RadarGenresBlock = () => {
  const { selectedGenres, addGenre, removeGenre, availableGenres } = useRadarStore()

  return (
    <div className="bg-[#18222D] p-4 text-center text-white">
      <div className="grid grid-cols-3">
        <div>
          <span className="ml-2 text-green-500">&#10004;</span>
        </div>
        <label htmlFor="genre" className="mb-2 block text-[#5EA6B3]">
          Genres
        </label>
        <div>
          <span className="ml-2 text-red-500">&#10006;</span>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between gap-2 text-[14px]">
        <div className="p-2 overflow-y-auto text-white bg-gray-900 scrollbar max-h-36 rounded-xl">
          <div className="">
            {[...selectedGenres].map((selectedGenre, index) => (
              <div key={index} className="flex items-center justify-between px-2">
                <span>{selectedGenre}</span>
                <button onClick={() => removeGenre(selectedGenre)} className="text-red-500">
                  &#10006;
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 overflow-y-auto text-white bg-gray-900 scrollbar max-h-36 rounded-xl">
          <div>
            {availableGenres.map((availableGenre, index) => (
              <div key={index} className="cursor-pointer" onClick={() => addGenre(availableGenre)}>
                {availableGenre}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadarGenresBlock
