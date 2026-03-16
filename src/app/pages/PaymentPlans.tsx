import { Link } from "react-router";
import { RequiredCourseMaterials } from "../components/RequiredCourseMaterials";

export function PaymentPlans() {
  const costBreakdown = [
    { label: "Test Preparation", amount: "$2,200.00" },
    { label: "Books", amount: "$150.00" },
    { label: "Final CRCST Exam", amount: "$150.00" }
  ];

  const paymentPlans = [
    {
      title: "One Time Discounted Payment",
      amount: "$2,450.00",
      description:
        "Pay the full program cost at once and receive the discounted tuition price."
    },
    {
      title: "Pay As You Go",
      amount: "$2,500.00",
      description:
        "Minimum $1,000 down payment and weekly installment payments of $250 before the class concludes."
    }
  ];

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1
            className="mb-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(32px,5vw,48px)",
              fontWeight: "800",
              color: "#003087"
            }}
          >
            Payment Plans
          </h1>

          <p
            className="mx-auto max-w-[720px]"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#0c121c",
              opacity: "0.8"
            }}
          >
            Review the full cost of the Sterile Processing Test Preparation
            Program including books, certification exam fees, and available
            payment plan options.
          </p>
        </div>

        {/* Cost Breakdown */}
        <div
          className="mb-10 overflow-hidden rounded-2xl bg-white shadow-lg"
          style={{ border: "1px solid rgba(0,48,135,0.08)" }}
        >
          <div
            className="h-2"
            style={{
              background:
                "linear-gradient(90deg,#003087 0%,#FF8C42 100%)"
            }}
          />

          <div className="p-8">
            <h2
              className="mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "26px",
                fontWeight: "700",
                color: "#003087"
              }}
            >
              Program Cost Breakdown
            </h2>

            <div className="space-y-4">
              {costBreakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl px-5 py-4"
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid rgba(0,48,135,0.06)"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "16px"
                    }}
                  >
                    {item.label}
                  </span>

                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#003087"
                    }}
                  >
                    {item.amount}
                  </span>
                </div>
              ))}

              {/* Total */}
              <div
                className="flex items-center justify-between rounded-xl px-5 py-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,48,135,0.06) 0%, rgba(255,140,66,0.06) 100%)",
                  border: "1px solid rgba(0,48,135,0.08)"
                }}
              >
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#003087"
                  }}
                >
                  Total Cost of Test Prep
                </span>

                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "#FF8C42"
                  }}
                >
                  $2,500.00
                </span>
              </div>
            </div>

            <p
              className="mt-6"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "14px",
                lineHeight: "1.8",
                opacity: "0.8"
              }}
            >
              Note: The total cost above includes the CRCST certification exam
              fee of $125.00.
            </p>
          </div>
        </div>

        {/* Payment Plans */}
        <div
          className="overflow-hidden rounded-2xl bg-white shadow-lg"
          style={{ border: "1px solid rgba(0,166,81,0.08)" }}
        >
          <div
            className="h-2"
            style={{
              background:
                "linear-gradient(90deg,#00A651 0%,#003087 100%)"
            }}
          />

          <div className="p-8">
            <h2
              className="mb-3"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "26px",
                fontWeight: "700",
                color: "#00A651"
              }}
            >
              Available Payment Plans
            </h2>

            <p
              className="mb-6"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "15px",
                lineHeight: "1.8",
                opacity: "0.8"
              }}
            >
              Please choose one of the following payment options when enrolling.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {paymentPlans.map((plan, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid rgba(0,48,135,0.08)"
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#003087"
                    }}
                  >
                    {plan.title}
                  </h3>

                  <div
                    className="mt-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "24px",
                      fontWeight: "800",
                      color: "#FF8C42"
                    }}
                  >
                    {plan.amount}
                  </div>

                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "14px",
                      lineHeight: "1.8",
                      opacity: "0.8"
                    }}
                  >
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-6"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "14px",
                lineHeight: "1.8",
                opacity: "0.8"
              }}
            >
              There is a non-refundable registration fee for all cancellations
              from the Test Prep within seven days.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/apply"
            className="rounded-full px-10 py-3 text-white text-center"
            style={{
              backgroundColor: "#FF8C42",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "700"
            }}
          >
            Apply Now
          </Link>

          <Link
            to="/contact"
            className="rounded-full px-10 py-3 text-center"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0,48,135,0.20)",
              color: "#003087",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "700"
            }}
          >
            Contact Us
          </Link>
        </div>

        <RequiredCourseMaterials />

      </div>
    </div>
  );
}