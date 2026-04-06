import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0c121c" }}>
      {/* Top section */}
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: 22 }}>
                <span style={{ color: "#FF8C42" }}>D</span>
                <span style={{ color: "#ffffff" }}>A</span>
                <span style={{ color: "#00A651" }}>S</span>
              </span>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#ffffff", marginLeft: 4 }}>Training</span>
            </div>
            <p style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, color: "#ffffff", opacity: 0.55, lineHeight: 1.8 }}>
              DAS Sterile Processing Training Center — preparing healthcare professionals for real-world environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#ffffff", letterSpacing: 1, opacity: 0.5, marginBottom: 16 }}>QUICK LINKS</p>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Courses", to: "/courses" },
                { label: "FAQ", to: "/faq" },
                { label: "Apply Now", to: "/apply" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, color: "#ffffff", opacity: 0.7, textDecoration: "none" }}
                    className="transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#ffffff", letterSpacing: 1, opacity: 0.5, marginBottom: 16 }}>CONTACT</p>
            <ul className="space-y-3" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, color: "#ffffff", opacity: 0.7, lineHeight: 1.7 }}>
              <li>860 Melrose Avenue<br />Bronx, NY 10451</li>
              <li>
                <a href="tel:6148158070" style={{ color: "#ffffff", textDecoration: "none" }} className="hover:opacity-100">614-815-8070</a>
              </li>
              <li>
                <a href="tel:9299220726" style={{ color: "#ffffff", textDecoration: "none" }} className="hover:opacity-100">929-922-0726</a>
              </li>
              <li>
                <a href="mailto:Dassterile@gmail.com" style={{ color: "#00A651", textDecoration: "none", opacity: 1 }} className="hover:underline">Dassterile@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#ffffff", letterSpacing: 1, opacity: 0.5, marginBottom: 16 }}>OFFICE HOURS</p>
            <ul className="space-y-2" style={{ fontFamily: "Rubik, sans-serif", fontSize: 14, color: "#ffffff", opacity: 0.7, lineHeight: 1.7 }}>
              <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
              <li>Saturday: 9:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="mt-6">
              <Link
                to="/apply"
                className="inline-block rounded-full px-6 py-2 text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF8C42", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 14 }}
              >
                Apply Now
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="mx-auto max-w-[1200px] px-4 py-5 md:px-8 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <p style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, color: "#ffffff", opacity: 0.4 }}>
            © {currentYear} DAS Sterile Processing Training Center. All rights reserved.
          </p>
          <Link
            to="/contact"
            style={{ fontFamily: "Rubik, sans-serif", fontSize: 13, color: "#ffffff", opacity: 0.4, textDecoration: "none" }}
            className="hover:opacity-70"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
