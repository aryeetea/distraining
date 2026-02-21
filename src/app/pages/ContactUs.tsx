import { useState } from "react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-us",
          ...formData
        })
      });

      setStatus("success");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#ffffff" }}>
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
          Contact Us
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
          Get in touch with our team - we're here to help
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl bg-gradient-to-br from-[#003087] to-[#0047b3] p-8 text-white md:p-10">
            <h2
              className="mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "28px",
                fontWeight: "700"
              }}
            >
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-white/20 p-3">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: "600" }}>
                    Address
                  </h3>
                  <p style={{ fontFamily: "Rubik, sans-serif", fontSize: "15px", lineHeight: "1.6", opacity: "0.9" }}>
                    860 MELROSE AVENUE<br />
                    Bronx NY, 10451
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-white/20 p-3">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: "600" }}>
                    Phone
                  </h3>
                  <p style={{ fontFamily: "Rubik, sans-serif", fontSize: "15px", opacity: "0.9" }}>
                    614-815-8070 or 929-922-0726
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-white/20 p-3">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: "600" }}>
                    Email
                  </h3>
                  <p style={{ fontFamily: "Rubik, sans-serif", fontSize: "15px", opacity: "0.9" }}>
                    Dassterile@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-white/20 p-3">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: "600" }}>
                    Office Hours
                  </h3>
                  <p style={{ fontFamily: "Rubik, sans-serif", fontSize: "15px", lineHeight: "1.6", opacity: "0.9" }}>
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-[#f8fafc] p-8 md:p-10">
            <h2
              className="mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "28px",
                fontWeight: "700",
                color: "#0c121c"
              }}
            >
              Send Us a Message
            </h2>

            <p
              className="mb-6"
              style={{
                fontFamily: "Rubik, sans-serif",
                color: "#0c121c",
                opacity: 0.7
              }}
            >
              We typically respond within 24–48 hours.
            </p>

            {status === "success" && (
              <div className="mb-6 rounded-xl border bg-white p-4" style={{ borderColor: "rgba(0,166,81,0.25)" }}>
                <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.85 }}>
                  ✅ Message sent! We’ll get back to you soon.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 rounded-xl border bg-white p-4" style={{ borderColor: "rgba(255,140,66,0.35)" }}>
                <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.85 }}>
                  ⚠️ Something went wrong. Please try again.
                </p>
              </div>
            )}

            <form
              name="contact-us"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact-us" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: "14px", fontWeight: "600", color: "#0c121c" }}>
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-[#003087] focus:outline-none"
                  placeholder="John Doe"
                  style={{ fontFamily: "Rubik, sans-serif", fontSize: "15px" }}
                />
              </div>

              <div>
                <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: "14px", fontWeight: "600", color: "#0c121c" }}>
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-[#003087] focus:outline-none"
                  placeholder="john@example.com"
                  style={{ fontFamily: "Rubik, sans-serif", fontSize: "15px" }}
                />
              </div>

              <div>
                <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: "14px", fontWeight: "600", color: "#0c121c" }}>
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-[#003087] focus:outline-none"
                  placeholder="How can we help?"
                  style={{ fontFamily: "Rubik, sans-serif", fontSize: "15px" }}
                />
              </div>

              <div>
                <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: "14px", fontWeight: "600", color: "#0c121c" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-[#003087] focus:outline-none"
                  placeholder="Tell us more about your inquiry..."
                  style={{ fontFamily: "Rubik, sans-serif", fontSize: "15px" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full py-4 text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{
                  backgroundColor: "#00A651",
                  fontSize: "16px",
                  fontWeight: "800",
                  fontFamily: "Rubik, sans-serif",
                  boxShadow: "0 4px 12px rgba(0, 166, 81, 0.3)"
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <p style={{ fontFamily: "Rubik, sans-serif", fontSize: 12, opacity: 0.6, marginTop: 6 }}>
                Please don’t include sensitive personal health information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}