import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* BRAND */}

                <div className="footer-brand">

                    <h2>
                        AppointEase
                    </h2>

                    <p>
                        Book appointments with trusted
                        service providers easily and
                        conveniently.
                    </p>

                </div>


                {/* QUICK LINKS */}

                <div className="footer-section">

                    <h3>
                        Quick Links
                    </h3>

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/categories">
                        Categories
                    </Link>

                    <Link to="/providers">
                        Providers
                    </Link>

                    <Link to="/my-appointments">
                        My Appointments
                    </Link>

                </div>


                {/* SERVICES */}

                <div className="footer-section">

                    <h3>
                        Services
                    </h3>

                    <span>
                        Healthcare
                    </span>

                    <span>
                        Beauty & Wellness
                    </span>

                    <span>
                        Education & Counseling
                    </span>

                    <span>
                        Professional Services
                    </span>

                    <span>
                        Home & Repair
                    </span>

                </div>


                {/* CONTACT */}

                <div className="footer-section">

                    <h3>
                        Contact
                    </h3>

                    <span>
                        📧 support@appointease.com
                    </span>

                    <span>
                        📞 +91 98765 43210
                    </span>

                    <span>
                        📍 India
                    </span>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 AppointEase. All rights reserved.
                </p>

                <p>
                    Online Appointment Management System
                </p>

            </div>

        </footer>
    );
}

export default Footer;