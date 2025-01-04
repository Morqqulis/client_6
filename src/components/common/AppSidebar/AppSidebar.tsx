import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import AppSidebarNavigation from './AppSidebarNavigation'
import AppSidebarPlayer from './AppSidebarPlayer'

const AppSidebar = () => {
  return (
    <Sidebar className={`flex h-full max-w-[250px] flex-col justify-between border-black shadow-xl shadow-black`}>
      <SidebarHeader className='pt-5'>
        <Link className={`flex w-full flex-col items-center justify-center`} href={'/'}>
          <Image src={'/logo.svg'} alt={'logo'} width={100} height={100} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="my-auto flex grow flex-col items-center justify-center">
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
