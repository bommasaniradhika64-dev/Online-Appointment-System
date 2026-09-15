import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    async function handleSubmit(e) {

        e.preventDefault();

        // Check empty fields
        if (email === "" || password === "") {
            alert("Please fill all the fields");
            return;
        }

        try {

            const userData = {
                email: email,
                password: password
            };

            // Call Spring Boot login API
            const result = await loginUser(userData);

            console.log("Logged in user:", result);

            // Store login status
            localStorage.setItem("isLoggedIn", "true");

            // Store user information
            localStorage.setItem("user", JSON.stringify(result));

            alert("Login successful!");

            // If user came from booking page,
            // return to that booking page
            const from = location.state?.from;

            if (from) {
                navigate(from);
            } else {
                navigate("/");
            }

        } catch (error) {

            console.error("Login error:", error);

            alert(error.message);
        }
    }

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Welcome Back</h1>

                <p>
                    Login to your AppointEase account
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="auth-footer">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        state={{
                            from: location.state?.from
                        }}
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;