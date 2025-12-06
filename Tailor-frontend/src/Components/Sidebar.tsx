import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import {
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  UserIcon,
  CubeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  CreditCardIcon,
  ScissorsIcon,
  RectangleStackIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  UserGroupIcon as UserGroupIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
  CubeIcon as CubeIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  BellIcon as BellIconSolid,
  CreditCardIcon as CreditCardIconSolid,
  ScissorsIcon as ScissorsIconSolid,
  RectangleStackIcon as RectangleStackIconSolid,
} from '@heroicons/react/24/solid'

interface NavItem {
  name: string
  path: string
  icon: React.ComponentType<{ className?: string }>
  iconSolid: React.ComponentType<{ className?: string }>
  badge?: number
}

const navigationItems: NavItem[] = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: HomeIcon,
    iconSolid: HomeIconSolid,
  },
  {
    name: 'Customers',
    path: '/admin/customers',
    icon: UserGroupIcon,
    iconSolid: UserGroupIconSolid,
  },
  {
    name: 'Orders',
    path: '/admin/orders',
    icon: ShoppingBagIcon,
    iconSolid: ShoppingBagIconSolid,
    badge: 3,
  },
  {
    name: 'Tailors',
    path: '/admin/tailors',
    icon: ScissorsIcon,
    iconSolid: ScissorsIconSolid,
  },
  {
    name: 'Measurements',
    path: '/admin/measurements',
    icon: RectangleStackIcon,
    iconSolid: RectangleStackIconSolid,
  },
  {
    name: 'Inventory',
    path: '/admin/inventory',
    icon: CubeIcon,
    iconSolid: CubeIconSolid,
  },
  {
    name: 'Payments',
    path: '/admin/payments',
    icon: CreditCardIcon,
    iconSolid: CreditCardIconSolid,
  },
  {
    name: 'Reports',
    path: '/admin/reports',
    icon: ChartBarIcon,
    iconSolid: ChartBarIconSolid,
  },
  {
    name: 'Notifications',
    path: '/admin/notifications',
    icon: BellIcon,
    iconSolid: BellIconSolid,
    badge: 5,
  },
  {
    name: 'Settings',
    path: '/admin/settings',
    icon: Cog6ToothIcon,
    iconSolid: Cog6ToothIconSolid,
  },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <>
      {/* Mobile Overlay */}
      {!isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isCollapsed ? 'w-20' : 'w-64'}
          lg:translate-x-0
          shadow-lg
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <ScissorsIcon className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Tailor Admin</h1>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto">
              <ScissorsIcon className="w-5 h-5 text-white" />
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:block hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Bars3Icon className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close sidebar"
          >
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const active = isActive(item.path)
              const Icon = active ? item.iconSolid : item.icon

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg
                      transition-all duration-200
                      group relative
                      ${
                        active
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        active ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                      }`}
                    />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                    {isCollapsed && item.badge && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="border-t border-gray-200 p-4">
          {!isCollapsed ? (
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  Super Admin
                </p>
                <p className="text-xs text-gray-500 truncate">admin@tailor.com</p>
              </div>
              <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                <ArrowRightOnRectangleIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-white" />
              </div>
              <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                <ArrowRightOnRectangleIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
