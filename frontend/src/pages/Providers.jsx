import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllProviders } from "../services/api";

function Providers() {

    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [searchParams, setSearchParams] =
        useSearchParams();


    // URL values
    const categoryFromURL =
        searchParams.get("category") || "All";

    const searchFromURL =
        searchParams.get("search") || "";


    const [selectedCategory, setSelectedCategory] =
        useState(categoryFromURL);

    const [searchText, setSearchText] =
        useState(searchFromURL);


    // =========================================
    // LOAD PROVIDERS FROM BACKEND
    // =========================================

    useEffect(() => {

        async function loadProviders() {

            try {

                const data = await getAllProviders();

                setProviders(data);
                setError("");

            } catch (error) {

                console.error(
                    "Error loading providers:",
                    error
                );

                setError(
                    "Unable to load providers. Please try again."
                );

            } finally {

                setLoading(false);

            }
        }

        loadProviders();

    }, []);


    // =========================================
    // UPDATE STATE WHEN URL CHANGES
    // =========================================

    useEffect(() => {

        const category =
            searchParams.get("category");

        const search =
            searchParams.get("search");

        setSelectedCategory(
            category || "All"
        );

        setSearchText(
            search || ""
        );

    }, [searchParams]);


    // =========================================
    // FILTER PROVIDERS
    // =========================================

    const filteredProviders = providers.filter(
        (provider) => {

            const categoryMatches =
                selectedCategory === "All" ||
                provider.category === selectedCategory;


            const searchValue =
                searchText.trim().toLowerCase();


            const searchMatches =
                searchValue === "" ||

                provider.name
                    ?.toLowerCase()
                    .includes(searchValue) ||

                provider.serviceType
                    ?.toLowerCase()
                    .includes(searchValue) ||

                provider.category
                    ?.toLowerCase()
                    .includes(searchValue) ||

                provider.location
                    ?.toLowerCase()
                    .includes(searchValue);


            return (
                categoryMatches &&
                searchMatches
            );

        }
    );


    // =========================================
    // CATEGORY FILTER
    // =========================================

    function selectCategory(category) {

        setSelectedCategory(category);

        const params = {};

        if (category !== "All") {
            params.category = category;
        }

        if (searchText.trim() !== "") {
            params.search = searchText.trim();
        }

        setSearchParams(params);

    }


    // =========================================
    // SEARCH
    // =========================================

    function handleSearch(event) {

        event.preventDefault();

        const params = {};

        if (selectedCategory !== "All") {
            params.category = selectedCategory;
        }

        if (searchText.trim() !== "") {
            params.search = searchText.trim();
        }

        setSearchParams(params);

    }


    // =========================================
    // ERROR STATE
    // =========================================

    if (error) {

        return (

            <div className="providers-page">

                <div className="providers-message">

                    <h2>
                        Something Went Wrong
                    </h2>

                    <p>
                        {error}
                    </p>

                    <button
                        className="retry-btn"
                        onClick={() =>
                            window.location.reload()
                        }
                    >
                        Try Again
                    </button>

                </div>

            </div>

        );

    }


    // =========================================
    // PAGE
    // =========================================

    return (

        <div className="providers-page">


            {/* =========================
                HEADER
            ========================= */}

            <section className="page-header">

                <h1>
                    Find Service Providers
                </h1>

                <p>
                    Search for a service and find the
                    right provider for your appointment.
                </p>

            </section>


            {/* =========================
                SEARCH
            ========================= */}

            <form
                className="provider-search-box"
                onSubmit={handleSearch}
            >

                <input
                    type="text"
                    placeholder="Search service or provider..."
                    value={searchText}
                    onChange={(event) =>
                        setSearchText(event.target.value)
                    }
                />

                <button type="submit">
                    Search
                </button>

            </form>


            {/* =========================
                CATEGORY FILTERS
            ========================= */}

            <div className="provider-filters">

                <button
                    type="button"
                    className={
                        selectedCategory === "All"
                            ? "active-filter"
                            : ""
                    }
                    onClick={() =>
                        selectCategory("All")
                    }
                >
                    All
                </button>


                <button
                    type="button"
                    className={
                        selectedCategory === "Healthcare"
                            ? "active-filter"
                            : ""
                    }
                    onClick={() =>
                        selectCategory("Healthcare")
                    }
                >
                    Healthcare
                </button>


                <button
                    type="button"
                    className={
                        selectedCategory === "Beauty & Wellness"
                            ? "active-filter"
                            : ""
                    }
                    onClick={() =>
                        selectCategory(
                            "Beauty & Wellness"
                        )
                    }
                >
                    Beauty & Wellness
                </button>


                <button
                    type="button"
                    className={
                        selectedCategory ===
                        "Education & Counseling"
                            ? "active-filter"
                            : ""
                    }
                    onClick={() =>
                        selectCategory(
                            "Education & Counseling"
                        )
                    }
                >
                    Education & Counseling
                </button>


                <button
                    type="button"
                    className={
                        selectedCategory ===
                        "Professional Services"
                            ? "active-filter"
                            : ""
                    }
                    onClick={() =>
                        selectCategory(
                            "Professional Services"
                        )
                    }
                >
                    Professional Services
                </button>


                <button
                    type="button"
                    className={
                        selectedCategory ===
                        "Home & Repair"
                            ? "active-filter"
                            : ""
                    }
                    onClick={() =>
                        selectCategory(
                            "Home & Repair"
                        )
                    }
                >
                    Home & Repair
                </button>

            </div>


            {/* =========================
                PROVIDERS
            ========================= */}

            <section className="providers-section">

                <div className="providers-count">

                    <h2>
                        {selectedCategory === "All"
                            ? "All Providers"
                            : selectedCategory}
                    </h2>

                    <p>
                        {filteredProviders.length}{" "}
                        providers available
                    </p>

                </div>


                {/* LOADING */}

                {loading ? (

                    <div className="empty-state">

                        <p>
                            Loading providers...
                        </p>

                    </div>


                ) : filteredProviders.length === 0 ? (

                    <div className="empty-state">

                        <h2>
                            No Providers Found
                        </h2>

                        <p>
                            Try another service, provider
                            name, location or category.
                        </p>

                    </div>


                ) : (

                    <div className="providers-list">

                        {filteredProviders.map(
                            (provider) => (

                                <div
                                    className="provider-card-large"
                                    key={provider.id}
                                >

                                    {/* PROVIDER TOP */}

                                    <div className="provider-top">

                                        <div className="provider-avatar">

                                            {provider.name
                                                ?.charAt(0)
                                                ?.toUpperCase()}

                                        </div>


                                        <div className="provider-main-info">

                                            <h3>
                                                {provider.name}
                                            </h3>

                                            <p className="provider-service">

                                                {provider.serviceType}

                                            </p>

                                            <span className="provider-category">

                                                {provider.category}

                                            </span>

                                        </div>


                                        <div className="provider-rating">

                                            ⭐ {provider.rating}

                                        </div>

                                    </div>


                                    {/* DETAILS */}

                                    <div className="provider-details">

                                        <div>

                                            <span>
                                                📍
                                            </span>

                                            {provider.location}

                                        </div>


                                        <div>

                                            <span>
                                                💼
                                            </span>

                                            {provider.experience}

                                        </div>

                                    </div>


                                    {/* ACTIONS */}

                                    <div className="provider-actions">

                                        <Link
                                            to={`/provider/${provider.id}`}
                                            className="profile-btn"
                                        >
                                            View Profile
                                        </Link>


                                        <Link
                                            to={`/book-appointment/${provider.id}`}
                                            className="book-btn"
                                        >
                                            Book Appointment
                                        </Link>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                )}

            </section>

        </div>

    );

}

export default Providers;