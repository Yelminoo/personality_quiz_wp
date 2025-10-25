import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-pantone-276c shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/logo/Nouveau__Jewelry Logo.png" 
                alt="NobArt Logo" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive('/')
                    ? 'bg-soft-gold text-white font-medium'
                    : 'text-gray-200 hover:text-soft-gold hover:bg-white hover:bg-opacity-10'
                }`}
              >
                About Quiz
              </Link>
              <Link
                to="/quiz"
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive('/quiz')
                    ? 'bg-soft-gold text-white font-medium'
                    : 'text-gray-200 hover:text-soft-gold hover:bg-white hover:bg-opacity-10'
                }`}
              >
                Take Quiz
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-pantone-276c text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <img 
                  src="/logo/Nouveau__Jewelry Logo.png" 
                  alt="NobArt Logo" 
                  className="h-25 w-auto"
                />
              </div>
              <p className="text-gray-200">
                Discover your personal symbols and create meaningful jewelry that tells your story.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-soft-gold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-200 hover:text-soft-gold transition-colors">
                    About Quiz
                  </Link>
                </li>
                <li>
                  <Link to="/quiz" className="text-gray-200 hover:text-soft-gold transition-colors">
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-soft-gold">Contact</h4>
              <p className="text-gray-200">
                Ready to create your custom piece?<br />
                Get in touch with our design team.
              </p>
            </div>
          </div>
          <div className="border-t border-soft-gold border-opacity-30 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 NobArt. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;