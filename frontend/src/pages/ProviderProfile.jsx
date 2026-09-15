import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProviderById } from "../services/api";

function ProviderProfile() {

    const { providerId } = useParams();

    const [provider, setProvider] = useState(null);
    const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
    useEffect(() => {

        async function loadProvider() {

            try {

                const data =
                    await getProviderById(providerId);

                setProvider(data);

            } catch (error) {

                console.error(
                    "Error loading provider:",
                    error
                );
            setError(
                "Unableto load provider details.Please try again.");

            } finally {

                setLoading(false);

            }
        }

        loadProvider();

    }, [providerId]);


    if (loading) {

        return (
            <div className="provider-profile-page">

                <div className="profile-message">

                    <h2>Loading Provider...</h2>

                    <p>
                        Please wait while we load the
                        provider details.
                    </p>

                </div>

            </div>
        );
    }


    if (error) {

        return (
            <div className="provider-profile-page">

                <div className="profile-message">

                    <h2>
                        Something Went Wrong
                    </h2>

                    <p>
                        {error}
                    </p>

                    <Link
                        to="/providers"
                        className="back-providers-btn"
                    >
                        ← Back to Providers
                    </Link>

                </div>

            </div>
        );
    }


    if (!provider) {

        return (
            <div className="provider-profile-page">

                <div className="profile-message">

                    <h2>
                        Provider Not Found
                    </h2>

                    <p>
                        The provider you are looking for
                        does not exist.
                    </p>

                    <Link
                        to="/providers"
                        className="back-providers-btn"
                    >
                        ← Back to Providers
                    </Link>

                </div>

            </div>
        );
    }
    return (

        <div className="provider-profile-page">

            <div className="provider-profile-card">


                {/* PROFILE HEADER */}

                <div className="profile-header">

                    <div className="profile-avatar">

                        {provider.name
                            ?.charAt(0)
                            ?.toUpperCase()}

                    </div>


                    <div className="profile-title">

                        <h1>
                            {provider.name}
                        </h1>

                        <p className="profile-service">
                            {provider.serviceType}
                        </p>

                        <span className="profile-category">
                            {provider.category}
                        </span>

                    </div>


                    <div className="profile-rating">

                        ⭐ {provider.rating}

                        <span>
                            / 5
                        </span>

                    </div>

                </div>



                {/* PROVIDER DETAILS */}

                <div className="profile-details-grid">


                    <div className="profile-detail-box">

                        <div className="detail-icon">
                            📍
                        </div>

                        <div>

                            <h3>
                                Location
                            </h3>

                            <p>
                                {provider.location}
                            </p>

                        </div>

                    </div>



                    <div className="profile-detail-box">

                        <div className="detail-icon">
                            💼
                        </div>

                        <div>

                            <h3>
                                Experience
                            </h3>

                            <p>
                                {provider.experience}
                            </p>

                        </div>

                    </div>



                    <div className="profile-detail-box">

                        <div className="detail-icon">
                            🛠️
                        </div>

                        <div>

                            <h3>
                                Service
                            </h3>

                            <p>
                                {provider.serviceType}
                            </p>

                        </div>

                    </div>



                    <div className="profile-detail-box">

                        <div className="detail-icon">
                            ⭐
                        </div>

                        <div>

                            <h3>
                                Rating
                            </h3>

                            <p>
                                {provider.rating} / 5
                            </p>

                        </div>

                    </div>

                </div>



                {/* ABOUT */}

                <div className="profile-about">

                    <h2>
                        About Provider
                    </h2>

                    <p>

                        {provider.name} provides
                        professional{" "}

                        {provider.serviceType
                            ?.toLowerCase()}

                        {" "}services under the{" "}

                        {provider.category}

                        {" "}category. With{" "}

                        {provider.experience}

                        {" "}of experience, the provider
                        is available for appointment
                        booking.

                    </p>

                </div>



                {/* ACTIONS */}

                <div className="profile-actions">

                    <Link
                        to="/providers"
                        className="back-providers-btn"
                    >
                        ← Back to Providers
                    </Link>


                    <Link
                        to={`/book-appointment/${provider.id}`}
                        className="profile-book-btn"
                    >
                        Book Appointment
                    </Link>

                </div>


            </div>

        </div>

    );
}

export default ProviderProfile;