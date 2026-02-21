export function AboutUs() {
  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h1
          className="mb-12 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "800",
            color: "#003087"
          }}
        >
          About Us
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Our Mission Card */}
            <div
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
              style={{
                border: "1px solid rgba(0, 48, 135, 0.08)"
              }}
            >
              <div
                className="h-2"
                style={{
                  background:
                    "linear-gradient(90deg, #003087 0%, #00A651 100%)"
                }}
              />

              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "rgba(0, 48, 135, 0.1)" }}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="#003087"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>

                  <h2
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "clamp(24px, 3vw, 28px)",
                      fontWeight: "700",
                      color: "#003087"
                    }}
                  >
                    Our Mission
                  </h2>
                </div>

                <p
                  className="mb-5"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#0c121c",
                    opacity: "0.85"
                  }}
                >
                  DAS Sterile Processing Training Centre is dedicated to
                  providing world-class education and certification programs
                  for healthcare professionals in sterile processing and
                  infection control.
                </p>

                <p
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#0c121c",
                    opacity: "0.85"
                  }}
                >
                  Our comprehensive training ensures that every graduate meets
                  the highest standards of patient safety and healthcare
                  excellence.
                </p>
              </div>
            </div>

            {/* NEW SUPPORT CARD — balances layout */}
            <div
              className="overflow-hidden rounded-2xl bg-white shadow-md"
              style={{
                border: "1px solid rgba(0, 48, 135, 0.06)"
              }}
            >
              <div className="p-8">
                <h3
                  className="mb-3"
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
                    color: "#0c121c",
                    opacity: "0.85"
                  }}
                >
                  We focus on real-world sterile processing workflows,
                  practical instruction, and professional readiness. Our
                  programs are designed to build confidence, technical
                  skills, and industry awareness so students can transition
                  smoothly into healthcare environments.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
              style={{
                border: "1px solid rgba(0, 166, 81, 0.08)"
              }}
            >
              <div
                className="h-2"
                style={{
                  background:
                    "linear-gradient(90deg, #00A651 0%, #FF8C42 100%)"
                }}
              />

              <div className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "rgba(0, 166, 81, 0.1)" }}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="#00A651"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>

                  <h2
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "clamp(24px, 3vw, 28px)",
                      fontWeight: "700",
                      color: "#00A651"
                    }}
                  >
                    Why Choose DAS?
                  </h2>
                </div>

                <ul className="space-y-4">
                  {[
                    "Industry-leading instructors with decades of experience",
                    "State-of-the-art training facilities and equipment",
                    "Flexible scheduling options for working professionals",
                    "Comprehensive certification preparation",
                    "Career support and job placement assistance"
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 rounded-xl p-4 transition-all hover:bg-gray-50"
                    >
                      <div
                        className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: "rgba(0, 166, 81, 0.15)"
                        }}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="#00A651"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: "16px",
                          lineHeight: "1.6",
                          color: "#0c121c",
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
        </div>
      </div>
    </div>
  );
}  