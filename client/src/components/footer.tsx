import { Instagram, Github, Youtube } from "lucide-react";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white border-opacity-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg width='800' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='300' rx='20' fill='%23FDE047'/%3E%3Ccircle cx='400' cy='150' r='80' fill='%23EF4444'/%3E%3Ccircle cx='400' cy='150' r='40' fill='%23FFFFFF'/%3E%3C/svg%3E";
              }}
            />
          </div>

          <p className="text-white text-opacity-70 mb-6">
            The Browser for Europe.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/DunebBrowser"
              className="text-white text-opacity-70 hover:text-yellow-400 transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/DunebBrowser"
              className="text-white text-opacity-70 hover:text-yellow-400 transition-colors duration-300"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com/@DunebBrowser"
              className="text-white text-opacity-70 hover:text-yellow-400 transition-colors duration-300"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
            <a
              href="mailto:duneb@sbdesigns.is-a.dev"
              className="text-white text-opacity-70 hover:text-white transition-colors duration-300"
            >
              Email Us
            </a>
            <a
              href="https://sbdesigns.is-a.dev"
              className="text-white text-opacity-70 hover:text-white transition-colors duration-300"
            >
              SB Designs
            </a>
          </div>

          <div className="border-t border-white border-opacity-20 pt-6">
            <p className="text-white text-opacity-50 text-sm">
              Duneb by SB Designs © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
