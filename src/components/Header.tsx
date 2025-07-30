import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="/assets/HelpCareLogo.jpg" 
                alt="CareWatch Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-gray-900">CareWatch</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'dashboard' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Monitoramento
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('login')}
              className="text-gray-700"
            >
              Entrar
            </Button>
            <Button 
              onClick={() => onNavigate('pricing')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Assinar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {onNavigate('home'); setMobileMenuOpen(false);}}
                className={`px-3 py-2 rounded-md text-left transition-colors ${
                  currentPage === 'home' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => {onNavigate('dashboard'); setMobileMenuOpen(false);}}
                className={`px-3 py-2 rounded-md text-left transition-colors ${
                  currentPage === 'dashboard' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700'
                }`}
              >
                Monitoramento
              </button>
              <div className="pt-3 border-t border-gray-100">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start mb-2"
                  onClick={() => {onNavigate('login'); setMobileMenuOpen(false);}}
                >
                  Entrar
                </Button>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {onNavigate('pricing'); setMobileMenuOpen(false);}}
                >
                  Assinar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}