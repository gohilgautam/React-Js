import { ChartBarIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="mt-2 text-gray-600">View analytics and generate reports</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <ArrowDownTrayIcon className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Sales Report</h3>
            <ChartBarIcon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">This Month</span>
              <span className="text-sm font-semibold text-gray-900">$12,450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Last Month</span>
              <span className="text-sm font-semibold text-gray-900">$10,200</span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Order Statistics</h3>
            <ChartBarIcon className="w-6 h-6 text-purple-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Orders</span>
              <span className="text-sm font-semibold text-gray-900">456</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Completed</span>
              <span className="text-sm font-semibold text-green-600">389</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">In Progress</span>
              <span className="text-sm font-semibold text-blue-600">67</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Customer Growth</h3>
            <ChartBarIcon className="w-6 h-6 text-green-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">New Customers</span>
              <span className="text-sm font-semibold text-gray-900">+45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Customers</span>
              <span className="text-sm font-semibold text-gray-900">1,234</span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500">12.5% growth from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Services</h3>
            <ChartBarIcon className="w-6 h-6 text-orange-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Suit Alteration</span>
              <span className="text-sm font-semibold text-gray-900">156 orders</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Dress Fitting</span>
              <span className="text-sm font-semibold text-gray-900">98 orders</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Shirt Tailoring</span>
              <span className="text-sm font-semibold text-gray-900">87 orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

