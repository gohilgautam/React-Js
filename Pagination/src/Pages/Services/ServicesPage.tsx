import React from 'react';
import { Sun,  Heart } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "Hatha Yoga",
      description: "A gentle introduction to basic yoga postures, breathing techniques, and relaxation. Ideal for beginners and those seeking a calm practice.",
      icon: <Sun className="h-10 w-10 text-green-600" />,
      duration: "60 mins",
      difficulty: "Beginner",
      benefits: ["Improves flexibility", "Reduces stress", "Enhances balance"],
    },
    {
      title: "Vinyasa Yoga",
      description: "A dynamic flow connecting breath with movement. Helps build strength, flexibility, and stamina while improving mental focus.",
      icon: <Sun className="h-10 w-10 text-green-600" />,
      duration: "75 mins",
      difficulty: "Intermediate",
      benefits: ["Builds strength", "Boosts energy", "Enhances coordination"],
    },
    {
      title: "Meditation & Mindfulness",
      description: "Guided meditation sessions focusing on breathing, awareness, and mindfulness to calm the mind and reduce stress.",
      icon: <Heart className="h-10 w-10 text-green-600" />,
      duration: "45 mins",
      difficulty: "All Levels",
      benefits: ["Reduces anxiety", "Improves focus", "Enhances mental clarity"],
    },
  ];

  return (
    <div className="bg-[#f8f8ed] min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Yoga Classes</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Join our yoga classes designed for all levels. Improve your flexibility, strength, and mental clarity while enjoying a serene and supportive environment.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>

            {/* Additional Details */}
            <div className="text-sm text-green-900 mb-2">
              <span className="font-semibold">Duration:</span> {service.duration}
            </div>
            <div className="text-sm text-green-900 mb-2">
              <span className="font-semibold">Difficulty:</span> {service.difficulty}
            </div>

            <div className="text-sm text-gray-700">
              <span className="font-semibold">Benefits:</span>
              <ul className="list-disc list-inside mt-1">
                {service.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300">
          Book a Class
        </button>
      </section>
    </div>
  );
}
