import { BellIcon, CheckIcon } from '@heroicons/react/24/outline'

const notifications = [
  { id: 1, title: 'New Order Received', message: 'Order #1006 has been placed by John Doe', time: '2 minutes ago', read: false },
  { id: 2, title: 'Payment Received', message: 'Payment of $150 received for Order #1001', time: '1 hour ago', read: false },
  { id: 3, title: 'Order Completed', message: 'Order #1003 has been completed and ready for pickup', time: '3 hours ago', read: true },
  { id: 4, title: 'Low Stock Alert', message: 'Silk Thread is running low (12 spools remaining)', time: '5 hours ago', read: false },
  { id: 5, title: 'New Customer Registered', message: 'Sarah Williams has registered as a new customer', time: '1 day ago', read: true },
]

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="mt-2 text-gray-600">Stay updated with all activities</p>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 transition-colors ${
                !notification.read ? 'bg-blue-50/50' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    !notification.read 
                      ? 'bg-blue-100' 
                      : 'bg-gray-100'
                  }`}>
                    <BellIcon className={`w-5 h-5 ${
                      !notification.read 
                        ? 'text-blue-600' 
                        : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-base font-semibold ${
                        !notification.read 
                          ? 'text-gray-900' 
                          : 'text-gray-700'
                      }`}>
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                    <p className="mt-2 text-xs text-gray-500">{notification.time}</p>
                  </div>
                </div>
                {!notification.read && (
                  <button className="ml-4 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <CheckIcon className="w-5 h-5 text-gray-600" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

