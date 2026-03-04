export function Events() {
  const events = [
    {
      title: "Enrollment & Intake (Ongoing)",
      badge: "Always Available",
      description:
        "Online enrollment is available anytime. In-person enrollment and onboarding are scheduled regularly based on class readiness.",
      color: "#FF8C42"
    },
    {
      title: "Tuition, Orientation & Payment Options",
      badge: "Flexible",
      description:
        "Tuition can be started once your application is submitted and reviewed. We offer online payment (when available) and Zelle options for convenience.",
      color: "#003087"
    },
    {
      title: "Next Cohort Registration + Final Exam Planning",
      badge: "Rolling",
      description:
        "Registration for the next batch begins as current students prepare to complete the program. Final review and exam scheduling are organized in advance.",
      color: "#00A651"
    }
  ];

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h1
          className="mb-4 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "800",
            color: "#003087"
          }}
        >
          Events & Updates
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
          Rolling updates so you won’t need constant date changes — everything stays relevant year-round.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{ border: "1px solid rgba(0, 48, 135, 0.08)" }}
            >
              <div className="h-2" style={{ backgroundColor: event.color }} />

              <div className="p-6">
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-white"
                  style={{
                    backgroundColor: event.color,
                    fontSize: "13px",
                    fontWeight: "700",
                    fontFamily: "Rubik, sans-serif"
                  }}
                >
                  {event.badge}
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "#0c121c"
                  }}
                >
                  {event.title}
                </h3>

                <p
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#0c121c",
                    opacity: "0.82"
                  }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl bg-white p-6 text-center shadow-md"
          style={{ border: "1px solid rgba(0, 48, 135, 0.08)" }}
        >
          <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.75, color: "#0c121c" }}>
            Want the latest intake details? Contact us and we’ll guide you based on your availability.
          </p>
        </div>
      </div>
    </div>
  );
}