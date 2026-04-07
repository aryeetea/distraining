import { useMemo, useEffect, useState } from "react";
import { RequiredCourseMaterials } from "../components/RequiredCourseMaterials";


type Status = "idle" | "sending" | "success" | "error";

export function Apply() {
  const PROGRAM_NAME = "Central Sterile Processing Certificate Program";
  const PAYMENT_LINK = "";
  const ZELLE_RECIPIENT = "DAS Training";
  const ZELLE_SEND_TO = "Dassterile@gmail.com";
  const ZELLE_MEMO = "Student Full Name + Program Name";
  const STORAGE_KEY = "das_apply_form";

  const initialFormData = {
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    hearAboutUs: "",
    highSchoolName: "",
    highSchoolCity: "",
    highSchoolState: "",
    educationStartDate: "",
    educationEndDate: "",
    educationStatus: "",
    dateOfApplication: "",
    message: "",
    paymentPlan: "",
    applicantSignature: "",
    agree: false
  };

  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...initialFormData, ...JSON.parse(saved) } : initialFormData;
    } catch {
      return initialFormData;
    }
  });

  useEffect(() => { document.title = "Apply | DAS Training"; }, []);

  // Auto-save form to localStorage on every change (excluding agree checkbox and signature)
  useEffect(() => {
    const { agree, applicantSignature, ...toSave } = formData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [formData]);

  const isValid = useMemo(() => {
    return (
      formData.fullName.trim().length > 1 &&
      formData.email.trim().length > 3 &&
      formData.phone.trim().length > 6 &&
      formData.streetAddress.trim().length > 2 &&
      formData.city.trim().length > 0 &&
      formData.paymentPlan.trim().length > 0 &&
      formData.applicantSignature.trim().length > 1 &&
      formData.agree === true
    );
  }, [formData]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev: typeof initialFormData) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b8e55adf-0f95-48b5-b9aa-6cc33b0f9fa1",
          subject: "New Application - " + PROGRAM_NAME,
          program: PROGRAM_NAME,
          ...Object.fromEntries(
            Object.entries(formData).map(([k, v]) => [k, String(v)])
          ),
        }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setStatus("success");
      setFormData(initialFormData);
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      setStatus("error");
    }
  }

  function showPaymentPlans() {
    alert(`PAYMENT OPTIONS

Option 1 — One Time Discounted Payment
Pay the full tuition upfront and receive a discounted rate.

Option 2 — Pay As You Go
A minimum down payment is required at registration.
Weekly installment payments are due before the conclusion of class.

Program Cost Breakdown:
• Test Preparation
• Required Books
• Final CRCST Exam

Note: There is a non-refundable registration fee for all cancellations within seven days.`);
  }

  const payOnlineButton = PAYMENT_LINK ? (
    <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer"
      className="w-full rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
      style={{ backgroundColor: "#00A651", fontFamily: "Rubik, sans-serif", fontWeight: 900, fontSize: 15, boxShadow: "0 6px 16px rgba(0, 166, 81, 0.22)" }}>
      Pay Tuition Online
    </a>
  ) : (
    <button type="button"
      className="w-full rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
      style={{ backgroundColor: "#00A651", fontFamily: "Rubik, sans-serif", fontWeight: 900, fontSize: 15, opacity: 0.9 }}
      onClick={() => alert("Online payment link coming soon. Please use Pay with Zelle or View Payment Plans.")}>
      Pay Tuition Online (Coming Soon)
    </button>
  );

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ backgroundColor: "rgba(0, 48, 135, 0.06)", border: "1px solid rgba(0, 48, 135, 0.10)" }}>
            <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 12, fontWeight: 800, letterSpacing: 0.6, color: "#003087" }}>APPLICATION</span>
            <span style={{ opacity: 0.45 }}>•</span>
            <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 12, fontWeight: 700, color: "#0c121c", opacity: 0.75 }}>{PROGRAM_NAME}</span>
          </div>

          <h1 className="mt-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "#003087", lineHeight: 1.05 }}>
            Apply Now
          </h1>

          <p className="mt-3 max-w-[820px]" style={{ fontFamily: "Rubik, sans-serif", fontSize: "clamp(16px, 2vw, 18px)", color: "#0c121c", opacity: 0.75, lineHeight: 1.7 }}>
            Fill out the application below and our team will reach out with next steps.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-md" style={{ borderColor: "rgba(0,48,135,0.10)" }}>
              <div className="h-2" style={{ background: "linear-gradient(90deg, #003087 0%, #00A651 60%, #FF8C42 100%)" }} />

              <div className="p-6 md:p-8">
                <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: 22, color: "#0c121c" }}>Application Form</h2>
                <p className="mt-2" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, opacity: 0.7, lineHeight: 1.7 }}>
                  Please provide accurate contact and education details so we can review your application.
                </p>

                {/* Step Progress Bar */}
                <div className="mt-6 mb-2">
                  <div className="flex items-center gap-0">
                    {[
                      { step: 1, label: "Personal Info" },
                      { step: 2, label: "Education" },
                      { step: 3, label: "Payment & Sign" },
                    ].map((item, i) => (
                      <div key={item.step} className="flex flex-1 items-center">
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                            style={{
                              backgroundColor: "#003087",
                              fontFamily: "Poppins, sans-serif",
                              fontWeight: 800,
                              fontSize: 13
                            }}
                          >
                            {item.step}
                          </div>
                          <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 11, color: "#003087", fontWeight: 600, marginTop: 4, whiteSpace: "nowrap" }}>
                            {item.label}
                          </span>
                        </div>
                        {i < 2 && (
                          <div className="flex-1 h-px mx-1" style={{ backgroundColor: "rgba(0,48,135,0.2)", marginBottom: 18 }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {status === "success" && (
                  <div className="mt-6 rounded-xl border bg-white p-4" style={{ borderColor: "rgba(0,166,81,0.25)" }}>
                    <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.85 }}>✅ Application submitted! We'll contact you soon.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-6 rounded-xl border bg-white p-4" style={{ borderColor: "rgba(255,140,66,0.35)" }}>
                    <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.85 }}>⚠️ Something went wrong. Please try again.</p>
                  </div>
                )}

                <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        Full Name <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input name="fullName" value={formData.fullName} onChange={handleChange} required type="text"
                        placeholder="Das Sterile Training"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 15 }} />
                    </div>

                    <div>
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        Date of Birth <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required type="date"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 15 }} />
                    </div>

                    <div>
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        Email <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input name="email" value={formData.email} onChange={handleChange} required type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 15 }} />
                    </div>

                    <div>
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        Phone <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input name="phone" value={formData.phone} onChange={handleChange} required type="tel"
                        placeholder="(xxx) xxx-xxxx"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 15 }} />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        Street Address <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input name="streetAddress" value={formData.streetAddress} onChange={handleChange} required type="text"
                        placeholder="123 Main Street, Apt 4B"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 15 }} />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <div>
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        City <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input name="city" value={formData.city} onChange={handleChange} required type="text"
                        placeholder="Bronx"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 15 }} />
                    </div>
                    <div>
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        State <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <input name="state" value={formData.state} onChange={handleChange} required type="text"
                        placeholder="NY"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 15 }} />
                    </div>
                    <div>
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        Zip Code
                      </label>
                      <input name="zipCode" value={formData.zipCode} onChange={handleChange} type="text"
                        placeholder="10451"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 15 }} />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: "900", color: "#003087" }}>Level of Education</h3>

                    <div className="mt-4">
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                        Highest Education Level <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <select name="highSchoolName" value={formData.highSchoolName} onChange={handleChange} required
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }}>
                        <option value="">Select level</option>
                        <option value="High School/GED">High School/GED</option>
                        <option value="Some College">Some College</option>
                        <option value="Associate Degree">Associate Degree</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Masters Degree">Master's Degree</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {formData.highSchoolName && (
                      <>
                        <div className="mt-4">
                          <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                            {formData.highSchoolName === "Other" ? "Please specify your level of education" : `School / Institution for ${formData.highSchoolName}`}
                          </label>
                          <input name="highSchoolCity" value={formData.highSchoolCity} onChange={handleChange} type="text"
                            placeholder="Enter school or program name"
                            className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                            style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }} />
                        </div>

                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="mb-1 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>Start Date</label>
                            <div className="mb-1 text-xs" style={{ color: "#FF8C42", fontWeight: 600 }}>mm/dd/yyyy</div>
                            <input name="educationStartDate" value={formData.educationStartDate} onChange={handleChange} type="date"
                              className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                              style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }} />
                          </div>
                          <div>
                            <label className="mb-1 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>End Date</label>
                            <div className="mb-1 text-xs" style={{ color: "#FF8C42", fontWeight: 600 }}>mm/dd/yyyy</div>
                            <input name="educationEndDate" value={formData.educationEndDate} onChange={handleChange} type="date"
                              disabled={formData.educationStatus === "In Progress"}
                              className="w-full rounded-lg border px-3 py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                              style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }} />
                          </div>
                        </div>

                        <div className="mt-4">
                          <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>Education Status</label>
                          <select name="educationStatus" value={formData.educationStatus} onChange={handleChange}
                            className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                            style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }}>
                            <option value="">Select status</option>
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="mt-4">
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>Additional Notes (Optional)</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                        placeholder="Any questions or schedule notes you want us to know."
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 14 }} />
                    </div>

                    <div>
                      <label className="mb-2 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>How did you hear about us?</label>
                      <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange}
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif", fontSize: 14 }}>
                        <option value="">Select an option</option>
                        <option value="Google">Google Search</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Word of Mouth">Word of Mouth</option>
                        <option value="Flyer">Flyer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 15, color: "#003087" }}>
                        PLEASE CHOOSE AND CHECK ONE OF THE BELOW PAYMENT PLANS
                      </p>
                      <p style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, color: "#0c121c", marginTop: 4 }}>
                        I hereby agree to the terms and conditions herein and agree to pay DAS STERILE PROCESSING CENTER the full program tuition by one of the following plans:
                      </p>
                      <div className="mt-2 space-y-2">
                        <label className="flex items-start gap-2">
                          <input type="radio" name="paymentPlan" value="one_time" checked={formData.paymentPlan === "one_time"} onChange={handleChange} className="mt-1" />
                          <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 14 }}>1. ONE TIME DISCOUNTED PAYMENT — Pay the full tuition upfront and receive a discounted rate.</span>
                        </label>
                        <label className="flex items-start gap-2">
                          <input type="radio" name="paymentPlan" value="pay_as_you_go" checked={formData.paymentPlan === "pay_as_you_go"} onChange={handleChange} className="mt-1" />
                          <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 14 }}>2. PAY AS YOU GO — Minimum down payment required at registration, with weekly installment payments due before the conclusion of class.</span>
                        </label>
                      </div>
                      <p className="mt-2" style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, color: "#0c121c" }}>
                        NOTE: there is a non-refundable registration fee for all cancellations from the Test Prep within seven days.
                      </p>
                      <div className="mt-3">
                        <label className="mb-1 block" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, fontWeight: 700, color: "#0c121c" }}>
                          Applicant's Signature <span style={{ color: "#FF8C42" }}>*</span>
                        </label>
                        <input type="text" name="applicantSignature" value={formData.applicantSignature} onChange={handleChange}
                          placeholder="Type your full name to sign"
                          className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                          style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }} />
                        {formData.applicantSignature && (
                          <div className="mt-3 border-b-2 pb-2" style={{ borderColor: "rgba(0,48,135,0.25)" }}>
                            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: 36, color: "#003087", lineHeight: 1.3 }}>
                              {formData.applicantSignature}
                            </p>
                            <p style={{ fontFamily: "Rubik, sans-serif", fontSize: 11, color: "#0c121c", opacity: 0.45, marginTop: 4, letterSpacing: 1 }}>APPLICANT SIGNATURE</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 rounded-xl border px-4 py-4" style={{ borderColor: "rgba(0,0,0,0.12)", backgroundColor: "#f8fafc" }}>
                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="mt-1" />
                    <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, lineHeight: 1.6, color: "#0c121c", opacity: 0.85 }}>
                      I confirm the information provided is accurate and I agree to be contacted by DAS Training regarding my application.{" "}
                      <span style={{ color: "#FF8C42", fontWeight: 800 }}>*</span>
                    </span>
                  </label>

                  <button type="submit" disabled={!isValid || status === "sending"}
                    className="w-full rounded-full py-4 text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#003087", fontFamily: "Rubik, sans-serif", fontWeight: 900, fontSize: 16, boxShadow: "0 6px 16px rgba(0, 48, 135, 0.18)" }}>
                    {status === "sending" ? "Submitting..." : "Submit Application"}
                  </button>

                  <p style={{ fontFamily: "Rubik, sans-serif", fontSize: 12, opacity: 0.6 }}>
                    Please don't include sensitive personal health information.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border bg-[#f8fafc] p-6" style={{ borderColor: "rgba(0,48,135,0.10)" }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 900, color: "#003087" }}>Class Schedule</h3>
              <ul className="mt-3" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, lineHeight: 1.8, color: "#0c121c" }}>
                <li><strong>Tuesdays:</strong> Virtual — 5:00 PM to 7:00 PM</li>
                <li><strong>Thursdays:</strong> Virtual — 5:00 PM to 7:00 PM</li>
                <li><strong>Saturdays:</strong> In-person — 10:00 AM to 4:00 PM</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(0,48,135,0.10)" }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 900, color: "#003087" }}>Payment Options</h3>
              <p className="mt-2" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, lineHeight: 1.7, color: "#0c121c", opacity: 0.8 }}>
                A down payment is required at registration. Weekly installment payments are due throughout the program. Full payment must be completed before the end of the program to take the final DAS Sterile Certification exam.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {payOnlineButton}
              </div>

              <div className="mt-4 rounded-xl p-4" style={{ background: "linear-gradient(135deg, rgba(0,48,135,0.06) 0%, rgba(0,166,81,0.06) 100%)", border: "1px solid rgba(0,48,135,0.12)" }}>
                <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#003087", letterSpacing: 0.5 }}>PAY WITH ZELLE</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, fontWeight: 700, color: "#0c121c", opacity: 0.6, minWidth: 70 }}>Recipient</span>
                    <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, color: "#0c121c" }}>{ZELLE_RECIPIENT}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, fontWeight: 700, color: "#0c121c", opacity: 0.6, minWidth: 70 }}>Send to</span>
                    <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, color: "#003087", fontWeight: 700 }}>{ZELLE_SEND_TO}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, fontWeight: 700, color: "#0c121c", opacity: 0.6, minWidth: 70 }}>Memo</span>
                    <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, color: "#0c121c", opacity: 0.8, fontStyle: "italic" }}>{ZELLE_MEMO}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center" style={{ fontFamily: "Rubik, sans-serif", opacity: 0.6, fontSize: 12 }}>
          By submitting this application, you agree to be contacted about admissions and program details.
        </div>

        <RequiredCourseMaterials />
      </div>
    </div>
  );
}