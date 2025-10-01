import React from 'react';
import { Search, ChevronRight, Bookmark, Tag } from 'lucide-react';

// Mock data for blog posts
const mockPosts = [
  {
    id: 1,
    title: "The Future of Minimalist Living: Integrating Smart Tech Seamlessly",
    excerpt: "Explore how cutting-edge smart home technology is being hidden and integrated into minimalist spaces for ultimate functionality and clean lines. This is our featured article.",
    date: "Oct 5, 2025",
    category: "Technology",
    readTime: "8 min read",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzc6aIvyGFdZLg24K8QnlnRZatFnr75329g&s",
    isFeatured: true, // New flag for the featured section
  },
  {
    id: 2,
    title: "10 Timeless Materials for Modern Minimalist Kitchens",
    excerpt: "Discover the best natural stones, warm woods, and metals that define luxury in contemporary kitchen design.",
    date: "Sep 20, 2025",
    category: "Materials",
    readTime: "6 min read",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF6isPzNGMX5VC3hOZl-T8DEqCyv5aEQSWA&s",
  },
  {
    id: 3,
    title: "The Power of Neutral Palettes: Creating Serene Living Spaces",
    excerpt: "Learn how to use shades of beige, cream, and gray to add depth and tranquility without sacrificing visual interest.",
    date: "Sep 15, 2025",
    category: "Color Theory",
    readTime: "4 min read",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxkdMQ_u6wpyMLhFKrBSa1CRxNI0YzcUdTg&s"
  },  
  {
    id: 4,
    title: "Lighting Design: Essential Techniques for Architectural Homes",
    excerpt: "A guide to layered lighting, hidden strips, and statement fixtures that highlight the unique features of your home.",
    date: "Sep 10, 2025",
    category: "Architecture",
    readTime: "7 min read",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlo59OH6Khd_z0C7lw5MebSjGdgm46X7JKSA&s",
  },
  {
    id: 5,
    title: "Sustainable Luxury: Furnishing Your Home with Eco-Friendly Finds",
    excerpt: "We explore high-end, responsibly sourced furniture and décor that benefits both your home and the planet.",
    date: "Sep 01, 2025",
    category: "Sustainability",
    readTime: "5 min read",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngoKDBYUDLFl_bUQh_QvarNnjwpQnrOhYng&s",
  },
];

// Mock data for categories
const mockCategories = [
  { name: "Materials", count: 12 },
  { name: "Color Theory", count: 8 },
  { name: "Architecture", count: 5 },
  { name: "Sustainability", count: 4 },
  { name: "E-Design Tips", count: 10 },
  { name: "Technology", count: 3 },
];

// Mock data for popular tags
const mockTags = ["Luxury", "Smart Home", "Natural Wood", "Concrete", "Bedroom", "Outdoor", "Renovation"];


// Reusable Post Card Component
const PostCard = ({ post }) => {
  const accentColor = 'text-amber-600';

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition duration-300">
      {/* Placeholder Image */}
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-56 object-cover"
      />
      
      <div className="p-6">
        <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${accentColor}`}>{post.category}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition duration-300">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-4">
          <span>{post.date} &bull; {post.readTime}</span>
          <a href="#" className={`font-semibold flex items-center ${accentColor} hover:text-amber-700 transition`}>
            Read More
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};


export default function BlogPage() {
  const accentColor = 'text-amber-600';
  const primaryTextColor = 'text-gray-800';
  const featuredPost = mockPosts.find(post => post.isFeatured) || mockPosts[0];
  const nonFeaturedPosts = mockPosts.filter(post => !post.isFeatured);

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">

      {/* --- Header Section --- */}
      <header className="py-24 md:py-32 bg-white text-center border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className={`text-5xl md:text-6xl font-light ${primaryTextColor} mb-4`}>
            The Design Journal
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Insights, inspiration, and expertise on creating spaces that blend luxury, minimalism, and functionality.
          </p>
        </div>
      </header>

      {/* --- Main Content Grid --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* --- Left Column: Posts Grid (LG Col 8) --- */}
            <div className="lg:col-span-8">

              {/* --- Featured Post Section --- */}
              <div className="mb-12 p-8 bg-white rounded-xl shadow-2xl border-4 border-amber-500/5 overflow-hidden">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3 flex items-center">
                  <Bookmark className={`w-4 h-4 mr-2 ${accentColor}`} />
                  FEATURED ARTICLE
                </h2>
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-80 object-cover rounded-lg mb-6 shadow-md"
                  
                />
                <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${accentColor}`}>{featuredPost.category}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-amber-600 transition duration-300 cursor-pointer">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <a href="#" className={`font-semibold text-base flex items-center ${accentColor} hover:text-amber-700 transition`}>
                  Read Full Article
                  <ChevronRight className="w-5 h-5 ml-1" />
                </a>
                <span className="block mt-4 text-xs text-gray-500">{featuredPost.date} &bull; {featuredPost.readTime}</span>
              </div>
              {/* --- End Featured Post --- */}


              <h2 className="text-3xl font-light text-gray-900 mb-8 border-b pb-4">Recent Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Note: We map nonFeaturedPosts here */}
                {nonFeaturedPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div className="mt-12 flex justify-center space-x-2">
                <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                    Previous
                </button>
                <span className={`px-4 py-2 text-sm font-medium rounded-lg text-white ${accentColor} bg-amber-600`}>1</span>
                <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                    2
                </button>
                <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                    Next
                </button>
              </div>
            </div>

            {/* --- Right Column: Sidebar (LG Col 4) --- */}
            <aside className="lg:col-span-4 space-y-12">
              
              {/* Search Widget */}
              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-3">Search</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-amber-600 focus:border-amber-600 transition text-sm"
                  />
                  <button className={`px-4 py-3 text-white rounded-r-lg flex items-center justify-center ${accentColor} bg-amber-600 hover:bg-amber-700 transition`}>
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-3">Categories</h3>
                <ul className="space-y-3">
                  {mockCategories.map((cat, index) => (
                    <li key={index}>
                      <a href="#" className="flex justify-between items-center text-gray-600 hover:text-amber-600 transition text-sm font-medium">
                        <span>{cat.name}</span>
                        <span className="text-gray-400">({cat.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags Widget (New Addition) */}
              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-3 flex items-center">
                  <Tag className="w-4 h-4 mr-2 text-gray-500" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mockTags.map((tag, index) => (
                    <a 
                      key={index} 
                      href="#"
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700 transition"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Widget */}
              <div className={`p-8 rounded-xl shadow-lg border border-amber-300 ${accentColor} bg-amber-500/10`}>
                <Bookmark className={`w-8 h-8 mb-4 ${accentColor}`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start Your Project</h3>
                <p className="text-gray-700 mb-4">
                  Ready to move past inspiration? Let's discuss your vision and make it a reality.
                </p>
                <button className="w-full py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition duration-300">
                  Book a Consultation
                </button>
              </div>

            </aside>
          </div>
        </div>
      </section>

    </div>
  );
}
