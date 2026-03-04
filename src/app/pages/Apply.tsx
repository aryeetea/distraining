// src/pages/Apply.tsx
import { useMemo, useState } from "react";
import { Link } from "react-router";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

type Status = "idle" | "sending" | "success" | "error";

export function Apply() {
  // ✅ Update these if needed
  const PROGRAM_NAME = "Sterile Processing Fundamentals (8 Weeks)";

  // ✅ When your client gives you a payment link, paste it here.
  // Example: "https://buy.stripe.com/xxxx" or "https://square.link/u/xxxx"
  const PAYMENT_LINK = ""; // leave empty for now

  // ✅ Zelle details (edit these)
  const ZELLE_RECIPIENT = "DAS Training";
  const ZELLE_SEND_TO = "Dassterile@gmail.com"; // email or phone used for Zelle
  const ZELLE_MEMO = "Student Full Name + Program Name";

  // Form state
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityState: "",
    preferredSchedule: "Hybrid (2 online + 1 weekend in-person)",
    startTiming: "As soon as possible",
    experience: "No experience",
    heardFrom: "",
    message: "",
    agree: false
  });

  const isValid = useMemo(() => {
    return (
      formData.fullName.trim().length > 1 &&
      formData.email.trim().length > 3 &&
      formData.phone.trim().length > 6 &&
      formData.cityState.trim().length > 2 &&
      formData.agree === true
    );
  }, [formData]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "apply",
          program: PROGRAM_NAME,
          ...Object.fromEntries(
            Object.entries(formData).map(([k, v]) => [k, String(v)])
          )
        })
      });

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        cityState: "",
        preferredSchedule: "Hybrid (2 online + 1 weekend in-person)",
        startTiming: "As soon as possible",
        experience: "No experience",
        heardFrom: "",
        message: "",
        agree: false
      });
    } catch (err) {
      setStatus("error");
    }
  }

  const payOnlineButton = PAYMENT_LINK ? (
    <a
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
      style={{
        backgroundColor: "#00A651",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 900,
        fontSize: 15,
        boxShadow: "0 6px 16px rgba(0, 166, 81, 0.22)"
      }}
    >
      Pay Tuition Online
    </a>
  ) : (
    <button
      type="button"
      className="w-full sm:w-auto rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
      style={{
        backgroundColor: "#00A651",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 900,
        fontSize: 15,
        opacity: 0.85
      }}
      onClick={() =>
        alert(
          "Online payment link coming soon. Please pay via Zelle or contact us for payment options."
        )
      }
    >
      Pay Tuition Online (Coming Soon)
    </button>
  );

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        {/* Top header */}
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              backgroundColor: "rgba(0, 48, 135, 0.06)",
              border: "1px solid rgba(0, 48, 135, 0.10)"
            }}
          >
            <span
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 0.6,
                color: "#003087"
              }}
            >
              APPLICATION
            </span>
            <span style={{ opacity: 0.45 }}>•</span>
            <span
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: "#0c121c",
                opacity: 0.75
              }}
            >
              {PROGRAM_NAME}
            </span>
          </div>

          <h1
            className="mt-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 900,
              color: "#003087",
              lineHeight: 1.05
            }}
          >
            Apply Now
          </h1>

          <p
            className="mt-3 max-w-[820px]"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "#0c121c",
              opacity: 0.75,
              lineHeight: 1.7
            }}
          >
            Fill out the application below and our team will reach out with next steps.
            No start-date restrictions — we’ll coordinate with you.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT: Form */}
          <div className="lg:col-span-2">
            <div
              className="overflow-hidden rounded-2xl border bg-white shadow-md"
              style={{ borderColor: "rgba(0,48,135,0.10)" }}
            >
              {/* Accent bar */}
              <div
                className="h-2"
                style={{
                  background: "linear-gradient(90deg, #003087 0%, #00A651 60%, #FF8C42 100%)"
                }}
              />

              <div className="p-6 md:p-8">
                <h2
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 900,
                    fontSize: 22,
                    color: "#0c121c"
                  }}
                >
                  Application Form
                </h2>

                <p
                  className="mt-2"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: 14,
                    opacity: 0.7,
                    lineHeight: 1.7
                  }}
                >
                  Please provide accurate contact details so we can follow up.
                </p>

                {/* Status banners */}
                {status === "success" && (
                  <div
                    className="mt-6 rounded-xl border bg-white p-4"
                    style={{ borderColor: "rgba(0,166,81,0.25)" }}
                  >
                    <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.85 }}>
                      ✅ Application submitted! We’ll contact you soon.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div
                    className="mt-6 rounded-xl border bg-white p-4"
                    style={{ borderColor: "rgba(255,140,66,0.35)" }}
                  >
                    <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.85 }}>
                      ⚠️ Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                <form
                  className="mt-6 space-y-5"
                  name="apply"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* Netlify required */}
                  <input type="hidden" name="form-name" value="apply" />
                  <input type="hidden" name="program" value={PROGRAM_NAME} />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  {/* Grid fields */}
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        className="mb-2 block"
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0c121c"
                        }}
                      >
                        Full Name <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Your full name"
                        className="w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#003087")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="mb-2 block"
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0c121c"
                        }}
                      >
                        Email <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#003087")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        className="mb-2 block"
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0c121c"
                        }}
                      >
                        Phone <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        placeholder="(xxx) xxx-xxxx"
                        className="w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#003087")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                      />
                    </div>

                    {/* City/State */}
                    <div>
                      <label
                        className="mb-2 block"
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0c121c"
                        }}
                      >
                        City, State <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input
                        name="cityState"
                        value={formData.cityState}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Bronx, NY"
                        className="w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#003087")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                      />
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Schedule */}
                    <div>
                      <label
                        className="mb-2 block"
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0c121c"
                        }}
                      >
                        Preferred Schedule
                      </label>
                      <select
                        name="preferredSchedule"
                        value={formData.preferredSchedule}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15,
                          backgroundColor: "#ffffff"
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#003087")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                      >
                        <option>Hybrid (2 online + 1 weekend in-person)</option>
                        <option>Mostly Online (theory online + scheduled in-person)</option>
                        <option>Weekend Focus (as available)</option>
                      </select>
                    </div>

                    {/* Start timing */}
                    <div>
                      <label
                        className="mb-2 block"
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0c121c"
                        }}
                      >
                        When would you like to start?
                      </label>
                      <select
                        name="startTiming"
                        value={formData.startTiming}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15,
                          backgroundColor: "#ffffff"
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#003087")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                      >
                        <option>As soon as possible</option>
                        <option>Within 1 month</option>
                        <option>Within 2–3 months</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label
                      className="mb-2 block"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#0c121c"
                      }}
                    >
                      Do you have sterile processing experience?
                    </label>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {["No experience", "Some experience", "Working in the field"].map((opt) => {
                        const active = formData.experience === opt;
                        return (
                          <label
                            key={opt}
                            className="flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors"
                            style={{
                              borderColor: active ? "rgba(0,48,135,0.35)" : "rgba(0,0,0,0.12)",
                              backgroundColor: active ? "rgba(0,48,135,0.06)" : "#ffffff"
                            }}
                          >
                            <input
                              type="radio"
                              name="experience"
                              value={opt}
                              checked={formData.experience === opt}
                              onChange={handleChange}
                            />
                            <span
                              style={{
                                fontFamily: "Rubik, sans-serif",
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#0c121c",
                                opacity: 0.85
                              }}
                            >
                              {opt}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Heard from */}
                  <div>
                    <label
                      className="mb-2 block"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#0c121c"
                      }}
                    >
                      How did you hear about us? (optional)
                    </label>
                    <input
                      name="heardFrom"
                      value={formData.heardFrom}
                      onChange={handleChange}
                      type="text"
                      placeholder="Google, Instagram, Friend, etc."
                      className="w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                      style={{
                        borderColor: "rgba(0,0,0,0.15)",
                        fontFamily: "Rubik, sans-serif",
                        fontSize: 15
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#003087")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="mb-2 block"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#0c121c"
                      }}
                    >
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us anything we should know (availability, questions, etc.)"
                      className="w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                      style={{
                        borderColor: "rgba(0,0,0,0.15)",
                        fontFamily: "Rubik, sans-serif",
                        fontSize: 15,
                        lineHeight: 1.7
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#003087")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                    />
                  </div>

                  {/* Agreement */}
                  <label
                    className="flex items-start gap-3 rounded-xl border px-4 py-4"
                    style={{
                      borderColor: "rgba(0,0,0,0.12)",
                      backgroundColor: "#f8fafc"
                    }}
                  >
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "#0c121c",
                        opacity: 0.85
                      }}
                    >
                      I confirm the information provided is accurate and I agree to be contacted by DAS Training
                      regarding my application. <span style={{ color: "#FF8C42", fontWeight: 800 }}>*</span>
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!isValid || status === "sending"}
                    className="w-full rounded-full py-4 text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{
                      backgroundColor: "#003087",
                      fontFamily: "Rubik, sans-serif",
                      fontWeight: 900,
                      fontSize: 16,
                      boxShadow: "0 6px 16px rgba(0, 48, 135, 0.18)"
                    }}
                  >
                    {status === "sending" ? "Submitting..." : "Submit Application"}
                  </button>

                  <p style={{ fontFamily: "Rubik, sans-serif", fontSize: 12, opacity: 0.6 }}>
                    Please don’t include sensitive personal health information.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky info + pay */}
          <div className="space-y-6">
            {/* Quick info */}
            <div
              className="rounded-2xl border bg-[#f8fafc] p-6"
              style={{ borderColor: "rgba(0,48,135,0.10)" }}
            >
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 18,
                  fontWeight: 900,
                  color: "#003087",
                  marginBottom: 10
                }}
              >
                What happens next?
              </h3>

              <div className="space-y-3">
                {[
                  { t: "We review your application", d: "A team member checks your info and availability." },
                  { t: "We contact you", d: "We’ll call or email to confirm details and answer questions." },
                  { t: "You can pay tuition", d: "Pay online (if available) or via Zelle." }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border bg-white p-4"
                    style={{ borderColor: "rgba(0,48,135,0.08)" }}
                  >
                    <div
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 900,
                        color: "#0c121c"
                      }}
                    >
                      {item.t}
                    </div>
                    <div
                      className="mt-1"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: 13,
                        opacity: 0.75,
                        lineHeight: 1.6
                      }}
                    >
                      {item.d}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  to="/courses"
                  className="inline-block rounded-full px-6 py-3 transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#FF8C42",
                    color: "#ffffff",
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 900,
                    fontSize: 14,
                    boxShadow: "0 6px 16px rgba(255, 140, 66, 0.18)"
                  }}
                >
                  View Course Details
                </Link>
              </div>
            </div>

            {/* Pay Tuition section */}
            <div
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: "rgba(0,48,135,0.10)" }}
            >
              <div
                className="-mx-6 -mt-6 mb-6 h-2 rounded-t-2xl"
                style={{
                  background: "linear-gradient(90deg, #003087 0%, #00A651 55%, #FF8C42 100%)"
                }}
              />

              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 900,
                  fontSize: 22,
                  color: "#0c121c"
                }}
              >
                Pay Tuition
              </h3>

              <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.75, lineHeight: 1.7, marginTop: 8 }}>
                You can pay online (if available) or pay using Zelle. If you have questions, contact us.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {payOnlineButton}

                <button
                  type="button"
                  className="w-full rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#003087",
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 900,
                    fontSize: 15,
                    boxShadow: "0 6px 16px rgba(0, 48, 135, 0.18)"
                  }}
                  onClick={() =>
                    alert(
                      `Zelle Payment Details:\n\nRecipient: ${ZELLE_RECIPIENT}\nZelle: ${ZELLE_SEND_TO}\nMemo: ${ZELLE_MEMO}`
                    )
                  }
                >
                  Pay with Zelle
                </button>

                <Link
                  to="/contact"
                  className="w-full rounded-full px-8 py-3 text-center transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,48,135,0.18)",
                    color: "#003087",
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 900,
                    fontSize: 15
                  }}
                >
                  Ask About Payment Options
                </Link>
              </div>

              <div
                className="mt-5 rounded-xl border p-5"
                style={{
                  borderColor: "rgba(0,48,135,0.10)",
                  backgroundColor: "#f8fafc"
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 900,
                    color: "#003087",
                    fontSize: 18
                  }}
                >
                  Zelle Details
                </div>

                <div className="mt-3 space-y-2" style={{ fontFamily: "Rubik, sans-serif", opacity: 0.85 }}>
                  <div>
                    <b>Recipient:</b> {ZELLE_RECIPIENT}
                  </div>
                  <div>
                    <b>Zelle:</b> {ZELLE_SEND_TO}
                  </div>
                  <div style={{ opacity: 0.75 }}>
                    <b>Memo:</b> {ZELLE_MEMO}
                  </div>
                </div>

                <p className="mt-3" style={{ fontFamily: "Rubik, sans-serif", fontSize: 12, opacity: 0.6 }}>
                  Please do not include sensitive personal health information in payment notes.
                </p>
              </div>
            </div>

            {/* Contact card */}
            <div
              className="rounded-2xl border bg-[#003087] p-6 text-white"
              style={{ borderColor: "rgba(0,48,135,0.10)" }}
            >
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: 18 }}>
                Need help right away?
              </div>
              <p className="mt-2" style={{ fontFamily: "Rubik, sans-serif", opacity: 0.9, lineHeight: 1.7 }}>
                Call <b>614-815-8070</b> or <b>929-922-0726</b>, or email <b>Dassterile@gmail.com</b>.
              </p>

              <Link
                to="/contact"
                className="mt-4 inline-block rounded-full px-6 py-3 text-center transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#00A651",
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: 900,
                  fontSize: 14,
                  boxShadow: "0 6px 16px rgba(0, 166, 81, 0.22)"
                }}
              >
                Go to Contact Page
              </Link>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center" style={{ fontFamily: "Rubik, sans-serif", opacity: 0.6, fontSize: 12 }}>
          By submitting this application, you agree to be contacted about admissions and program details.
        </div>
      </div>
    </div>
  );
}