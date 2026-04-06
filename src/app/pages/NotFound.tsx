import { Link } from "react-router";

export function NotFound() {
  return (
    <div
      className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Big 404 */}
      <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(80px, 18vw, 140px)", fontWeight: 900, lineHeight: 1, userSelect: "none" }}>
        <span style={{ color: "#FF8C42" }}>4</span>
        <span style={{ color: "#003087" }}>0</span>
        <span style={{ color: "#00A651" }}>4</span>
      </div>

      <h1
        className="mt-4 mb-3"
        style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800, color: "#0c121c" }}
      >
        Page Not Found
      </h1>

      <p
        className="mb-8 max-w-md"
        style={{ fontFamily: "Rubik, sans-serif", fontSize: 16, color: "#0c121c", opacity: 0.6, lineHeight: 1.7 }}
      >
        The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="rounded-full px-8 py-3 text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#003087", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 15 }}
        >
          Go Home
        </Link>
        <Link
          to="/apply"
          className="rounded-full px-8 py-3 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#FF8C42", color: "#ffffff", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 15 }}
        >
          Apply Now
        </Link>
        <Link
          to="/contact"
          className="rounded-full px-8 py-3 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "white", border: "1px solid rgba(0,48,135,0.2)", color: "#003087", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 15 }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
