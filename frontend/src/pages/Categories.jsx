import { Link } from "react-router-dom";

function Categories() {

    const categories = [
        {
            icon: "🏥",
            name: "Healthcare",
            description:
                "Book appointments with healthcare professionals",
            url: "/providers?category=Healthcare"
        },
        {
            icon: "💆",
            name: "Beauty & Wellness",
            description:
                "Salon, spa and wellness appointments",
            url: "/providers?category=Beauty%20%26%20Wellness"
        },
        {
            icon: "🎓",
            name: "Education & Counseling",
            description:
                "Book mentoring and counseling sessions",
            url: "/providers?category=Education%20%26%20Counseling"
        },
        {
            icon: "💼",
            name: "Professional Services",
            description:
                "Lawyers, consultants and other professionals",
            url: "/providers?category=Professional%20Services"
        },
        {
            icon: "🔧",
            name: "Home & Repair",
            description:
                "Book electricians, plumbers and repair services",
            url: "/providers?category=Home%20%26%20Repair"
        }
    ];

    return (

        <div className="categories-page">

            {/* PAGE HEADER */}

            <section className="page-header">

                <h1>Explore Categories</h1>

                <p>
                    Choose a category and find the right service provider.
                </p>

            </section>


            {/* CATEGORY CARDS */}

            <section className="categories-grid">

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

            </section>

        </div>

    );
}

export default Categories;