import { Facebook, Twitter, Instagram, Linkedin, Rss } from "lucide-react";
import { NavLink } from "react-router";

const footerData = {
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press Kit", href: "#press" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#docs" },
      { name: "Support", href: "#support" },
      { name: "API Reference", href: "#api" },
      { name: "Status", href: "#status" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Settings", href: "#cookies" },
    ],
  },
};

// Social Icons
const socialIcons = [
  { icon: Facebook, href: "#facebook", label: "Facebook" },
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Instagram, href: "#instagram", label: "Instagram" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: Rss, href: "#rss", label: "RSS Feed" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 rounded-t-xl shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
          
          <div className="col-span-2 space-y-4">
            <NavLink
              to="/"
              className="flex items-center text-2xl font-extrabold text-red-800"
            >
              <span className="inline-block p-1 bg-red-600 rounded-full mr-2"></span>
              NETFLIX
            </NavLink>
            <p className="text-sm text-gray-400 max-w-sm">
              Building the future one component at a time. Connect with us and
              stay updated on our progress.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialIcons.map((Social, index) => (
                <NavLink
                  key={index}
                  to={Social.href}
                  aria-label={Social.label}
                  className="text-gray-400 hover:text-indigo-400 transition duration-300 transform hover:scale-110 p-2 rounded-full border border-gray-700 hover:border-indigo-400"
                >
                  <Social.icon size={18} />
                </NavLink>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerData).map((section, index) => (
            <nav key={index} className="space-y-3">
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-indigo-500/50 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <NavLink
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Gemini Technologies. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-red-500">&hearts;</span> and
            code.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App component to demonstrate the Footer
export default function App() {
  return (

    

      <Footer />
  );
}
