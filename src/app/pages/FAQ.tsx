import { useState } from "react";
import { Link } from "react-router";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "Applicants must have a minimum of a high school diploma or equivalent, be at least 18 years old, and be ready and willing to dedicate eight weeks of their time to fully participate in the program."
    },
    {
      question: "How long does the program take to complete?",
      answer:
        "Our Sterile Processing program is 8 weeks long. Classes are held three times a week. Two during the week (online) and one during the weekend to accommodate working students."
    },
    {
      question: "What certification will I receive?",
      answer:
        "Upon completion, you will be prepared to sit for the CRCST exam. Our program supports certification pathway readiness."
    },
    {
      question: "Do you offer job placement assistance?",
      answer:
        "We provide internship placements, career counseling, resume assistance, and internship preparation workshops to support graduates as they transition into the workforce."
    },
    {
      question: "Can I take classes online?",
      answer:
        "We offer a hybrid model with online coursework and hands-on sessions completed in person."
    },
    {
      question: "What are the career prospects after graduation?",
      answer:
        "Sterile processing technicians are in high demand nationwide. Graduates typically find employment in hospitals and clinics with competitive salaries."
    }
  ];

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[900px] px-4 md:px-8">
        <h1
          className="mb-4 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "800",
            color: "#003087"
          }}
        >
          Frequently Asked Questions
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
          Find answers to common questions about our programs
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg"
              style={{ border: "1px solid rgba(0, 48, 135, 0.08)" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left transition-colors hover:bg-gray-50"
                type="button"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor:
                          openIndex === index ? "rgba(0, 48, 135, 0.12)" : "rgba(0, 48, 135, 0.06)"
                      }}
                    >
                      <span
                        style={{
                          color: "#003087",
                          fontSize: "16px",
                          fontWeight: "800",
                          fontFamily: "Poppins, sans-serif"
                        }}
                      >
                        Q
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "#0c121c",
                        lineHeight: 1.4
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-all"
                    style={{
                      backgroundColor:
                        openIndex === index ? "rgba(0, 166, 81, 0.12)" : "rgba(0, 48, 135, 0.06)",
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke={openIndex === index ? "#00A651" : "#003087"}
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div
                  className="border-t px-6 pb-5 pt-4"
                  style={{
                    borderColor: "rgba(0, 48, 135, 0.08)",
                    backgroundColor: "rgba(0, 166, 81, 0.02)"
                  }}
                >
                  <div className="flex gap-4">
                    <div
                      className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "rgba(0, 166, 81, 0.12)" }}
                    >
                      <span
                        style={{
                          color: "#00A651",
                          fontSize: "16px",
                          fontWeight: "800",
                          fontFamily: "Poppins, sans-serif"
                        }}
                      >
                        A
                      </span>
                    </div>

                    <p
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: "15px",
                        lineHeight: "1.7",
                        color: "#0c121c",
                        opacity: "0.85"
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl border bg-white p-6 text-center"
          style={{ borderColor: "rgba(0, 48, 135, 0.08)" }}
        >
          <p style={{ fontFamily: "Rubik, sans-serif", color: "#0c121c", opacity: 0.75, marginBottom: 12 }}>
            Still have questions? Send us a message and we’ll get back to you.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-full px-8 py-3 text-white transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#00A651",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 800,
              boxShadow: "0 6px 18px rgba(0, 166, 81, 0.22)"
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}