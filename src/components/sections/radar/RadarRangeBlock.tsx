'use client'
import { Slider } from '@/components/ui/slider'
import { useRadarStore } from '@/stores/useRadarStore'

const RadarRangeBlock = () => {
  const { range, setRange, setMinAge, setMaxAge } = useRadarStore()

  const handleRangeChange = (value: [number, number]) => {
    setRange(value)
    setMinAge(value[0])
    setMaxAge(value[1])
  }
  return (
    <div className="bg-[#18222D] p-4 text-center text-white">
      <label htmlFor="ageRange" className="mb-8 block text-[#5EA6B3]">
        Age Range
      </label>
      <div className={`mb-1.5`}>
        <Slider min={0} max={120} value={range} onValueChange={handleRangeChange} />
      </div>
      <div className="flex justify-between px-4">
        <span>{range[0]}</span>
        <span>{range[1]}</span>
      </div>

      <div className="">
        <div>
          Age {range[0]}-{range[1]}
        </div>
      </div>
    </div>
  )
}

export default RadarRangeBlock
