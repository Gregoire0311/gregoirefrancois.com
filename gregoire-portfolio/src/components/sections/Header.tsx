'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/site';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 backdrop-blur-md border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
              <span className="text-white font-bold text-sm">GF</span>
            </div>
            <span className="font-semibold text-lg text-white">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-sm text-white hover:bg-white/20 hover:text-white"
            >
              {siteConfig.hero.cta.about}
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="text-sm bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              {siteConfig.hero.cta.contact}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <nav className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="justify-start text-white hover:bg-white/20"
              >
                {siteConfig.hero.cta.about}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="justify-start bg-white/20 hover:bg-white/30 text-white border border-white/30"
              >
                {siteConfig.hero.cta.contact}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
