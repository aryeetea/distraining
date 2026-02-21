import { HeroSection } from '../components/HeroSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const stats = [
    { number: '500+', label: 'Graduates' },
    { number: '95%', label: 'Job Placement' },
    { number: '20+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="DAS Sterile Processing Training Centre"
        subtitle="Registration is now open."
        ctaText="Apply for Admissions"
        backgroundImage="https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMGluc3RydW1lbnRzJTIwc3RlcmlsZSUyMHByb2Nlc3NpbmclMjBtZWRpY2FsJTIwdG9vbHN8ZW58MXx8fHwxNzcxNjA3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        backgroundAlt="Surgical Instruments"
      />

      {/* Stats Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 text-center shadow-lg transition-transform hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0, 48, 135, 0.05) 0%, rgba(0, 166, 81, 0.05) 100%)',
                  border: '1px solid rgba(0, 48, 135, 0.1)'
                }}
              >
                <div
                  className="mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(32px, 4vw, 42px)',
                    fontWeight: '800',
                    color: '#003087'
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '15px',
                    color: '#0c121c',
                    opacity: '0.7',
                    fontWeight: '500'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2
              className="mb-4"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: '700',
                color: '#003087'
              }}
            >
              Professional Healthcare Training
            </h2>
            <p
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '1.6',
                color: '#0c121c',
                opacity: '0.7'
              }}
            >
              Excellence in sterile processing education
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMGluc3RydW1lbnRzJTIwc3RlcmlsZSUyMHByb2Nlc3NpbmclMjBtZWRpY2FsJTIwdG9vbHN8ZW58MXx8fHwxNzcxNjA3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Surgical Instruments"
                className="h-72 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758206523660-3ef5a51f1113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZXJ5JTIwaW5zdHJ1bWVudHMlMjBob3NwaXRhbCUyMG9wZXJhdGluZyUyMHJvb20lMjB0b29sc3xlbnwxfHx8fDE3NzE2MDc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Operating Room Surgical Tools"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div
            className="mt-12 rounded-2xl p-8 text-center shadow-lg"
            style={{
              background:
                'linear-gradient(135deg, rgba(0, 48, 135, 0.06) 0%, rgba(0, 166, 81, 0.06) 100%)',
              border: '1px solid rgba(0, 48, 135, 0.10)'
            }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '24px',
                fontWeight: '800',
                color: '#003087'
              }}
            >
              Ready to Get Started?
            </h3>

            <p
              className="mb-6"
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontSize: '16px',
                color: '#0c121c',
                opacity: 0.75
              }}
            >
              Apply today or reach out with questions — we’ll guide you through the next steps.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/apply"
                className="rounded-full px-10 py-3 text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: '#FF8C42',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800
                }}
              >
                Apply Now
              </a>

              <a
                href="/contact"
                className="rounded-full px-10 py-3 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0, 48, 135, 0.20)',
                  color: '#003087',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}