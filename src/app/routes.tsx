import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Events } from "./pages/Events";
import { Courses } from "./pages/Courses";
import { FAQ } from "./pages/FAQ";
import { ContactUs } from "./pages/ContactUs";
import { Apply } from "./pages/Apply";
import { PaymentPlans } from "./pages/PaymentPlans";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "events", element: <Events /> },
      { path: "courses", element: <Courses /> },
      { path: "payment-plans", element: <PaymentPlans /> },
      { path: "faq", element: <FAQ /> },
      { path: "contact", element: <ContactUs /> },
      { path: "apply", element: <Apply /> }
    ]
  }
]);