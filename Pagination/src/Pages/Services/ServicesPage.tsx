import React from 'react';
import { Lightbulb, Wrench, Home, Briefcase, Zap, CheckCircle, Award, LayoutGrid, MessageSquare } from 'lucide-react';

// Reusable component for displaying a core service
const ServiceCard = ({ icon: Icon, title, description, accentColor }) => (
  <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 transform hover:shadow-2xl transition duration-300">
    <Icon className={`w-10 h-10 mb-4 ${accentColor}`} />
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// FAQ data structure (no custom tag needed for rendering)
const faqs = [
  {
    question: "What is the typical project timeline?",
    answer: "Timelines vary significantly based on scope (e.g., e-design vs. full renovation). An e-design concept typically takes 2-4 weeks, while a full residential project can take 6-12 months from concept to final installation, depending on construction requirements."
  },
  {
    question: "How do you handle budget management and fees?",
    answer: "We establish a clear, detailed budget in the discovery phase. Our fees are generally project-based or fixed retainers, which cover all design hours. We provide transparent pricing and track all expenditures rigorously, notifying you immediately of any potential overages."
  },
  {
    question: "Can I use my own contractor/tradesperson?",
    answer: "We prefer to work with our network of trusted, vetted contractors to ensure quality and timely execution. However, we are flexible and happy to review and integrate your preferred professionals if they meet our quality standards and communication needs."
  },
  {
    question: "What cities/regions do you serve?",
    answer: "We offer full-service design within a 50-mile radius of our main studio (e.g., Los Angeles, CA). Our Virtual E-Design package is available to clients located anywhere in the world."
  }
];


export default function Services() {
  const accentColor = 'text-amber-500';

  const packages = [
    {
      name: "The Essential Refresh",
      price: "Starting at $2,500/room",
      description: "Ideal for clients needing quick, focused updates to existing spaces. Perfect for furniture sourcing and color palettes.",
      features: [
        { text: "1-Hour Virtual Consultation", included: true },
        { text: "Concept Mood Board & Style Guide", included: true },
        { text: "Sourcing for Key Furnishings", included: true },
        { text: "2D Floor Plan Layout", included: false },
        { text: "Full Project Management", included: false },
      ],
      color: 'bg-gray-100',
    },
    {
      name: "The Signature Design",
      price: "Project-Based Quote",
      description: "Our most popular offering. Full design development, detailed documentation, and hands-on guidance for major renovations.",
      features: [
        { text: "On-Site Discovery & Measurements", included: true },
        { text: "3D Renders & Visualizations", included: true },
        { text: "Sourcing for All Finishes & Decor", included: true },
        { text: "2D Floor Plan Layout", included: true },
        { text: "Full Project Management & Contractor Liaison", included: true },
      ],
      color: 'bg-amber-500 text-white',
    },
    {
      name: "The Bespoke Vision",
      price: "Custom Retainer",
      description: "The highest level of personalized service for new construction or whole-home gut renovations, requiring extensive oversight.",
      features: [
        { text: "All Signature Design Services", included: true },
        { text: "Custom Millwork & Cabinetry Design", included: true },
        { text: "Collaboration with Architect/Builder from Day 1", included: true },
        { text: "Weekly On-Site Visits & Reporting", included: true },
        { text: "Post-Installation Styling & Photography", included: true },
      ],
      color: 'bg-gray-800 text-white',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter']">

      {/* --- Hero Section --- */}
      <section className="py-20 md:py-32 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${accentColor}`}>
            Our Expertise. Your Sanctuary.
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Interior Design Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We translate your vision into a living space that balances beauty, function, and enduring style. Explore our core services designed to meet every project scale.
          </p>
        </div>
      </section>

      {/* --- Core Services Section --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How We Transform Spaces</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Home}
              title="Full-Service Residential"
              description="From concept to completion, we manage all aspects of your home renovation or new build. This is a turnkey solution for primary residences."
              accentColor={accentColor}
            />
            <ServiceCard 
              icon={Briefcase}
              title="Boutique Commercial Design"
              description="Crafting elevated environments for small businesses, offices, and hospitality spaces that require a unique, branded aesthetic."
              accentColor={accentColor}
            />
            <ServiceCard 
              icon={Zap}
              title="Virtual E-Design"
              description="A remote, collaborative service providing mood boards, shopping lists, and detailed plans for clients located anywhere."
              accentColor={accentColor}
            />
          </div>
        </div>
      </section>

      {/* --- Design Process Section --- */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Design Journey</h2>
          
          <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-12">
            
            {/* Step 1: Discover */}
            <div className="text-center max-w-xs mx-auto">
              <div className={`w-16 h-16 rounded-full inline-flex items-center justify-center mb-4 ${accentColor} bg-amber-500/20 mx-auto`}>
                <Lightbulb className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-300">Phase 01</p>
              <h3 className="text-xl font-semibold mt-1 mb-2">Discovery & Briefing</h3>
              <p className="text-gray-400 text-sm">We define scope, budget, timeline, and uncover your personal style, needs, and aspirations for the space.</p>
            </div>

            {/* Step 2: Design */}
            <div className="text-center max-w-xs mx-auto">
              <div className={`w-16 h-16 rounded-full inline-flex items-center justify-center mb-4 ${accentColor} bg-amber-500/20 mx-auto`}>
                <LayoutGrid className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-300">Phase 02</p>
              <h3 className="text-xl font-semibold mt-1 mb-2">Design Development</h3>
              <p className="text-gray-400 text-sm">Presentation of concepts, materials, floor plans, and 3D renderings for your review and final approval.</p>
            </div>

            {/* Step 3: Execute */}
            <div className="text-center max-w-xs mx-auto">
              <div className={`w-16 h-16 rounded-full inline-flex items-center justify-center mb-4 ${accentColor} bg-amber-500/20 mx-auto`}>
                <Wrench className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-300">Phase 03</p>
              <h3 className="text-xl font-semibold mt-1 mb-2">Procurement & Installation</h3>
              <p className="text-gray-400 text-sm">Managing orders, coordinating trades, and overseeing the seamless, final installation of all elements.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Pricing Packages Section --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">Choose Your Design Partnership</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-6 md:p-10 shadow-xl transition duration-500 transform hover:scale-[1.03] ${pkg.color}`}>
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-extrabold">{pkg.name}</h3>
                        <p className={`mt-1 text-sm ${pkg.color.includes('white') ? 'text-amber-300' : 'text-gray-500'}`}>{pkg.price}</p>
                    </div>
                    {index === 1 && <Award className={`w-8 h-8 fill-current ${pkg.color.includes('white') ? 'text-amber-300' : accentColor}`} />}
                </div>

                <p className={`mb-8 border-b pb-4 ${pkg.color.includes('white') ? 'border-amber-700/50' : 'border-gray-300'}`}>{pkg.description}</p>
                
                <ul className="space-y-4">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`flex items-start mb-3 ${pkg.color.includes('white') ? 'text-white' : 'text-gray-700'}`}>
                      <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${pkg.color.includes('white') ? 'text-amber-300' : 'text-green-500'}`} />
                      <span className="text-base">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`mt-10 w-full py-3 font-semibold rounded-lg shadow-md transition duration-300 
                    ${index === 1 
                      ? 'bg-white text-amber-500 hover:bg-gray-100' // Highlighted CTA
                      : 'bg-amber-500 text-white hover:bg-amber-600' // Standard CTA
                    }`}
                >
                  {index === 1 ? 'Start Your Signature Project' : 'Book Consultation'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- Testimonial Section (New) --- */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${accentColor}`}>Client Trust</p>
          <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed">
            "Working with this firm was transformative. They didn't just design a house; they curated a home that perfectly reflects our lifestyle and taste. The attention to detail and project management were flawless."
          </blockquote>
          <p className="mt-6 text-lg font-semibold text-gray-700">— Jane and Michael D. <span className="text-gray-500 font-normal">, The Riverstone Project</span></p>
        </div>
      </section>

      {/* --- FAQ Section (New) --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 flex items-center justify-center">
            <MessageSquare className={`w-8 h-8 mr-3 ${accentColor}`} />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action Footer --- */}
      <footer className="p-12 bg-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to elevate your home?</h3>
          <p className="text-gray-400 mb-6">Schedule a complimentary discovery call to discuss your project needs and timeline.</p>
          <button className="px-10 py-4 bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition duration-300">
            Schedule a Free Consultation
          </button>
        </div>
      </footer>

    </div>
  );
}
