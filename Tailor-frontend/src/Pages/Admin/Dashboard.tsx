import {
  UserGroupIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Total Customers',
    value: '1,234',
    change: '+12.5%',
    changeType: 'positive',
    icon: UserGroupIcon,
  },
  {
    name: 'Active Orders',
    value: '89',
    change: '+8.2%',
    changeType: 'positive',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Revenue',
    value: '$45,678',
    change: '+15.3%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Completed Orders',
    value: '456',
    change: '+5.1%',
    changeType: 'positive',
    icon: ChartBarIcon,
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your tailor admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className={`mt-2 text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">Order #{1000 + item}</p>
                <p className="text-sm text-gray-600">Customer Name • Suit Alteration</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">$150</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

