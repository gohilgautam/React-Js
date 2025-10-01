import React from 'react';
import { Sparkles, Leaf, Zap, CheckCircle, Users } from 'lucide-react';

export default function AboutPage() {
  const accentColor = 'text-amber-600';
  const primaryTextColor = 'text-gray-800';
  const accentBg = 'bg-amber-600 hover:bg-amber-700';

  // Mock Data for Core Values
  const coreValues = [
    {
      icon: Sparkles,
      title: "Intentional Minimalism",
      description: "We design spaces where every element serves a purpose, embracing clarity, calm, and sophisticated simplicity.",
    },
    {
      icon: Zap,
      title: "Functional Flow",
      description: "Our layouts prioritize the daily lives of our clients, ensuring seamless movement and maximizing utility without compromise.",
    },
    {
      icon: Leaf,
      title: "Conscious Sourcing",
      description: "We commit to sustainable, high-quality materials and responsible vendors, creating enduring spaces with a low ecological footprint.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Process",
      description: "From concept to completion, clients are partners. We ensure clear communication and detailed project management every step of the way.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">

      {/* --- Hero Section: Mission Statement --- */}
      <header className="py-24 md:py-32 bg-white text-center border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className={`text-sm font-semibold uppercase tracking-widest ${accentColor} mb-3`}>
            Our Foundation
          </p>
          <h1 className={`text-5xl md:text-6xl font-light ${primaryTextColor} mb-4 leading-tight`}>
            Designing Spaces of Enduring Value and Quiet Luxury
          </h1>
          <p className="mx-auto text-xl text-gray-600 mt-6">
            We transform environments into curated sanctuaries that reflect simplicity, purpose, and unparalleled quality.
          </p>
        </div>
      </header>

      {/* --- Our Story / Designer Bio Section --- */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Placeholder */}
            <div className="relative h-96 lg:h-full rounded-xl shadow-2xl overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgP4J54W3smvgB1j0UFWZ7OjFpGmUsVzAxfw&s"
                alt="Portrait of the Lead Interior Designer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className={`text-sm font-semibold uppercase tracking-widest ${accentColor}`}>
                Our Story
              </h2>
              <h3 className="text-4xl font-light text-gray-900 leading-snug">
                From a passion for architecture to defining modern serenity.
              </h3>
              <p className="text-gray-600 text-lg">
                Founded by Jane Doe, our studio emerged from a simple premise: great design isn't about filling space, but about creating purposeful emptiness. Jane's background in structural engineering combined with her intuitive sense of minimalist aesthetics drives a unique approach, ensuring every project is not only beautiful but structurally sound and deeply practical.
              </p>
              <p className="text-gray-600">
                Over the past decade, we have honed a process that removes visual clutter, focuses on tactile textures, and uses natural light as a primary design element. We believe a home should feel effortless, personal, and act as a calm retreat from the demands of the modern world.
              </p>
              <div className="pt-4">
                <p className="text-xl font-medium text-gray-900 border-l-4 border-amber-600 pl-4 italic">
                  "The finest luxury is a sense of peace."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Core Values Section --- */}
      <section className="py-20 md:py-28 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className={`text-sm font-semibold uppercase tracking-widest ${accentColor} mb-3`}>
              Our Philosophy
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900">
              Principles Guiding Every Project
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="p-6 text-center bg-gray-50 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition duration-300">
                <value.icon className={`w-10 h-10 mx-auto mb-4 ${accentColor}`} strokeWidth={1.5} />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Team / Next Steps CTA --- */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Users className={`w-12 h-12 mx-auto mb-6 ${accentColor}`} strokeWidth={1.5} />
          <h3 className="text-3xl font-light text-gray-900 mb-4">
            Meet the Team & Collaborate
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            While Jane leads the creative direction, our projects are supported by a network of trusted architects, builders, and craftspeople. Ready to bring your vision to life?
          </p>
          <button
            className={`px-10 py-4 text-white font-semibold rounded-lg shadow-xl transition duration-300 transform scale-100 ${accentBg} hover:scale-[1.02]`}
            onClick={() => console.log('Navigating to Contact Page')}
          >
            Start Your Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
