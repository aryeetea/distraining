import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Rubik, sans-serif" }}>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}