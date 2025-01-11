import { Card, CardContent } from '@/components/ui/card'
import { FileInfo } from './FileInfo'
import { FileUpload } from './FileUpload'
import { HeroTable } from './HeroTable'

const Hero = () => {
  return (
    <section>
      <div className="px-4 py-8">
        <Card className={`!border-slate-500 !bg-transparent p-1 shadow-md`}>
          <CardContent className="p-6 bg-background">
            <div className="flex gap-5 items-center">
              <FileInfo />
              <FileUpload />
            </div>
          </CardContent>
        </Card>
        <div className="mt-8">
          <HeroTable />
        </div>
      </div>
    </section>
  )
}

export default Hero

