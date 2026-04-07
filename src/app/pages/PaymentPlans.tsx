import { useEffect } from "react";
import { Link } from "react-router";
import { RequiredCourseMaterials } from "../components/RequiredCourseMaterials";


export function PaymentPlans() {
  useEffect(() => { document.title = "Payment Plans | DAS Training"; }, []);
  const paymentPlans = [
    {
      title: "One-Time Payment",
      description:
        "Pay the full program cost upfront and receive our discounted tuition rate.",
      color: "#003087"
    },
    {
      title: "Pay As You Go",
      description:
        "Start with a down payment and continue with weekly installments until the program concludes.",
      color: "#00A651"
    }
  ];

  return (
    <div className="py-4 md:py-6" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">

        {/* Page Header */}
        <div className="mb-6 text-center">
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
            We offer flexible payment options to make your education accessible.
            Contact us to learn about the plan that works best for you.
          </p>
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
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                  style={{ border: "1px solid rgba(0,48,135,0.08)" }}
                >
                  <div className="h-1.5" style={{ backgroundColor: plan.color }} />
                  <div className="p-6">
                    <h3
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "20px",
                        fontWeight: "700",
                        color: plan.color
                      }}
                    >
                      {plan.title}
                    </h3>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.8",
                        color: "#0c121c",
                        opacity: "0.8"
                      }}
                    >
                      {plan.description}
                    </p>
                  </div>
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
              Please note: There is a non-refundable registration fee for all cancellations within seven days.
              Contact us for full pricing details and to find the best plan for your situation.
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