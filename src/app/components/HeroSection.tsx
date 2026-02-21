import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  backgroundImage: string;
  backgroundAlt?: string;
}

export function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  onCtaClick,
  backgroundImage,
  backgroundAlt = 'Hero background'
}: HeroSectionProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      navigate('/apply');
    }
  };
  
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={backgroundImage}
          alt={backgroundAlt}
          className="h-full w-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative mx-auto h-full max-w-[1200px] px-4 md:px-8">
        <div className="flex h-full items-center justify-center md:justify-end">
          {/* Right-aligned Text Block */}
          <div className="max-w-[600px] rounded-2xl bg-white/95 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <h1 
              className="mb-4 md:mb-6"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '800',
                lineHeight: '1.2',
                color: '#0c121c'
              }}
            >
              {title}
            </h1>
            <p 
              className="mb-6 md:mb-8"
              style={{ 
                fontFamily: 'Rubik, sans-serif',
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '1.6',
                color: '#0c121c',
                opacity: '0.8'
              }}
            >
              {subtitle}
            </p>
            <button
              onClick={handleClick}
              className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 text-white transition-all hover:opacity-90 hover:shadow-xl"
              style={{ 
                backgroundColor: '#FF8C42',
                borderRadius: '999px',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(255, 140, 66, 0.3)'
              }}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}