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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <Link to="/" className="text-2xl font-bold text-slate-700 hover:text-blue-600 transition-colors">
              NobArt
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive('/')
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                About Quiz
              </Link>
              <Link
                to="/quiz"
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive('/quiz')
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
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
      <footer className="bg-slate-800 text-white py-12 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">NobArt</h3>
              <p className="text-gray-300">
                Discover your personal symbols and create meaningful jewelry that tells your story.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    About Quiz
                  </Link>
                </li>
                <li>
                  <Link to="/quiz" className="text-gray-300 hover:text-white transition-colors">
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <p className="text-gray-300">
                Ready to create your custom piece?<br />
                Get in touch with our design team.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 NobArt. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;