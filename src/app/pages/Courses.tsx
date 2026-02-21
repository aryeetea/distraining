export function Courses() {
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
    { label: "Duration", value: "8 weeks" },
    { label: "Level", value: "Standard" },
    { label: "Outcome", value: "Certificate of training + readiness for certification pathways" }
  ];

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
                      fontWeight: 600,
                      color: "#0c121c"
                    }}
                  >
                    {h.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
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
                  fontWeight: "700",
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
              <a
                href="/contact"
                className="w-full rounded-full py-3 text-center text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
                style={{
                  backgroundColor: course.color,
                  fontSize: "15px",
                  fontWeight: "700",
                  fontFamily: "Rubik, sans-serif"
                }}
              >
                Enroll / Request Info
              </a>

              <a
                href="/contact"
                className="w-full rounded-full py-3 text-center sm:w-auto sm:px-10"
                style={{
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                  color: "#003087",
                  fontSize: "15px",
                  fontWeight: "700",
                  fontFamily: "Rubik, sans-serif"
                }}
              >
                Ask a Question
              </a>
            </div>
          </div>

          {/* SIDE PANEL: 8-WEEK BREAKDOWN */}
          <div className="rounded-2xl border bg-[#f8fafc] p-6" style={{ borderColor: "#e5e7eb" }}>
            <h3
              className="mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                fontWeight: "800",
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
                      fontWeight: 700,
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
                      fontWeight: 600,
                      color: "#0c121c",
                      opacity: 0.9
                    }}
                  >
                    {w.title}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-xl p-4 text-white"
              style={{ backgroundColor: "#003087" }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "16px"
                }}
              >
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
                Students receive a certificate of training and build confidence to
                pursue sterile processing certification pathways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}