import { useEffect, useState } from "react";
import { Link } from "react-router";
import { RequiredCourseMaterials } from "../components/RequiredCourseMaterials";

type Chapter = { heading: string; points: string[] };
type WeekBlock = { week: string; title: string; chapters: Chapter[] };

export function Courses() {
  useEffect(() => { document.title = "Courses | DAS Training"; }, []);
  // ✅ When your client gives you a payment link, paste it here.
  const PAYMENT_LINK = ""; // leave empty for now

  // ✅ Zelle info
  const ZELLE_RECIPIENT = "DAS Training";
  const ZELLE_SEND_TO = "dassterile@gmail.com";
  const ZELLE_MEMO = "Student Full Name + Program Name";

  const theme = {
    navy: "#003087",
    green: "#00A651",
    orange: "#FF8C42",
    text: "#0c121c",
    bg: "#ffffff",
    soft: "#f8fafc",
    border: "rgba(0, 48, 135, 0.10)"
  };

  const course = {
    title: "Sterile Processing Fundamentals",
    duration: "8 weeks",
    level: "Standard",
    description:
      "An 8-week program designed to prepare students for real healthcare environments. Learn the sterile processing workflow from decontamination through sterilization, storage, and quality assurance while following infection prevention and safety standards."
  };

  const showZelleInfo = () => {}; // no longer used — Zelle info shown inline

  const showPaymentOptions = () => {}; // no longer used — pricing removed

  // ✅ Course breakdown (click to expand) — CLOSED by default
  const weeks: WeekBlock[] = [
    {
      week: "Week 1",
      title: "Foundations & Medical Basics",
      chapters: [
        {
          heading: "Chapter 1: Introduction to Sterile Processing",
          points: [
            "Overview of the SPD workflow and department responsibilities.",
            "Safety practices and core skills for day-to-day work."
          ]
        },
        {
          heading: "Chapter 2: Medical Terminology for SPD",
          points: [
            "Word parts, common terms, and how to interpret clinical language.",
            "Terminology used for instruments, procedures, and body systems."
          ]
        },
        {
          heading: "Chapter 3: Anatomy for SPD",
          points: [
            "Anatomical position and basic body organization.",
            "Key systems and terms connected to instrument use and care."
          ]
        }
      ]
    },
    {
      week: "Week 2",
      title: "Microbiology & Prevention",
      chapters: [
        {
          heading: "Chapter 4: Microbiology for SPD",
          points: [
            "How microorganisms are identified and classified.",
            "How proper processing reduces contamination risk."
          ]
        },
        {
          heading: "Chapter 5: Infection Prevention",
          points: [
            "How infections spread and how to reduce risk in practice.",
            "Attire, hygiene, and best practices across SPD work areas."
          ]
        },
        {
          heading: "Chapter 6: Regulations and Standards",
          points: [
            "Why standards and compliance matter in healthcare processing.",
            "Documentation and quality expectations for safe outcomes."
          ]
        }
      ]
    },
    {
      week: "Week 3",
      title: "Decontamination & Cleaning",
      chapters: [
        {
          heading: "Chapter 7: Point-of-Use Treatment and Transport",
          points: [
            "What happens at point of use and why it matters.",
            "Safe handling and transport of soiled items."
          ]
        },
        {
          heading: "Chapter 8: Cleaning",
          points: [
            "What “clean” really means and why it’s the foundation.",
            "Cleaning steps that support later disinfection/sterilization."
          ]
        },
        {
          heading: "Chapter 9: Disinfection",
          points: [
            "Key concepts and safe work practices.",
            "Manual vs. mechanical approaches and quality checks."
          ]
        }
      ]
    },
    {
      week: "Week 4",
      title: "Instruments & Packaging",
      chapters: [
        {
          heading: "Chapter 10: Surgical Instrumentation",
          points: [
            "Instrument categories and identification basics.",
            "Inspection fundamentals and preventing damage."
          ]
        },
        {
          heading: "Chapter 11: Complex Surgical Instruments",
          points: [
            "Powered instruments, endoscopes, and special handling needs.",
            "Extra inspection and processing considerations."
          ]
        },
        {
          heading: "Chapter 12: Preparation and Packaging",
          points: [
            "Assembly goals, testing basics, and packaging guidelines.",
            "Work area requirements and quality assurance measures."
          ]
        }
      ]
    },
    {
      week: "Week 5",
      title: "Sterilization Methods",
      chapters: [
        {
          heading: "Chapter 13: Point-of-Use Disinfection and Sterilization",
          points: [
            "Immediate-use concepts and when it’s appropriate.",
            "Monitoring and recordkeeping expectations."
          ]
        },
        {
          heading: "Chapter 14: High-Temperature Sterilization",
          points: [
            "Steam sterilization cycles, equipment basics, and conditions.",
            "Common issues and how to reduce wet packs."
          ]
        },
        {
          heading: "Chapter 15: Low-Temperature Sterilization",
          points: [
            "Low-temp requirements and monitoring basics.",
            "Overview of common systems and safe handling."
          ]
        }
      ]
    },
    {
      week: "Week 6",
      title: "Storage, Records, and Quality",
      chapters: [
        {
          heading: "Chapter 16: Sterile Storage and Transport",
          points: [
            "Storage conditions and safe handling principles.",
            "Transport methods that protect sterile integrity."
          ]
        },
        {
          heading: "Chapter 17: Monitoring and Recordkeeping",
          points: [
            "Why accurate records matter for safety and compliance.",
            "Indicators, monitoring types, and documentation."
          ]
        },
        {
          heading: "Chapter 18: Quality Production and Monitoring",
          points: [
            "Quality programs and continuous improvement basics.",
            "Quality indicators used in daily SPD operations."
          ]
        }
      ]
    },
    {
      week: "Week 7",
      title: "Inventory, Support, and IT",
      chapters: [
        {
          heading: "Chapter 19: Supply Chain in SPD",
          points: [
            "Inventory basics, tracking, and reducing loss.",
            "Distribution systems and replenishment practices."
          ]
        },
        {
          heading: "Chapter 20: Ancillary Department Support",
          points: [
            "How SPD supports broader patient care operations.",
            "Tracking, cleaning, and equipment coordination."
          ]
        },
        {
          heading: "Chapter 21: IT in Sterile Processing",
          points: [
            "How tracking systems support workflow efficiency.",
            "Core features of instrument and equipment tracking."
          ]
        }
      ]
    },
    {
      week: "Week 8",
      title: "Safety, Communication, Growth",
      chapters: [
        {
          heading: "Chapter 22: Safety for Sterile Processing",
          points: [
            "Sharps, chemicals, ergonomics, and safe prevention habits.",
            "Area-specific safety concerns and preparedness."
          ]
        },
        {
          heading: "Chapter 23: Communication and Human Relations",
          points: [
            "Teamwork, professionalism, and customer service skills.",
            "Handling workplace challenges with clarity and respect."
          ]
        },
        {
          heading: "Chapter 24: Personal and Professional Development",
          points: [
            "Career pathways and goal planning.",
            "Why continuing education matters for long-term success."
          ]
        }
      ]
    }
  ];

  const [openWeekIndex, setOpenWeekIndex] = useState<number | null>(null);

  const payOnlineButton = PAYMENT_LINK ? (
    <a
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-full py-3 text-center text-white transition-opacity hover:opacity-90"
      style={{
        backgroundColor: theme.green,
        fontSize: 15,
        fontWeight: 900,
        fontFamily: "Rubik, sans-serif",
        boxShadow: "0 10px 22px rgba(0, 166, 81, 0.22)"
      }}
    >
      Pay Tuition Online
    </a>
  ) : (
    <button
      type="button"
      className="w-full rounded-full py-3 text-center text-white transition-opacity hover:opacity-90"
      style={{
        backgroundColor: theme.green,
        fontSize: 15,
        fontWeight: 900,
        fontFamily: "Rubik, sans-serif",
        opacity: 0.92,
        boxShadow: "0 10px 22px rgba(0, 166, 81, 0.18)"
      }}
      onClick={() =>
        alert(
          "Online payment link coming soon.\n\nFor now, please use Pay with Zelle or check the Payment Options."
        )
      }
    >
      Pay Tuition Online (Coming Soon)
    </button>
  );

  const paymentOptionsButton = (
    <button
      type="button"
      className="w-full rounded-full py-3 text-center text-white transition-opacity hover:opacity-90"
      style={{
        backgroundColor: theme.navy,
        fontSize: 15,
        fontWeight: 900,
        fontFamily: "Rubik, sans-serif",
        boxShadow: "0 10px 22px rgba(0, 48, 135, 0.18)"
      }}
      onClick={showZelleInfo}
    >
      Pay with Zelle
    </button>
  );

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h1
          className="mb-4 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            color: theme.navy
          }}
        >
          Our Course
        </h1>

        <p
          className="mb-10 text-center"
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "clamp(16px, 2vw, 18px)",
            color: theme.text,
            opacity: 0.72,
            lineHeight: 1.8
          }}
        >
          Professional sterile processing training designed for real-world healthcare environments.
        </p>

        {/* Overview + Certification */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
            <div>
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 800,
                  color: theme.navy
                }}
              >
                Program Overview
              </h2>
              <p
                className="mt-3"
                style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, lineHeight: 1.75, color: theme.text }}
              >
                Thank you for your interest in the Central Sterile Processing Certificate Program at DAS Central Sterile Processing Training Center. This packet provides information regarding admission procedures and required courses.
              </p>
              <p
                className="mt-2"
                style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, lineHeight: 1.75, color: theme.text }}
              >
                The Certificate in Central Sterile Processing is an 8–10 week program. Classes are scheduled both online and in the classroom. Enrollment is limited and competitive.
              </p>
              <p
                className="mt-2"
                style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, lineHeight: 1.75, color: theme.text }}
              >
                Upon successful completion of the program, each student is awarded a Certificate of Completion.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
            <div>
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 800,
                  color: theme.navy
                }}
              >
                Certification
              </h2>
              <p
                className="mt-3"
                style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, lineHeight: 1.75, color: theme.text }}
              >
                Graduates of this program are eligible to sit for the Certified Registered Central Service Technician (CRCST) National Exam administered by the Healthcare Sterile Processing Association (HSPA).
              </p>
              <p
                className="mt-2"
                style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, lineHeight: 1.75, color: theme.text }}
              >
                All students passing the CRCST exam are recognized as individuals who have demonstrated the experience, knowledge, and skills necessary to provide competent services as a Central Service Technician, and are to use the title Certified Registered Central Service Technician.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT */}
          <div
            className="lg:col-span-2 overflow-hidden rounded-2xl bg-white shadow-md"
            style={{ border: `1px solid ${theme.border}` }}
          >
            <div
              className="h-2"
              style={{
                background: `linear-gradient(90deg, ${theme.navy} 0%, ${theme.green} 60%, ${theme.orange} 100%)`
              }}
            />

            <div className="p-6 md:p-8">
              <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="inline-block rounded-full px-4 py-1.5 text-white"
                    style={{
                      backgroundColor: theme.orange,
                      fontSize: 13,
                      fontWeight: 800,
                      fontFamily: "Rubik, sans-serif",
                      boxShadow: "0 10px 18px rgba(255, 140, 66, 0.18)"
                    }}
                  >
                    {course.level}
                  </span>

                  <span
                    className="inline-block rounded-full px-4 py-1.5"
                    style={{
                      backgroundColor: "rgba(0,48,135,0.06)",
                      border: "1px solid rgba(0,48,135,0.10)",
                      fontSize: 13,
                      fontWeight: 900,
                      fontFamily: "Rubik, sans-serif",
                      color: theme.navy
                    }}
                  >
                    {course.duration}
                  </span>
                </div>

                <div className="grid w-full gap-3 sm:grid-cols-2 md:w-auto">
                  <Link
                    to="/apply"
                    className="rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: theme.orange,
                      fontSize: 15,
                      fontWeight: 900,
                      fontFamily: "Rubik, sans-serif",
                      boxShadow: "0 10px 20px rgba(255,140,66,0.20)"
                    }}
                  >
                    Apply Now
                  </Link>

                  <Link
                    to="/contact"
                    className="rounded-full px-8 py-3 text-center transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid rgba(0,48,135,0.18)",
                      color: theme.navy,
                      fontSize: 15,
                      fontWeight: 900,
                      fontFamily: "Rubik, sans-serif"
                    }}
                  >
                    Ask a Question
                  </Link>
                </div>
              </div>

              <h2
                className="mb-3"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 28,
                  fontWeight: 900,
                  color: theme.text
                }}
              >
                {course.title}
              </h2>

              <p
                className="mb-8"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: theme.text,
                  opacity: 0.85
                }}
              >
                {course.description}
              </p>

              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: theme.soft, border: `1px solid ${theme.border}` }}
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 20,
                      fontWeight: 900,
                      color: theme.navy
                    }}
                  >
                    Quick Highlights
                  </h3>

                  <div
                    className="hidden sm:block"
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: 12,
                      fontWeight: 900,
                      color: theme.text,
                      opacity: 0.55,
                      letterSpacing: 0.6
                    }}
                  >
                    Hybrid • Practical • Career-Ready
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Format", value: "Instructor-led + hands-on practice" },
                    { label: "Schedule", value: "2 online (weekday) + 1 in-person (weekend)" },
                    { label: "Duration", value: "8 weeks" },
                    { label: "Outcome", value: "Certificate of training + certification pathway readiness" }
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white px-4 py-3"
                      style={{
                        border: "1px solid rgba(0,48,135,0.08)",
                        boxShadow: "0 8px 18px rgba(0,0,0,0.04)"
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 12,
                          opacity: 0.6,
                          fontWeight: 900,
                          color: theme.text
                        }}
                      >
                        {h.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "Rubik, sans-serif",
                          fontSize: 14,
                          fontWeight: 900,
                          color: theme.text,
                          marginTop: 4,
                          lineHeight: 1.5
                        }}
                      >
                        {h.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm"
                style={{ border: `1px solid ${theme.border}` }}
              >
                <div
                  className="h-2"
                  style={{
                    background: `linear-gradient(90deg, ${theme.orange} 0%, ${theme.green} 50%, ${theme.navy} 100%)`
                  }}
                />
                <div className="p-6">
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 20,
                      fontWeight: 900,
                      color: theme.text
                    }}
                  >
                    Tuition & Payment
                  </h3>

                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: theme.text,
                      opacity: 0.78
                    }}
                  >
                    After submitting your application, you can pay tuition online when available or review all payment options.
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {payOnlineButton}
                    {paymentOptionsButton}
                  </div>

                  <div className="mt-4 rounded-xl p-4" style={{ background: "linear-gradient(135deg, rgba(0,48,135,0.06) 0%, rgba(0,166,81,0.06) 100%)", border: "1px solid rgba(0,48,135,0.12)" }}>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#003087", letterSpacing: 0.5 }}>PAY WITH ZELLE</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2">
                        <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, fontWeight: 700, color: theme.text, opacity: 0.6, minWidth: 70 }}>Recipient</span>
                        <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, color: theme.text }}>{ZELLE_RECIPIENT}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, fontWeight: 700, color: theme.text, opacity: 0.6, minWidth: 70 }}>Send to</span>
                        <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, color: theme.navy, fontWeight: 700 }}>{ZELLE_SEND_TO}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, fontWeight: 700, color: theme.text, opacity: 0.6, minWidth: 70 }}>Memo</span>
                        <span style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, color: theme.text, opacity: 0.8, fontStyle: "italic" }}>{ZELLE_MEMO}</span>
                      </div>
                    </div>
                  </div>

                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: 12,
                      color: theme.text,
                      opacity: 0.6
                    }}
                  >
                    Please don’t include sensitive personal health information in any payment notes.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div
                  className="rounded-2xl bg-white p-6"
                  style={{
                    border: "1px solid rgba(0,48,135,0.10)",
                    boxShadow: "0 10px 22px rgba(0,0,0,0.04)"
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 18,
                      fontWeight: 900,
                      color: theme.text
                    }}
                  >
                    Who Should Enroll?
                  </h3>
                  <ul
                    className="mt-3 list-disc pl-5"
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: theme.text,
                      opacity: 0.85
                    }}
                  >
                    <li>Students interested in sterile processing and healthcare careers</li>
                    <li>Career changers looking for a structured pathway into healthcare</li>
                    <li>People who prefer hybrid learning with hands-on practice</li>
                  </ul>
                </div>

                <div
                  className="rounded-2xl p-6 text-center"
                  style={{
                    backgroundColor: theme.soft,
                    border: `1px solid ${theme.border}`
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 18,
                      fontWeight: 900,
                      color: theme.navy
                    }}
                  >
                    Have Questions?
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: theme.text,
                      opacity: 0.8
                    }}
                  >
                    Not sure if this program is the right fit? Send us a message and we’ll guide you.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-block rounded-full px-8 py-3 text-white transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: theme.green,
                      fontFamily: "Rubik, sans-serif",
                      fontWeight: 900,
                      boxShadow: "0 10px 20px rgba(0, 166, 81, 0.20)"
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: theme.soft,
                border: `1px solid ${theme.border}`
              }}
            >
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 20,
                  fontWeight: 900,
                  color: theme.navy
                }}
              >
                Course Breakdown
              </h3>

              <p
                className="mt-2"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: theme.text,
                  opacity: 0.72
                }}
              >
                Click a week to view the chapter headings and short summaries.
              </p>

              <div className="mt-4 space-y-3">
                {weeks.map((w, i) => {
                  const isOpen = openWeekIndex === i;

                  return (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl bg-white"
                      style={{
                        border: "1px solid rgba(0,48,135,0.08)",
                        boxShadow: "0 8px 18px rgba(0,0,0,0.04)"
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenWeekIndex(isOpen ? null : i)}
                        className="w-full px-4 py-4 text-left transition-colors hover:bg-gray-50"
                        style={{ fontFamily: "Rubik, sans-serif" }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div style={{ fontSize: 12, fontWeight: 900, color: theme.green, marginBottom: 4 }}>
                              {w.week}
                            </div>
                            <div
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: 15,
                                fontWeight: 900,
                                color: theme.text
                              }}
                            >
                              {w.title}
                            </div>
                          </div>

                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{
                              backgroundColor: isOpen ? "rgba(0,166,81,0.12)" : "rgba(0,48,135,0.07)",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 180ms ease"
                            }}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke={isOpen ? theme.green : theme.navy}
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>

                      {isOpen && (
                        <div
                          className="border-t px-4 pb-4 pt-4"
                          style={{
                            borderColor: "rgba(0,48,135,0.08)",
                            backgroundColor: "rgba(0,166,81,0.02)"
                          }}
                        >
                          <div className="space-y-4">
                            {w.chapters.map((ch, idx) => (
                              <div key={idx}>
                                <div
                                  style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 900,
                                    fontSize: 14,
                                    color: theme.navy
                                  }}
                                >
                                  {ch.heading}
                                </div>
                                <ul
                                  className="mt-2 list-disc pl-5"
                                  style={{
                                    fontFamily: "Rubik, sans-serif",
                                    fontSize: 13,
                                    lineHeight: 1.7,
                                    color: theme.text,
                                    opacity: 0.85
                                  }}
                                >
                                  {ch.points.map((p, pi) => (
                                    <li key={pi}>{p}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-white"
              style={{
                backgroundColor: theme.navy,
                boxShadow: "0 14px 28px rgba(0, 48, 135, 0.18)"
              }}
            >
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: 20 }}>
                Completion Outcome
              </h3>
              <p
                className="mt-3"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.75,
                  opacity: 0.92
                }}
              >
                Students receive a certificate of training and build confidence to pursue sterile processing
                certification pathways.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to="/apply"
                  className="w-full rounded-full py-3 text-center text-white transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: theme.green,
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 900,
                    fontSize: 14,
                    boxShadow: "0 10px 20px rgba(0, 166, 81, 0.20)"
                  }}
                >
                  Apply Now
                </Link>

                <Link
                  to="/contact"
                  className="w-full rounded-full py-3 text-center transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.20)",
                    color: "white",
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 900,
                    fontSize: 14
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <RequiredCourseMaterials />
      </div>
    </div>
  );
}