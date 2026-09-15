import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Home() {

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("");


    // CATEGORY DATA

    const categories = [
        {
            icon: "🏥",
            name: "Healthcare",
            description:
                "Doctors, dentists and healthcare professionals",
            url: "/providers?category=Healthcare"
        },
        {
            icon: "💆",
            name: "Beauty & Wellness",
            description:
                "Salon, spa and wellness services",
            url: "/providers?category=Beauty%20%26%20Wellness"
        },
        {
            icon: "🎓",
            name: "Education & Counseling",
            description:
                "Mentoring, counseling and academic services",
            url: "/providers?category=Education%20%26%20Counseling"
        },
        {
            icon: "💼",
            name: "Professional Services",
            description:
                "Lawyers, consultants and professional services",
            url: "/providers?category=Professional%20Services"
        },
        {
            icon: "🔧",
            name: "Home & Repair",
            description:
                "Electricians, plumbers and repair services",
            url: "/providers?category=Home%20%26%20Repair"
        }
    ];


    // SEARCH PROVIDERS

    function handleSearch() {

        const params = new URLSearchParams();

        if (searchText.trim() !== "") {
            params.set(
                "search",
                searchText.trim()
            );
        }

        if (category !== "") {
            params.set(
                "category",
                category
            );
        }

        if (params.toString() === "") {
            navigate("/providers");
        } else {
            navigate(
                `/providers?${params.toString()}`
            );
        }
    }


    return (

        <div>

            {/* =========================
                HERO SECTION
            ========================= */}

            <section className="hero">

                <div className="hero-content">

                    <h1>
                        Book appointments
                        <br />
                        easily & quickly
                    </h1>

                    <p>
                        Find the right service provider and book your
                        appointment in just a few clicks.
                    </p>


                    {/* SEARCH */}

                    <div className="search-container">

                        <input
                            type="text"
                            placeholder="Search service"
                            value={searchText}
                            onChange={(e) =>
                                setSearchText(
                                    e.target.value
                                )
                            }
                        />


                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(
                                    e.target.value
                                )
                            }
                        >

                            <option value="">
                                Category
                            </option>

                            <option value="Healthcare">
                                Healthcare
                            </option>

                            <option value="Beauty & Wellness">
                                Beauty & Wellness
                            </option>

                            <option value="Education & Counseling">
                                Education & Counseling
                            </option>

                            <option value="Professional Services">
                                Professional Services
                            </option>

                            <option value="Home & Repair">
                                Home & Repair
                            </option>

                        </select>


                        <button onClick={handleSearch}>
                            Search
                        </button>

                    </div>

                </div>

            </section>



            {/* =========================
                CATEGORIES
            ========================= */}

            <section className="section home-categories">

                <h2 className="section-title">
                    Categories
                </h2>


                <div className="categories-grid">

                    {categories.map((category) => (

                        <div
                            className="category-card"
                            key={category.name}
                        >

                            <div className="category-icon">
                                {category.icon}
                            </div>

                            <h2>
                                {category.name}
                            </h2>

                            <p>
                                {category.description}
                            </p>

                            <Link
                                to={category.url}
                                className="view-providers-btn"
                            >
                                View Providers
                            </Link>

                        </div>

                    ))}

                </div>

            </section>



            {/* =========================
                POPULAR PROVIDERS
            ========================= */}

            <section className="section">

                <h2 className="section-title">
                    Popular Providers
                </h2>


                <div className="providers-list">


                    {/* PROVIDER 1 */}

                    <div className="provider-card-large">

                        <div className="provider-info">

                            <h3>
                                Dr. Ravi Kumar
                            </h3>

                            <p>
                                General Physician
                            </p>

                            <span>
                                Healthcare
                            </span>

                        </div>


                        <Link
                            to="/provider/1"
                            className="view-profile-btn"
                        >
                            View Profile
                        </Link>

                    </div>



                    {/* PROVIDER 2 */}

                    <div className="provider-card-large">

                        <div className="provider-info">

                            <h3>
                                Priya Beauty Studio
                            </h3>

                            <p>
                                Beauty & Salon
                            </p>

                            <span>
                                Beauty & Wellness
                            </span>

                        </div>


                        <Link
                            to="/provider/3"
                            className="view-profile-btn"
                        >
                            View Profile
                        </Link>

                    </div>



                    {/* PROVIDER 3 */}

                    <div className="provider-card-large">

                        <div className="provider-info">

                            <h3>
                                Arjun Mentoring
                            </h3>

                            <p>
                                Career Counselor
                            </p>

                            <span>
                                Education & Counseling
                            </span>

                        </div>


                        <Link
                            to="/provider/5"
                            className="view-profile-btn"
                        >
                            View Profile
                        </Link>

                    </div>

                </div>

            </section>



            {/* =========================
                HOW IT WORKS
            ========================= */}

            <section className="how-it-works">

                <h2>
                    How It Works
                </h2>


                <div className="steps-container">


                    {/* STEP 1 */}

                    <div className="step-card">

                        <div className="step-number">
                            1
                        </div>

                        <h3>
                            Choose Category
                        </h3>

                        <p>
                            Select the service category you need.
                        </p>

                    </div>



                    {/* STEP 2 */}

                    <div className="step-card">

                        <div className="step-number">
                            2
                        </div>

                        <h3>
                            Select Provider
                        </h3>

                        <p>
                            Choose a suitable service provider.
                        </p>

                    </div>



                    {/* STEP 3 */}

                    <div className="step-card">

                        <div className="step-number">
                            3
                        </div>

                        <h3>
                            Choose Date & Time
                        </h3>

                        <p>
                            Select an available appointment slot.
                        </p>

                    </div>



                    {/* STEP 4 */}

                    <div className="step-card">

                        <div className="step-number">
                            4
                        </div>

                        <h3>
                            Book Appointment
                        </h3>

                        <p>
                            Confirm your appointment easily.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;