import React, { useState } from 'react';
import { Ruler, MapPin, Calendar, LayoutGrid, Heart } from 'lucide-react';

// --- Mock Data for the Project (Updated with new Image URLs) ---
const mockProjectData = {
  title: 'The Harmony Residence',
  location: 'Beverly Hills, CA',
  style: 'Modern Minimalist',
  area: '4,200 Sq Ft',
  year: 2024,
  description: "Designed for a young professional couple, The Harmony Residence blends stark minimalist architecture with natural, organic textures. The primary goal was to create a serene, light-filled sanctuary that felt warm and inviting, despite the clean lines and open floor plan. We achieved this by using a muted palette of creams, whites, and soft greys, complemented by rich oak flooring and bespoke linen textiles. Every element was chosen for its functionality, aesthetic purity, and contribution to a tranquil living environment.",
  challenges: 'The initial structure, featuring large concrete planes and floor-to-ceiling glass, felt cold and imposing. The main challenge was introducing softness and human scale without compromising the integrity of the architecture.',
  solution: 'We introduced custom millwork in warm walnut tones, applied wide-plank natural oak flooring, and utilized layered ambient lighting instead of harsh overhead fixtures. Custom, oversized area rugs define zones in the open space, providing both acoustic dampening and tactile comfort.',
  images: [
    // 1. Main Living Area (16:9 for header) - Neutral and spacious
    { url: 'https://www.mikasafloors.com/blog/wp-content/uploads/2023/08/Redefine-Your-Living-Space-with-Oak-Engineered-Wood-Flooring.jpg', alt: 'Main Living Area with Oak Flooring' },
    // 2. Custom Kitchen Detail (3:4 Vertical for detailed view) - Focus on materials
    { url: 'https://hips.hearstapps.com/hmg-prod/images/edc080123reddkaihoi-005-6578d1cb9584d.jpg?crop=1xw:1xh;center,top', alt: 'Custom Kitchen Island Detail' },
    // 3. Master Bedroom View (4:3) - Serene space
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVKnYb8d6x1Dpp3hTSMEuPJQLpY0OxT8quQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBlNZe_2p2n4f2kOLVrnVGGnLPzo5H7kVzjufe_t4JOQs6JcYu5jrhAqg9KfbxGkaE4k&usqp=CAUhttps://st.hzcdn.com/simgs/4c01396705bbbe2a_3-9482/home-design.jpg', alt: 'Master Bedroom View' },
    // 4. Bathroom Tilework (4:3) - Focus on finishes
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrReKCuscyI1qJqnHYkM1cLyRxH0zQMEs_gw&s', alt: 'Bathroom Tilework' },
    // 5. Architectural Detail (Square) - Abstract element
    { url: 'https://i.redd.it/dtltylbg0gyb1.jpg', alt: 'Architectural Detail' },
  ],
};

export default function ProjectPage() {
  const [isLoved, setIsLoved] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">
      
      {/* --- Project Header Section --- */}
      <header className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        {/* Background Image/Placeholder (Uses the first image) */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: `url(${mockProjectData.images[0].url})`,
          // Using a simple linear gradient overlay for a polished look
          background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${mockProjectData.images[0].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} aria-hidden="true"></div>

        {/* Content Overlay */}
        <div className="relative z-10 p-6 md:p-12 lg:p-16 w-full text-white bg-gradient-to-t from-gray-900/70 to-transparent">
          <p className="text-lg font-medium uppercase tracking-widest text-amber-300 mb-2">{mockProjectData.style}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{mockProjectData.title}</h1>
          <div className="flex items-center space-x-3 mt-4 text-gray-200">
            <MapPin className="w-5 h-5" />
            <span className="text-lg md:text-xl font-light">{mockProjectData.location}</span>
          </div>
        </div>

        {/* Action Button (e.g., Save/Love) */}
        <button
          onClick={() => setIsLoved(!isLoved)}
          className={`absolute top-6 right-6 p-3 rounded-full shadow-2xl transition duration-300 transform hover:scale-105 
            ${isLoved ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          aria-label="Save project to favorites"
        >
          <Heart className="w-6 h-6 fill-current" />
        </button>
      </header>

      {/* --- Main Content Layout --- */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Project Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-20 relative z-20 mb-12">
          
          {/* Stat 1: Area */}
          <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
            <Ruler className="text-amber-500 w-6 h-6 mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Area</span>
            <p className="mt-1 text-xl font-bold text-gray-800">{mockProjectData.area}</p>
          </div>
          
          {/* Stat 2: Style */}
          <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
            <LayoutGrid className="text-amber-500 w-6 h-6 mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Style</span>
            <p className="mt-1 text-xl font-bold text-gray-800">{mockProjectData.style}</p>
          </div>
          
          {/* Stat 3: Completed */}
          <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
            <Calendar className="text-amber-500 w-6 h-6 mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Completed</span>
            <p className="mt-1 text-xl font-bold text-gray-800">{mockProjectData.year}</p>
          </div>
          
          {/* Stat 4: Location */}
          <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
            <MapPin className="text-amber-500 w-6 h-6 mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Location</span>
            <p className="mt-1 text-xl font-bold text-gray-800">{mockProjectData.location.split(',')[0]}</p>
          </div>
        </section>

        {/* Narrative Section (Description, Challenges, Solution) */}
        <section className="flex flex-col lg:flex-row gap-12 pt-8">
          
          {/* Detailed Overview */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-amber-500 inline-block pb-1">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{mockProjectData.description}</p>

            <div className="space-y-6">
              {/* Challenge */}
              <div className="p-6 bg-gray-100 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
                  <span className="text-red-500 mr-2">/</span> The Challenge
                </h3>
                <p className="text-gray-700">{mockProjectData.challenges}</p>
              </div>

              {/* Solution */}
              <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
                  <span className="text-amber-600 mr-2">/</span> Our Solution
                </h3>
                <p className="text-gray-700">{mockProjectData.solution}</p>
              </div>
            </div>
          </div>

          {/* Sidebar/Callout (Mock Contact/Next Project) */}
          <aside className="lg:w-1/3 lg:sticky lg:top-8 h-fit">
            <div className="p-8 bg-gray-800 rounded-xl shadow-2xl text-white">
              <h3 className="text-2xl font-bold mb-3">Love this look?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can translate this style into your own unique space.
              </p>
              <button className="w-full py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition duration-300">
                Inquire About Services
              </button>
            </div>
          </aside>
        </section>
        
        {/* --- Image Gallery Section --- */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-300 inline-block pb-1">Visual Documentation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockProjectData.images.map((img, index) => (
              <div key={index} className={`relative rounded-xl overflow-hidden shadow-xl transition duration-500 transform hover:scale-[1.01] hover:shadow-2xl 
                ${index === 0 ? 'md:col-span-2' : ''} ${index === 1 ? 'md:row-span-2 md:h-full' : ''}`}>
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  // Aspect ratios set for dynamic gallery layout
                  style={{ aspectRatio: index === 0 ? '16/9' : index === 1 ? '3/4' : '4/3' }}
                />
                 {/* Image Caption Overlay */}
                 <div className="p-3 bg-white/70 backdrop-blur-sm absolute bottom-0 left-0 right-0">
                    <p className="text-sm text-gray-700 font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- Footer/Call to Action --- */}
      <footer className="mt-16 p-8 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-light mb-2">Ready to start your project?</h3>
          <button className="mt-4 px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition duration-300">
            View All Projects
          </button>
        </div>
      </footer>

    </div>
  );
}
