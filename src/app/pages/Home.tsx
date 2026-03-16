import { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { RequiredCourseMaterials } from "../components/RequiredCourseMaterials";

export function Home() {
  const reviews = [
    {
      name: "Danielle Johnson",
      role: "Graduate",
      text: "This program gave me the confidence and hands-on knowledge I needed. The instructors explained everything clearly and I felt ready to enter the field."
    },
    {
      name: "Marcus Williams",
      role: "Former Student",
      text: "The training was very organized and practical. I learned real sterile processing workflows that helped me understand the job."
    },
    {
      name: "Aisha Thompson",
      role: "Graduate",
      text: "The instructors were supportive and patient. I appreciated how professional the program was and how focused it was on real healthcare standards."
    },
    {
      name: "Jordan Brown",
      role: "Student",
      text: "The lessons were clear, structured, and easy to follow. I would definitely recommend this program to anyone interested in sterile processing."
    },
    {
      name: "Brianna Davis",
      role: "Graduate",
      text: "I liked that the program was detailed but still easy to follow. It helped me build confidence and understand what to expect in real work settings."
    },
    {
      name: "Malik Robinson",
      role: "Former Student",
      text: "The learning environment was welcoming and professional. I appreciated how patient the instructors were and how much they cared about student success."
    },
    {
      name: "Tiana Harris",
      role: "Graduate",
      text: "This training helped me take my first real step into healthcare. I left with more knowledge, more confidence, and a better understanding of sterile processing."
    },
    {
      name: "Andre Miller",
      role: "Student",
      text: "Everything was explained in a way that made sense. I really liked how the program balanced professionalism, support, and practical learning."
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const goToPrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  return (
    <>
      <HeroSection
        title="DAS Sterile Processing Training Center"
        subtitle="Registration is now open."
        ctaText="Apply for Admissions"
        backgroundImage="https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2110/6883265/1000w_q95.jpg"
        backgroundAlt="Surgical Instruments"
      />

      {/* Reviews */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="mx-auto max-w-[1100px] px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(28px,4vw,36px)",
                fontWeight: "700",
                color: "#003087"
              }}
            >
              What Our Students Say
            </h2>

            <p
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "16px",
                opacity: 0.7,
                color: "#0c121c"
              }}
            >
              Real feedback from graduates of our program
            </p>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl p-10 text-center shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,48,135,0.05) 0%, rgba(0,166,81,0.05) 100%)",
                border: "1px solid rgba(0,48,135,0.1)"
              }}
            >
              <div
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, #003087 0%, #00A651 100%)",
                  color: "#ffffff",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "30px",
                  fontWeight: 800,
                  boxShadow: "0 10px 20px rgba(0,48,135,0.18)"
                }}
              >
                {reviews[currentReview].name.charAt(0)}
              </div>

              <p
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#0c121c",
                  opacity: 0.85,
                  maxWidth: "700px",
                  margin: "0 auto",
                  minHeight: "130px"
                }}
              >
                “{reviews[currentReview].text}”
              </p>

              <div className="mt-6">
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#003087"
                  }}
                >
                  {reviews[currentReview].name}
                </div>

                <div
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "14px",
                    opacity: 0.65,
                    color: "#0c121c"
                  }}
                >
                  {reviews[currentReview].role}
                </div>
              </div>
            </div>

            {/* arrows */}
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-[-8px] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-opacity hover:opacity-90 md:left-[-20px]"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,48,135,0.12)",
                color: "#003087"
              }}
              aria-label="Previous review"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-[-8px] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-opacity hover:opacity-90 md:right-[-20px]"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,48,135,0.12)",
                color: "#003087"
              }}
              aria-label="Next review"
            >
              ›
            </button>

            {/* dots */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentReview(index)}
                  className="h-3 w-3 rounded-full transition-all"
                  style={{
                    backgroundColor:
                      currentReview === index ? "#003087" : "rgba(0, 48, 135, 0.20)",
                    transform: currentReview === index ? "scale(1.1)" : "scale(1)"
                  }}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2
              className="mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: "700",
                color: "#003087"
              }}
            >
              Professional Healthcare Training
            </h2>
            <p
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "clamp(16px, 2vw, 18px)",
                lineHeight: "1.6",
                color: "#0c121c",
                opacity: "0.7"
              }}
            >
              Excellence in sterile processing education
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback
                src="https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2110/6883276/1000w_q95.jpg"
                alt="Sterile processing student training"
                className="h-72 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback
                src="https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2110/6883254/1000w_q95.jpg"
                alt="Patient safety"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div
            className="mt-12 rounded-2xl p-8 text-center shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,48,135,0.06) 0%, rgba(0,166,81,0.06) 100%)",
              border: "1px solid rgba(0,48,135,0.10)"
            }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "24px",
                fontWeight: "800",
                color: "#003087"
              }}
            >
              Ready to Get Started?
            </h3>

            <p
              className="mb-6"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "16px",
                color: "#0c121c",
                opacity: 0.75
              }}
            >
              Apply today or reach out with questions — we’ll guide you through the next steps.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/apply"
                className="rounded-full px-10 py-3 text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#FF8C42",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800
                }}
              >
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="rounded-full px-10 py-3 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,48,135,0.2)",
                  color: "#003087",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RequiredCourseMaterials />
    </>
  );
}