
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-semibold text-brand-slate">NexusAI</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-brand-slate/80 hover:text-brand-blue transition-colors">
              Solutions
            </a>
            <a href="#features" className="text-brand-slate/80 hover:text-brand-blue transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-brand-slate/80 hover:text-brand-blue transition-colors">
              Testimonials
            </a>
            <Button variant="ghost" className="text-brand-slate/80 hover:text-brand-blue">
              About
            </Button>
            <Link to="/career">
              <Button variant="ghost" className="text-brand-slate/80 hover:text-brand-blue">
                Careers
              </Button>
            </Link>
            <Button>Contact Us</Button>
          </nav>
          
          <button 
            className="md:hidden text-brand-slate"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 md:hidden overflow-auto",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#solutions" 
            className="text-xl text-brand-slate w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solutions
          </a>
          <a 
            href="#features" 
            className="text-xl text-brand-slate w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-xl text-brand-slate w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#" 
            className="text-xl text-brand-slate w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <Link 
            to="/career" 
            className="text-xl text-brand-slate w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Careers
          </Link>
          <Button 
            className="w-full mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
