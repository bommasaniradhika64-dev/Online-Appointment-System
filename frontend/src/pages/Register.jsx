import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    async function handleSubmit(e) {

        e.preventDefault();

        // Check empty fields
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill all the fields");
            return;
        }

        // Check password
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Check password length
        if (password.length < 6) {
            alert("Password must contain at least 6 characters");
            return;
        }

        try {

            const userData = {
                fullName: name,
                email: email,
                phone: phone,
                password: password
            };

            const result = await registerUser(userData);

            console.log("Registered user:", result);

            alert("Registration successful!");

            // Temporary login status
            localStorage.setItem("isLoggedIn", "true");

            const from = location.state?.from;

            if (from) {
                navigate(from);
            } else {
                navigate("/");
            }

        } catch (error) {

            console.error("Registration error:", error);

            alert(error.message);
        }
    }

    return (
        <div className="auth-page">

            <div className="auth-card register-card">

                <h1>Create Account</h1>

                <p>
                    Register to start booking appointments
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Full Name</label>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Phone Number</label>

                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label>Confirm Password</label>

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p className="auth-footer">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        state={{
                            from: location.state?.from
                        }}
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;