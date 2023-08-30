import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Gallery from "./components/Gallery";
import Event_Conference from "./components/Events/Event_Conference";
import Event_wedding from "./components/Events/Event_wedding";
import Room_classic from "./components/Rooms/Room_classic";
import ExecutiveRoom from "./components/Rooms/ExecutiveRoom";
import FAQ from "./components/Footer/FAQ";
import ContactUs from "./components/Footer/ContactUs";
import Careers from "./components/Footer/Careers";
import TermsandCondition from "./components/Footer/TermsandCondition";
import Mainpage from "./components/Mainpage";
import App from "./components/App";
import About from "./components/About";
import Register from "./components/login_singnup/Register";
import ShowProduct from "./components/ShowProduct";
import Login from "./components/login_singnup/Login";
import Booking from "./components/login_singnup/Booking";
import Extra from "./components/Extra";
import Room_tent from "./components/Rooms/Room_tent";
import OrderHistory from "./components/OrderHistory";
import Birthday from "./components/Events/Birthday";
import Forgotpassword from "./components/login_singnup/Forgotpassword";
import Admin from "./components/login_singnup/Admin";
import ViewReservation from "./components/Admin/ViewReservation";
import Enquiry from "./components/Admin/Enquiry";
import ClubMembership from "./components/clubActivity/ClubMembership";
import CoustomerDetailes from "./components/Admin/CoustomerDetailes";
import Invoice from "./components/RoomInvoice";
import EventInvoice from "./components/EventInvoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "About",
        element: <About />,
      },
      {
        path: "",
        element: <Mainpage />,
      },
      {
        path: "ClubM",
        element: <ClubMembership />,
      },
      {
        path: "Conference",
        element: <Event_Conference />,
      },
      {
        path: "Wedding",
        element: <Event_wedding />,
      },
      {
        path: "ExecutiveR",
        element: <ExecutiveRoom />,
      },
      {
        path: "tentR",
        element: <Room_tent />,
      },
      {
        path: "ClassicR",
        element: <Room_classic />,
      },
      {
        path: "tentR/booking",
        element: <Booking />,
      },
      {
        path: "ClassicR/booking",
        element: <Booking />,
      },
      {
        path: "ExecutiveR/booking",
        element: <Booking />,
      },
      {
        path: "Gallery",
        element: <Gallery />,
      },
      {
        path: "EventInvoice",
        element: <EventInvoice />,
      },
      {
        path: "FAQ",
        element: <FAQ />,
      },
      {
        path: "FAQ",
        element: <ContactUs />,
      },
      {
        path: "Careers",
        element: <Careers />,
      },
      {
        path: "T&C",
        element: <TermsandCondition />,
      },
      {
        path: "login/Register",
        element: <Register />,
      },
      {
        path: "/login/Register/login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "ShowProduct",
        element: <ShowProduct />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/tentR/login",
        element: <Login />,
      },

      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "login/nn",
        element: <Extra />,
      },

      {
        path: "/invoice",
        element: <Invoice />,
      },

      {
        path: "/History",
        element: <OrderHistory />,
      },
      {
        path: "/invoice/History",
        element: <OrderHistory />,
      },

      {
        path: "/birthday",
        element: <Birthday />,
      },

      {
        path: "/History",
        element: <OrderHistory />,
      },
      {
        path: "/login/Forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },

      {
        path: "/ViewReservation/Enquiry",
        element: <ViewReservation />,
      },
      {
        path: "/ViewReservation",
        element: <ViewReservation />,
      },
      {
        path: "/Enquiry",
        element: <Enquiry />,
      },
      {
        path: "/CoustomerDetailes",
        element: <CoustomerDetailes />,
      },
    ],
  },
]);

export default router;
