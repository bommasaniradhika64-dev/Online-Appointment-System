import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const isLoggedIn =
        localStorage.getItem("isLoggedIn") === "true";

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    function handleLogout() {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");

        alert("Logged out successfully!");

        navigate("/login");
    }

    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                AppointEase
            </Link>

            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/categories">
                    Categories
                </Link>

                <Link to="/providers">
                    Providers
                </Link>

                {isLoggedIn && (
                    <Link to="/my-appointments">
                        My Appointments
                    </Link>
                )}

                {isLoggedIn ? (

                    <div className="nav-user-section">

                        <span className="welcome-user">
                            Hi, {user?.fullName || "User"}
                        </span>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>

                ) : (

                    <Link
                        to="/login"
                        className="login-nav-btn"
                    >
                        Login
                    </Link>

                )}

            </div>

        </nav>
    );
}

export default Navbar;