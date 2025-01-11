import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useRadarStore } from '@/stores/useRadarStore'
import RadarForm from './RadarForm'

const RadarBalanceBlock = () => {
  const { percentage, selectedGender } = useRadarStore()

  const blackBorderWidth = `${100 - percentage}%`

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-[#18222D] p-4 text-center text-white cursor-pointer">
          <label htmlFor="age" className="mb-2 block text-[#5EA6B3]">
            M/F Balance
          </label>
          <div className="flex justify-center">
            <div className="flex overflow-hidden relative justify-center items-center w-40 h-40 rounded-full">
              <div className="absolute inset-0 rounded-full border-[7px] border-[#5EA6B3]"></div>
              <div
                className="absolute inset-0 rounded-full border-[7px] border-[#DA2867]"
                style={{ clipPath: `inset(0 0 0 ${blackBorderWidth})` }}
              ></div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-lg font-semibold">{percentage}%</div>
                <div className="text-sm text-gray-500">{selectedGender}</div>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className={`rounded-xl border border-gray-700`}>
        <DialogHeader>
          <DialogTitle className="text-center">Enter Percentage and Gender</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <RadarForm />
      </DialogContent>
    </Dialog>
  )
}

export default RadarBalanceBlock
