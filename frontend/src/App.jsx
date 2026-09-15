import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import Providers from "./pages/Providers";
import ProviderProfile from "./pages/ProviderProfile";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* HOME */}
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />


                {/* LOGIN */}
                <Route
                    path="/login"
                    element={<Login />}
                />


                {/* REGISTER */}
                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* CATEGORIES */}
                <Route
                    path="/categories"
                    element={<Categories />}
                />


                {/* PROVIDERS */}
                <Route
                    path="/providers"
                    element={<Providers />}
                />


                {/* PROVIDER PROFILE */}
                <Route
                    path="/provider/:providerId"
                    element={<ProviderProfile />}
                />


                {/* BOOK APPOINTMENT */}
                <Route
                    path="/book-appointment/:providerId"
                    element={<BookAppointment />}
                />
<Route
    path="/admin"
    element={<AdminDashboard />}
/>

                {/* PROTECTED MY APPOINTMENTS */}
                <Route
                    path="/my-appointments"
                    element={
                        <ProtectedRoute>
                            <MyAppointments />
                        </ProtectedRoute>
                    }
                />
            <Route path="*" element={<NotFound />} />

            </Routes>
<Footer />
        </BrowserRouter>
    );
}

export default App;