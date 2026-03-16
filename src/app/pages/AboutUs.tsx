import { RequiredCourseMaterials } from "../components/RequiredCourseMaterials";

export function AboutUs() {
  const whyChooseItems = [
    "Industry-leading instructors with decades of experience",
    "Interactive teaching methods and flexible pacing designed to support every student's learning journey",
    "Flexible scheduling options for working professionals",
    "Comprehensive certification preparation",
    "Career support and job placement assistance"
  ];

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className="mb-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "800",
              color: "#003087"
            }}
          >
            About Us
          </h1>

          <p
            className="mx-auto max-w-[780px]"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#0c121c",
              opacity: "0.78"
            }}
          >
            DAS Sterile Processing Training Center is dedicated to preparing students for
            real healthcare environments through practical sterile processing education,
            professional support, and a strong focus on patient safety.
          </p>
        </div>

        {/* Bottom Layout */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Mission + Approach stacked */}
          <div
            className="overflow-hidden rounded-2xl bg-white shadow-lg"
            style={{ border: "1px solid rgba(0,48,135,0.08)" }}
          >
            <div
              className="h-2"
              style={{ background: "linear-gradient(90deg,#003087 0%,#00A651 100%)" }}
            />

            <div className="p-8 space-y-8">

              {/* Mission */}
              <div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "26px",
                    fontWeight: "700",
                    color: "#003087"
                  }}
                >
                  Our Mission
                </h2>

                <p
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    opacity: "0.85"
                  }}
                >
                  DAS Sterile Processing Training Center is dedicated to providing world-class
                  education and certification programs for healthcare professionals in sterile
                  processing, preparing graduates to work confidently in healthcare facilities
                  across all 50 states.
                </p>

                <p
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    opacity: "0.85"
                  }}
                >
                  Our comprehensive training ensures that every graduate meets the highest
                  standards of patient safety and healthcare excellence.
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(0,48,135,0.10)" }} />

              {/* Approach */}
              <div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#003087"
                  }}
                >
                  Our Approach
                </h3>

                <p
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.8",
                    opacity: "0.85"
                  }}
                >
                  We focus on real-world sterile processing workflows, practical instruction,
                  and professional readiness. Our programs are designed to build confidence,
                  technical skills, and industry awareness so students can transition smoothly
                  into healthcare environments.
                </p>
              </div>

            </div>
          </div>

          {/* Why Choose DAS */}
          <div
            className="overflow-hidden rounded-2xl bg-white shadow-lg"
            style={{ border: "1px solid rgba(0,166,81,0.08)" }}
          >
            <div
              className="h-2"
              style={{ background: "linear-gradient(90deg,#00A651 0%,#FF8C42 100%)" }}
            />

            <div className="p-8">
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#00A651"
                }}
              >
                Why Choose DAS?
              </h2>

              <ul className="space-y-4">
                {whyChooseItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 rounded-xl p-4 hover:bg-gray-50"
                  >
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(0,166,81,0.15)" }}
                    >
                      ✓
                    </div>

                    <span
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: "16px",
                        opacity: "0.85"
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>

        <RequiredCourseMaterials />
      </div>
    </div>
  );
}