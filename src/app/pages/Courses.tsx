import { Link } from "react-router";

export function Courses() {
  // ✅ When your client gives you a payment link, paste it here.
  // Example: "https://buy.stripe.com/xxxx" or "https://square.link/u/xxxx"
  const PAYMENT_LINK = ""; // leave empty for now

  const course = {
    title: "Sterile Processing Fundamentals",
    duration: "8 weeks",
    level: "Standard",
    color: "#FF8C42",
    description:
      "A standard 8-week program designed to prepare students for real healthcare environments. Learn the sterile processing workflow from decontamination through sterilization, storage, and quality assurance while following infection prevention and safety standards.",
    topics: [
      "Decontamination & Infection Prevention",
      "Instrument Identification & Handling",
      "Sterilization Methods",
      "Packaging, Storage & Transport",
      "Quality Assurance & Biological Monitoring",
      "Documentation, Compliance & Workflow"
    ]
  };

  const weekly = [
    { week: "Week 1", title: "Introduction & Safety Standards" },
    { week: "Week 2", title: "Decontamination Procedures" },
    { week: "Week 3", title: "Instrument Identification" },
    { week: "Week 4", title: "Sterilization Methods" },
    { week: "Week 5", title: "Packaging & Storage" },
    { week: "Week 6", title: "Quality Assurance" },
    { week: "Week 7", title: "Documentation & Compliance" },
    { week: "Week 8", title: "Final Review & Assessment" }
  ];

  const highlights = [
    { label: "Format", value: "Instructor-led + hands-on practice" },
    { label: "Schedule", value: "2 online (weekday) + 1 in-person (weekend)" },
    { label: "Duration", value: "8 weeks" },
    { label: "Outcome", value: "Certificate of training + certification pathway readiness" }
  ];

  const payButton = PAYMENT_LINK ? (
    <a
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-full py-3 text-center text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
      style={{
        backgroundColor: "#00A651",
        fontSize: "15px",
        fontWeight: "800",
        fontFamily: "Rubik, sans-serif",
        boxShadow: "0 4px 12px rgba(0, 166, 81, 0.25)"
      }}
    >
      Pay Tuition Online
    </a>
  ) : (
    <button
      type="button"
      className="w-full rounded-full py-3 text-center text-white opacity-80 sm:w-auto sm:px-10"
      style={{
        backgroundColor: "#00A651",
        fontSize: "15px",
        fontWeight: "800",
        fontFamily: "Rubik, sans-serif"
      }}
      onClick={() =>
        alert("Online payment link coming soon. Please contact us to pay or check back shortly.")
      }
    >
      Pay Tuition Online (Coming Soon)
    </button>
  );

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        {/* Header */}
        <h1
          className="mb-4 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "800",
            color: "#003087"
          }}
        >
          Our Course
        </h1>

        <p
          className="mb-12 text-center"
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#0c121c",
            opacity: "0.7"
          }}
        >
          Professional sterile processing training designed for real-world healthcare environments
        </p>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* MAIN COURSE CARD */}
          <div
            className="lg:col-span-2 rounded-2xl border-2 bg-white p-8 shadow-md"
            style={{ borderColor: course.color }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-white"
                style={{
                  backgroundColor: course.color,
                  fontSize: "13px",
                  fontWeight: "600",
                  fontFamily: "Rubik, sans-serif"
                }}
              >
                {course.level}
              </span>

              <span
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "14px",
                  color: "#0c121c",
                  opacity: "0.6",
                  fontWeight: "500"
                }}
              >
                {course.duration}
              </span>
            </div>

            <h2
              className="mb-3"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "28px",
                fontWeight: "800",
                color: "#0c121c"
              }}
            >
              {course.title}
            </h2>

            <p
              className="mb-6"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#0c121c",
                opacity: "0.85"
              }}
            >
              {course.description}
            </p>

            {/* Highlights */}
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-xl border bg-[#f8fafc] px-4 py-3"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <div
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "12px",
                      opacity: 0.65,
                      fontWeight: 700,
                      color: "#0c121c"
                    }}
                  >
                    {h.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#0c121c",
                      marginTop: 4
                    }}
                  >
                    {h.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Topics */}
            <div className="mb-8">
              <h3
                className="mb-3"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "18px",
                  fontWeight: "800",
                  color: "#003087"
                }}
              >
                What You’ll Learn
              </h3>

              <div className="flex flex-wrap gap-2">
                {course.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="rounded-full px-3 py-1"
                    style={{
                      backgroundColor: "#f8fafc",
                      fontSize: "13px",
                      fontFamily: "Rubik, sans-serif",
                      color: "#0c121c",
                      border: "1px solid #e5e7eb"
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/apply"
                className="w-full rounded-full py-3 text-center text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
                style={{
                  backgroundColor: course.color,
                  fontSize: "15px",
                  fontWeight: "800",
                  fontFamily: "Rubik, sans-serif"
                }}
              >
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="w-full rounded-full py-3 text-center sm:w-auto sm:px-10 transition-opacity hover:opacity-90"
                style={{
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                  color: "#003087",
                  fontSize: "15px",
                  fontWeight: "800",
                  fontFamily: "Rubik, sans-serif"
                }}
              >
                Ask a Question
              </Link>

              {payButton}
            </div>

            {/* Payment Section */}
            <div
              className="mt-10 overflow-hidden rounded-2xl border bg-[#f8fafc]"
              style={{ borderColor: "rgba(0,48,135,0.10)" }}
            >
              <div
                className="h-2"
                style={{
                  background:
                    "linear-gradient(90deg, #003087 0%, #00A651 60%, #FF8C42 100%)"
                }}
              />
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "22px",
                        fontWeight: "900",
                        color: "#003087"
                      }}
                    >
                      Pay Tuition Online
                    </h3>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "#0c121c",
                        opacity: 0.8
                      }}
                    >
                      Secure online payments are available for tuition and fees. After submitting your application,
                      you can complete your payment online. If you have questions about payment options or installments,
                      contact our team.
                    </p>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: "13px",
                        color: "#0c121c",
                        opacity: 0.65
                      }}
                    >
                      Please do not include sensitive personal health information in any payment notes.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 md:min-w-[260px]">
                    {PAYMENT_LINK ? (
                      <a
                        href={PAYMENT_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full rounded-full py-3 text-center text-white transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: "#00A651",
                          fontSize: "15px",
                          fontWeight: "900",
                          fontFamily: "Rubik, sans-serif",
                          boxShadow: "0 4px 12px rgba(0, 166, 81, 0.25)"
                        }}
                      >
                        Proceed to Secure Payment
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="w-full rounded-full py-3 text-center text-white opacity-80"
                        style={{
                          backgroundColor: "#00A651",
                          fontSize: "15px",
                          fontWeight: "900",
                          fontFamily: "Rubik, sans-serif"
                        }}
                        onClick={() =>
                          alert("Payment link coming soon. Please contact us for payment options.")
                        }
                      >
                        Payment Link Coming Soon
                      </button>
                    )}

                    <Link
                      to="/contact"
                      className="w-full rounded-full py-3 text-center transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid rgba(0,48,135,0.15)",
                        color: "#003087",
                        fontSize: "14px",
                        fontWeight: "900",
                        fontFamily: "Rubik, sans-serif"
                      }}
                    >
                      Ask About Payment Options
                    </Link>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {[
                    { title: "Secure Checkout", desc: "Payments handled through a trusted provider." },
                    { title: "Instant Confirmation", desc: "Receive confirmation after successful payment." },
                    { title: "Need Help?", desc: "Contact us for receipts or questions." }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border bg-white p-4"
                      style={{ borderColor: "rgba(0,48,135,0.08)" }}
                    >
                      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, color: "#0c121c" }}>
                        {item.title}
                      </div>
                      <div
                        className="mt-1"
                        style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, opacity: 0.75, lineHeight: 1.6 }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIDE PANEL: 8-WEEK BREAKDOWN */}
          <div className="rounded-2xl border bg-[#f8fafc] p-6" style={{ borderColor: "#e5e7eb" }}>
            <h3
              className="mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                fontWeight: "900",
                color: "#003087"
              }}
            >
              8-Week Breakdown
            </h3>

            <div className="space-y-3">
              {weekly.map((w, i) => (
                <div
                  key={i}
                  className="rounded-xl border bg-white px-4 py-3"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <div
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "12px",
                      fontWeight: 900,
                      color: "#00A651",
                      marginBottom: 2
                    }}
                  >
                    {w.week}
                  </div>
                  <div
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#0c121c",
                      opacity: 0.9
                    }}
                  >
                    {w.title}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl p-4 text-white" style={{ backgroundColor: "#003087" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "16px" }}>
                Completion Outcome
              </div>
              <p
                className="mt-2"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "14px",
                  opacity: 0.9,
                  lineHeight: 1.6
                }}
              >
                Students receive a certificate of training and build confidence to pursue sterile processing
                certification pathways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}