import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar'

const AppSidebar = () => {
  return (
    <Sidebar className={`shadow-xl border-black shadow-black`} >
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent >
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
