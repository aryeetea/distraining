import { useState } from "react";
import { useNavigate } from "react-router";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export function Apply() {
  const navigate = useNavigate();

  // ✅ Paste your client's Stripe/Square payment link here later
  // Example: "https://buy.stripe.com/xxxx" or "https://square.link/u/xxxx"
  const PAYMENT_LINK = "";

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "apply",
          ...formData
        })
      });

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zipCode: ""
      });

      // Optional: redirect after a short moment
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4"
      style={{
        background: "linear-gradient(135deg, #003087 0%, #0047b3 100%)"
      }}
    >
      <div className="w-full max-w-[600px]">
        {/* Form Card */}
        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl">
          <h1
            className="mb-3 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(28px, 5vw, 36px)",
              fontWeight: "800",
              color: "#003087"
            }}
          >
            Now Enrolling!
          </h1>

          <p
            className="mb-6 text-center"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "18px",
              color: "#0c121c"
            }}
          >
            Next Start:{" "}
            <span style={{ color: "#FF8C42", fontWeight: "600" }}>
              March 2nd
            </span>
          </p>

          {/* Status Messages */}
          {status === "success" && (
            <div
              className="mb-6 rounded-xl border bg-[#f8fafc] p-4"
              style={{ borderColor: "rgba(0,166,81,0.25)" }}
            >
              <p
                style={{
                  fontFamily: "Rubik, sans-serif",
                  color: "#0c121c",
                  opacity: 0.85
                }}
              >
                ✅ Application submitted! We’ll contact you soon.
              </p>
            </div>
          )}

          {status === "error" && (
            <div
              className="mb-6 rounded-xl border bg-[#f8fafc] p-4"
              style={{ borderColor: "rgba(255,140,66,0.35)" }}
            >
              <p
                style={{
                  fontFamily: "Rubik, sans-serif",
                  color: "#0c121c",
                  opacity: 0.85
                }}
              >
                ⚠️ Something went wrong. Please try again.
              </p>
            </div>
          )}

          {/* Netlify Form */}
          <form
            name="apply"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Required Netlify fields */}
            <input type="hidden" name="form-name" value="apply" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* First and Last Name Row */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3.5 transition-all focus:border-[#003087] focus:outline-none"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "15px"
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3.5 transition-all focus:border-[#003087] focus:outline-none"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "15px"
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3.5 transition-all focus:border-[#003087] focus:outline-none"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "15px"
                }}
              />
            </div>

            {/* Phone and ZIP Code Row */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3.5 transition-all focus:border-[#003087] focus:outline-none"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "15px"
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP Code"
                  required
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3.5 transition-all focus:border-[#003087] focus:outline-none"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "15px"
                  }}
                />
              </div>
            </div>

            {/* Consent Text */}
            <p
              className="text-center"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "12px",
                lineHeight: "1.6",
                color: "#0c121c",
                opacity: "0.7"
              }}
            >
              By submitting this form, I consent to DAS Sterile Processing
              Training Centre contacting me by phone for marketing messages
              (including mobile and manual/autodialed means) and email using the
              information I have provided. I understand that my consent is not a
              condition of enrollment.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full py-4 text-white transition-all hover:opacity-90 hover:shadow-xl disabled:opacity-60"
              style={{
                backgroundColor: "#FF8C42",
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "Poppins, sans-serif",
                boxShadow: "0 4px 16px rgba(255, 140, 66, 0.4)"
              }}
            >
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </button>

            <p
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: 12,
                opacity: 0.6,
                marginTop: 6,
                textAlign: "center"
              }}
            >
              Please don’t include sensitive personal health information.
            </p>

            {/* ✅ NEW: Pay Tuition Online */}
            <div className="mt-4">
              {PAYMENT_LINK ? (
                <a
                  href={PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full py-4 text-center text-white transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#00A651",
                    fontSize: "16px",
                    fontWeight: "800",
                    fontFamily: "Poppins, sans-serif",
                    boxShadow: "0 4px 12px rgba(0, 166, 81, 0.3)"
                  }}
                >
                  Pay Tuition Online
                </a>
              ) : (
                <button
                  type="button"
                  className="w-full rounded-full py-4 text-white opacity-80"
                  style={{
                    backgroundColor: "#00A651",
                    fontSize: "16px",
                    fontWeight: "800",
                    fontFamily: "Poppins, sans-serif"
                  }}
                  onClick={() =>
                    alert(
                      "Online payment link coming soon. Please contact us for payment options."
                    )
                  }
                >
                  Pay Tuition Online (Coming Soon)
                </button>
              )}

              <p
                className="mt-2 text-center"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: 12,
                  opacity: 0.65,
                  lineHeight: 1.6,
                  color: "#0c121c"
                }}
              >
                After you apply, you can complete your tuition payment online. If you need help, please contact us.
              </p>
            </div>
          </form>
        </div>

        {/* Back Link */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full text-center text-white transition-opacity hover:opacity-80"
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
            fontWeight: "500"
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}