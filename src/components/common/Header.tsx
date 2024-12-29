import { Bell } from 'lucide-react'
import { Button } from '../ui/button'
import { SidebarTrigger } from '../ui/sidebar'

const Header = () => {
  return (
    <header className={`relative`}>
      <SidebarTrigger className={`absolute left-0 top-2.5 p-4`} />
      <div className="w-full border-b-2 px-6 border-b-black/40 py-2 shadow-xl shadow-black">
        <div className={`ml-auto flex w-full items-center justify-end gap-2`}>
          <Button className={`h-6 w-6 !bg-transparent !p-0 text-white`}>
            <Bell className={`!h-full !w-full cursor-pointer text-white`} size={24} />
          </Button>
          <span className={`rounded-md border border-custom px-3 py-2`}>User Name</span>
          <Button
            className={`flex w-8 cursor-pointer items-center justify-center rounded-full !bg-custom text-[px] lg:w-10 lg:text-xl`}
          >
            U
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
