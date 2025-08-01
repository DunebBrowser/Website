import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-20">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center animate-fade-in">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml,%3Csvg width='800' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='300' rx='20' fill='%23FDE047'/%3E%3Ccircle cx='400' cy='150' r='80' fill='%23EF4444'/%3E%3Ccircle cx='400' cy='150' r='40' fill='%23FFFFFF'/%3E%3C/svg%3E";
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("screenshots")}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Screenshots
          </button>
          <button
            onClick={() => scrollToSection("download")}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Download
          </button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-white hover:bg-white hover:bg-opacity-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block py-2 w-full text-left text-white hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("screenshots")}
              className="block py-2 w-full text-left text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Screenshots
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="block py-2 w-full text-left text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
