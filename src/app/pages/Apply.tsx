import { useMemo, useState } from "react";
import { RequiredCourseMaterials } from "../components/RequiredCourseMaterials";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

type Status = "idle" | "sending" | "success" | "error";

export function Apply() {
  const PROGRAM_NAME = "Central Sterile Processing Certificate Program";
  const PAYMENT_LINK = "";
  const ZELLE_RECIPIENT = "DAS Training";
  const ZELLE_SEND_TO = "Dassterile@gmail.com";
  const ZELLE_MEMO = "Student Full Name + Program Name";

  const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    cityState: "",
    highSchoolName: "",
    highSchoolCity: "",
    highSchoolState: "",
    educationStartDate: "",
    educationEndDate: "",
    educationStatus: "",
    dateOfApplication: "",
    message: "",
    agree: false
  };

  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState(initialFormData);

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
      const res = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "apply",
          program: PROGRAM_NAME,
          ...Object.fromEntries(Object.entries(formData).map(([k, v]) => [k, String(v)]))
        })
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
    }
  }

  function showPaymentPlans() {
    alert(`PAYMENT OPTIONS

One Time Discounted Payment:
$2,450.00

Pay As You Go:
$2,500.00
Minimum $1,000.00 down payment
Weekly installment payments of $250.00

Program Cost Breakdown:
Test Preparation: $2,200.00
Books: $150.00
Final CRCST Exam: $150.00

Total Cost: $2,500.00

Note:
The total cost includes the CRCST certification exam fee of $125.00.
There is a non-refundable registration fee for cancellations within seven days.`);
  }

  const payOnlineButton = PAYMENT_LINK ? (
    <a
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
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
      className="w-full rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
      style={{
        backgroundColor: "#00A651",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 900,
        fontSize: 15,
        opacity: 0.9
      }}
      onClick={() =>
        alert(
          "Online payment link coming soon. Please use Pay with Zelle or View Payment Plans."
        )
      }
    >
      Pay Tuition Online (Coming Soon)
    </button>
  );

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
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
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div
              className="overflow-hidden rounded-2xl border bg-white shadow-md"
              style={{ borderColor: "rgba(0,48,135,0.10)" }}
            >
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
                  Please provide accurate contact and education details so we can review your
                  application.
                </p>

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
                  action="/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <input type="hidden" name="form-name" value="apply" />
                  <input type="hidden" name="program" value={PROGRAM_NAME} />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid gap-5 md:grid-cols-2">
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
                        placeholder="Naa Ayele Aryeetey"
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15
                        }}
                      />
                    </div>

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
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15
                        }}
                      />
                    </div>

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
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15
                        }}
                      />
                    </div>

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
                        className="w-full rounded-lg border px-4 py-3 focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 15
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "20px",
                        fontWeight: "900",
                        color: "#003087"
                      }}
                    >
                      Level of Education
                    </h3>

                    <div className="mt-4">
                      <label
                        className="mb-2 block"
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0c121c"
                        }}
                      >
                        Highest Education Level <span style={{ color: "#FF8C42" }}>*</span>
                      </label>
                      <select
                        name="highSchoolName"
                        value={formData.highSchoolName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                        style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }}
                      >
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
                          <label
                            className="mb-2 block"
                            style={{
                              fontFamily: "Rubik, sans-serif",
                              fontSize: 14,
                              fontWeight: 700,
                              color: "#0c121c"
                            }}
                          >
                            {formData.highSchoolName === "Other"
                              ? "Please specify your level of education"
                              : `School / Institution for ${formData.highSchoolName}`}
                          </label>
                          <input
                            name="highSchoolCity"
                            value={formData.highSchoolCity}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter school or program name"
                            className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                            style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }}
                          />
                        </div>

                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                          <div>
                            <label
                              className="mb-1 block"
                              style={{
                                fontFamily: "Rubik, sans-serif",
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#0c121c"
                              }}
                            >
                              Start Date
                            </label>
                            <div className="mb-1 text-xs" style={{ color: "#FF8C42", fontWeight: 600 }}>mm/dd/yyyy</div>
                            <input
                              name="educationStartDate"
                              value={formData.educationStartDate}
                              onChange={handleChange}
                              type="date"
                              className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                              style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }}
                            />
                          </div>
                          <div>
                            <label
                              className="mb-1 block"
                              style={{
                                fontFamily: "Rubik, sans-serif",
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#0c121c"
                              }}
                            >
                              End Date
                            </label>
                            <div className="mb-1 text-xs" style={{ color: "#FF8C42", fontWeight: 600 }}>mm/dd/yyyy</div>
                            <input
                              name="educationEndDate"
                              value={formData.educationEndDate}
                              onChange={handleChange}
                              type="date"
                              disabled={formData.educationStatus === "In Progress"}
                              className="w-full rounded-lg border px-3 py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                              style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }}
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <label
                            className="mb-2 block"
                            style={{
                              fontFamily: "Rubik, sans-serif",
                              fontSize: 14,
                              fontWeight: 700,
                              color: "#0c121c"
                            }}
                          >
                            Education Status
                          </label>
                          <select
                            name="educationStatus"
                            value={formData.educationStatus}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                            style={{ borderColor: "rgba(0,0,0,0.15)", fontFamily: "Rubik, sans-serif" }}
                          >
                            <option value="">Select status</option>
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="mt-4">
                      <label
                        className="mb-2 block"
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0c121c"
                        }}
                      >
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any questions or schedule notes you want us to know."
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none"
                        style={{
                          borderColor: "rgba(0,0,0,0.15)",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14
                        }}
                      />
                    </div>
                  </div>

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
                      I confirm the information provided is accurate and I agree to be contacted by
                      DAS Training regarding my application.{" "}
                      <span style={{ color: "#FF8C42", fontWeight: 800 }}>*</span>
                    </span>
                  </label>

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

                  <p
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: 12,
                      opacity: 0.6
                    }}
                  >
                    Please don’t include sensitive personal health information.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-2xl border bg-[#f8fafc] p-6"
              style={{ borderColor: "rgba(0,48,135,0.10)" }}
            >
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 18,
                  fontWeight: 900,
                  color: "#003087"
                }}
              >
                Class Schedule
              </h3>

              <ul
                className="mt-3"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#0c121c"
                }}
              >
                <li>
                  <strong>Tuesdays:</strong> Virtual — 5:00 PM to 7:00 PM
                </li>
                <li>
                  <strong>Thursdays:</strong> Virtual — 5:00 PM to 7:00 PM
                </li>
                <li>
                  <strong>Saturdays:</strong> In-person — 10:00 AM to 4:00 PM
                </li>
              </ul>
            </div>

            <div
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: "rgba(0,48,135,0.10)" }}
            >
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 18,
                  fontWeight: 900,
                  color: "#003087"
                }}
              >
                Payment Options
              </h3>

              <p
                className="mt-2"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#0c121c",
                  opacity: 0.8
                }}
              >
                Registration is $1,000. Weekly payments are $250 for six weeks. Full payment must
                be completed before the end of the eight-week program to take the final DAS Sterile
                Certification Test.
              </p>

              <div className="mt-4 flex flex-col gap-3">
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
                      `Pay with Zelle:\n\nRecipient: ${ZELLE_RECIPIENT}\nSend to: ${ZELLE_SEND_TO}\nMemo: ${ZELLE_MEMO}`
                    )
                  }
                >
                  Pay with Zelle
                </button>

                <button
                  type="button"
                  className="w-full rounded-full px-8 py-3 text-center transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgba(0,48,135,0.18)",
                    color: "#003087",
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 900,
                    fontSize: 15
                  }}
                  onClick={showPaymentPlans}
                >
                  View Payment Plans
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 text-center"
          style={{
            fontFamily: "Rubik, sans-serif",
            opacity: 0.6,
            fontSize: 12
          }}
        >
          By submitting this application, you agree to be contacted about admissions and program
          details.
        </div>

        <RequiredCourseMaterials />
      </div>
    </div>
  );
}