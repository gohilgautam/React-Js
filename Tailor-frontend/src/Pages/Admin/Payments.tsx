import { CreditCardIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

const payments = [
  { id: 1, orderId: 1001, customer: 'John Doe', amount: '$150', method: 'Credit Card', status: 'Completed', date: '2024-01-15' },
  { id: 2, orderId: 1002, customer: 'Jane Smith', amount: '$200', method: 'Cash', status: 'Pending', date: '2024-01-16' },
  { id: 3, orderId: 1003, customer: 'Mike Johnson', amount: '$75', method: 'Credit Card', status: 'Completed', date: '2024-01-14' },
  { id: 4, orderId: 1004, customer: 'Sarah Williams', amount: '$50', method: 'Bank Transfer', status: 'Completed', date: '2024-01-17' },
  { id: 5, orderId: 1005, customer: 'David Brown', amount: '$180', method: 'Credit Card', status: 'Failed', date: '2024-01-18' },
]

export default function Payments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
        <p className="mt-2 text-gray-600">Track and manage all payment transactions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">$45,678</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <CreditCardIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Payments</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">$200</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <CreditCardIcon className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Failed Payments</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">$180</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <CreditCardIcon className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{payment.orderId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{payment.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{payment.method}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                      payment.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : payment.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {payment.status === 'Completed' && <CheckCircleIcon className="w-4 h-4" />}
                      {payment.status === 'Failed' && <XCircleIcon className="w-4 h-4" />}
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{payment.date}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

