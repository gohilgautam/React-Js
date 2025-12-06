import { ScissorsIcon, PlusIcon } from '@heroicons/react/24/outline'

const tailors = [
  { id: 1, name: 'Ahmed Hassan', email: 'ahmed@tailor.com', specialization: 'Suit Tailoring', orders: 45, rating: 4.8 },
  { id: 2, name: 'Maria Garcia', email: 'maria@tailor.com', specialization: 'Dress Making', orders: 38, rating: 4.9 },
  { id: 3, name: 'Raj Patel', email: 'raj@tailor.com', specialization: 'Alterations', orders: 52, rating: 4.7 },
  { id: 4, name: 'Emma Wilson', email: 'emma@tailor.com', specialization: 'Custom Fitting', orders: 29, rating: 4.9 },
]

export default function Tailors() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tailors</h1>
          <p className="mt-2 text-gray-600">Manage your tailoring staff</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusIcon className="w-5 h-5" />
          Add Tailor
        </button>
      </div>

      {/* Tailors Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tailors.map((tailor) => (
          <div
            key={tailor.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <ScissorsIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{tailor.name}</h3>
                  <p className="text-sm text-gray-600">{tailor.email}</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Specialization</span>
                <span className="text-sm font-medium text-gray-900">{tailor.specialization}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Orders</span>
                <span className="text-sm font-medium text-gray-900">{tailor.orders}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Rating</span>
                <span className="text-sm font-medium text-gray-900">⭐ {tailor.rating}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                View Profile
              </button>
              <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

