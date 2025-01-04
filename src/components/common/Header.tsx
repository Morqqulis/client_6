import { Bell } from 'lucide-react'

import { SidebarTrigger } from '../ui/sidebar'

const Header = () => {
  return (
    <header className={`relative`}>
      <SidebarTrigger className={`absolute left-0 top-2.5 p-4`} />
      <div className="w-full border-b-2 border-b-black/40 px-6 py-2 shadow-xl shadow-black">
        <div className={`ml-auto flex w-full items-center justify-end gap-4`}>
          <button className={`text-white`} type="button" aria-label="Notifications">
            <Bell className={``} size={24} />
          </button>
          <span className={`border-custom-blue rounded-md border px-1.5 py-1.5`}>User Name</span>
          <button
            className={`bg-custom-blue flex h-10 w-8 cursor-pointer items-center justify-center rounded-full text-background lg:w-10 lg:text-xl`}
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
