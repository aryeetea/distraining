 import { Link } from "react-router";

export function PayTuitionSection() {
  // ✅ When your client gives you a payment link, paste it here.
  // Example: "https://buy.stripe.com/xxxx" or "https://square.link/u/xxxx"
  const PAYMENT_LINK = ""; // leave empty for now

  // ✅ Zelle details (edit these)
  const ZELLE_RECIPIENT = "DAS Training";
  const ZELLE_SEND_TO = "Dassterile@gmail.com"; // email or phone used for Zelle
  const ZELLE_MEMO = "Student Full Name + Program Name";

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
    <div
      className="rounded-2xl border bg-white p-6 md:p-8"
      style={{ borderColor: "rgba(0,48,135,0.10)" }}
    >
      {/* Top accent bar */}
      <div
        className="-mx-6 -mt-6 mb-6 h-2 rounded-t-2xl md:-mx-8 md:-mt-8"
        style={{
          background: "linear-gradient(90deg, #003087 0%, #00A651 55%, #FF8C42 100%)"
        }}
      />

      <h2
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 900,
          fontSize: 30,
          color: "#0c121c",
          marginBottom: 8
        }}
      >
        Pay Tuition
      </h2>

      <p style={{ fontFamily: "Rubik, sans-serif", opacity: 0.75, lineHeight: 1.7 }}>
        You can pay online (if available) or pay using Zelle. If you have questions, contact us.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {payOnlineButton}

        <button
          type="button"
          className="w-full sm:w-auto rounded-full px-8 py-3 text-center text-white transition-opacity hover:opacity-90"
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
          className="w-full sm:w-auto rounded-full px-8 py-3 text-center transition-opacity hover:opacity-90"
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

      {/* Zelle details card */}
      <div
        className="mt-6 rounded-xl border p-5"
        style={{ borderColor: "rgba(0,48,135,0.10)", backgroundColor: "#f8fafc" }}
      >
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 900,
            color: "#003087",
            fontSize: 18
          }}
        >
          Pay with Zelle
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
      </div>

      <p className="mt-4" style={{ fontFamily: "Rubik, sans-serif", fontSize: 12, opacity: 0.6 }}>
        Please do not include sensitive personal health information in payment notes.
      </p>
    </div>
  );
}