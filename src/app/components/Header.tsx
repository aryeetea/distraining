import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { Link, useLocation, useNavigate } from 'react-router';
import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logoText?: string;
  navLinks?: NavLink[];
  onFreeTrial?: () => void;
  onSignUp?: () => void;
}

const defaultNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Courses', href: '/courses' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' }
];

export function Header({ 
  logoText = 'DAS Training', 
  navLinks = defaultNavLinks,
  onFreeTrial,
  onSignUp
}: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleFreeTrial = () => {
    if (onFreeTrial) {
      onFreeTrial();
    } else {
      navigate('/contact');
    }
    setMobileMenuOpen(false);
  };
  
  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp();
    } else {
      navigate('/apply');
    }
    setMobileMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex items-center justify-between gap-4 py-4 md:py-[18px]">

          {/* Logo */}
          <Link to="/" className="flex flex-col" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex items-baseline gap-1">
              <span
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#FF8C42',
                  textShadow: '0 2px 4px rgba(255, 140, 66, 0.15)'
                }}
              >
                D
              </span>
              <span
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#003087',
                  textShadow: '0 2px 4px rgba(0, 48, 135, 0.15)'
                }}
              >
                A
              </span>
              <span
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#00A651',
                  textShadow: '0 2px 4px rgba(0, 166, 81, 0.15)'
                }}
              >
                S
              </span>
            </div>
            <div
              className="mt-1 hidden md:block"
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontSize: '10px',
                color: '#0c121c',
                letterSpacing: '1.5px',
                fontWeight: '500',
                opacity: '0.7',
                textTransform: 'uppercase'
              }}
            >
              Sterile Processing Training Centre
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={index}
                  to={link.href}
                  className="transition-colors hover:text-[#003087]"
                  style={{
                    fontSize: '15px',
                    letterSpacing: '0.5px',
                    lineHeight: '27px',
                    color: isActive ? '#003087' : '#0c121c',
                    fontWeight: isActive ? '600' : '400'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-2 md:gap-3">
            <PrimaryButton onClick={handleFreeTrial}>
              Contact Us
            </PrimaryButton>
            <SecondaryButton onClick={handleSignUp}>
              Apply Now
            </SecondaryButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg transition-colors hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="#003087" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="#003087" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg transition-colors hover:bg-gray-50"
                    style={{
                      fontSize: '15px',
                      letterSpacing: '0.5px',
                      fontFamily: 'Rubik, sans-serif',
                      color: isActive ? '#003087' : '#0c121c',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? 'rgba(0, 48, 135, 0.05)' : 'transparent'
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex flex-col gap-3 px-4">
              <PrimaryButton onClick={handleFreeTrial} className="w-full justify-center">
                Contact Us
              </PrimaryButton>
              <SecondaryButton onClick={handleSignUp} className="w-full justify-center">
                Apply Now
              </SecondaryButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}