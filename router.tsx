import Layout from "@components/Layout";
import BookingPage from "@pages/Bookings";
import ConfirmedBookingPage from "@pages/ConfirmedBooking";
import HomePage from "@pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="booking" element={<BookingPage />} />
      <Route path="booking/confirmed" element={<ConfirmedBookingPage />} />
    </Route>
  )
);
