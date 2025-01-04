'use client'
import { ChartBar, FileOutput, Hash, Home, Radiation, RadioTower } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INavItem {
  label: string
  href: string
  icon: React.ReactNode
}

const navigation: INavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    label: 'Show Analytics',
    href: '/analytics',
    icon: <ChartBar />,
  },
  {
    label: 'Station Fit',
    href: '/station',
    icon: <RadioTower />,
  },
  {
    label: 'Radar',
    href: '/radar',
    icon: <Radiation />,
  },
  {
    label: 'Trending Tracks',
    href: '/tracks',
    icon: <Hash />,
  },
  {
    label: 'Export',
    href: '/export',
    icon: <FileOutput />,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <Hash />,
  },
]

const AppSidebarNavigation = () => {
  const path = usePathname()

  return (
    <ul className="grid gap-2">
      {navigation.map((item) => (
        <li className={`last:border-t last:border-white last:pt-1`} key={item.label}>
          <Link
            href={item.href}
            className={`hover:text-custom-red flex w-full items-center gap-2 px-4 py-2 duration-300 ${path === item.href ? 'text-custom-blue' : ''}`}
          >
            {item.icon}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default AppSidebarNavigation
