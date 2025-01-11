import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import AppSidebarNavigation from './AppSidebarNavigation'
import AppSidebarPlayer from './AppSidebarPlayer'

const AppSidebar = () => {
  return (
    <Sidebar className={`flex flex-col justify-between h-full border-black shadow-xl max-w-[250px] shadow-black animate-fade-right animate-delay-300 animate-duration-500`}>
      <SidebarHeader className="pt-5">
        <Link className={`flex flex-col justify-center items-center w-full`} href={'/'}>
          <Image src={'/logo.svg'} alt={'logo'} width={100} height={100} priority />
        </Link>
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-center items-center my-auto grow">
        <SidebarGroup>
          <AppSidebarNavigation />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarPlayer />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
