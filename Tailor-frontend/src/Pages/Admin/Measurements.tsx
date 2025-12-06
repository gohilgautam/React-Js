import { RectangleStackIcon, PlusIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const measurements = [
  { id: 1, customer: 'John Doe', type: 'Suit', date: '2024-01-15', status: 'Active' },
  { id: 2, customer: 'Jane Smith', type: 'Dress', date: '2024-01-16', status: 'Active' },
  { id: 3, customer: 'Mike Johnson', type: 'Shirt', date: '2024-01-14', status: 'Archived' },
  { id: 4, customer: 'Sarah Williams', type: 'Pant', date: '2024-01-17', status: 'Active' },
]

export default function Measurements() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Measurements</h1>
          <p className="mt-2 text-gray-600">Manage customer measurements and sizing</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusIcon className="w-5 h-5" />
          Add Measurement
        </button>
      </div>

      {/* Measurements List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-200">
          {measurements.map((measurement) => (
            <div
              key={measurement.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <RectangleStackIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{measurement.customer}</h3>
                    <p className="text-sm text-gray-600">Type: {measurement.type}</p>
                    <p className="text-xs text-gray-500 mt-1">Date: {measurement.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    measurement.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {measurement.status}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <DocumentTextIcon className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

