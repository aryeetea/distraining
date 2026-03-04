import { useNavigate } from "react-router";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 transition-all duration-200 hover:scale-105"
        style={{
          background: "linear-gradient(90deg, #003087 0%, #00A651 100%)",
          color: "white",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 800,
          fontSize: "14px",
          boxShadow: "0 6px 18px rgba(0, 48, 135, 0.25)"
        }}
      >
        ← Back
      </button>
    </div>
  );
}