import { SidebarTrigger } from '@/components/ui/sidebar'
import { Bell } from 'lucide-react'

const Header = () => {
  return (
    <header className={`relative shadow-lg shadow-black/20 animate-fade-down animate-duration-300 animate-delay-300`}>
      <SidebarTrigger className={`absolute left-0 top-2.5 p-4`} />
      <div className="px-6 py-2 w-full">
        <div className={`flex gap-4 justify-end items-center ml-auto w-full`}>
          <button className={`text-white animate-delay-500 animate-fade-down`} type="button" aria-label="Notifications">
            <Bell className={``} size={24} />
          </button>
          <span className={`rounded-md border animate-delay-500 animate-fade-down border-custom-blue px-1.5 py-1.5`}>User Name</span>
          <button
            className={`flex justify-center items-center w-8 h-10 rounded-full cursor-pointer animate-delay-500 animate-fade-down bg-custom-blue text-background lg:w-10 lg:text-xl`}
            type="button"
            aria-label="User Name"
          >
            U
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
