import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProviders } from "../services/api";

function AdminDashboard() {

    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadProviders();

    }, []);

    async function loadProviders() {

        try {

            const data = await getAllProviders();

            setProviders(data);

        } catch (error) {

            console.error("Error loading providers:", error);

        } finally {

            setLoading(false);

        }
    }

    return (

        <div className="admin-dashboard">

            {/* HEADER */}

            <section className="page-header">

                <h1>Admin Dashboard</h1>

                <p>
                    Manage service providers and appointments
                </p>

            </section>


            {/* DASHBOARD CARDS */}

            <section className="admin-stats">

                <div className="admin-stat-card">

                    <div className="admin-stat-icon">
                        👨‍⚕️
                    </div>

                    <div>
                        <h3>Total Providers</h3>

                        <p>
                            {loading ? "..." : providers.length}
                        </p>
                    </div>

                </div>


                <div className="admin-stat-card">

                    <div className="admin-stat-icon">
                        📅
                    </div>

                    <div>
                        <h3>Appointments</h3>

                        <p>Coming Soon</p>
                    </div>

                </div>


                <div className="admin-stat-card">

                    <div className="admin-stat-icon">
                        🏷️
                    </div>

                    <div>
                        <h3>Categories</h3>

                        <p>5</p>
                    </div>

                </div>

            </section>


            {/* ADMIN ACTIONS */}

            <section className="admin-actions-section">

                <h2>Provider Management</h2>

                <div className="admin-action-buttons">

                    <Link
                        to="/admin/providers/add"
                        className="admin-primary-btn"
                    >
                        + Add Provider
                    </Link>

                    <Link
                        to="/admin/providers"
                        className="admin-secondary-btn"
                    >
                        Manage Providers
                    </Link>

                </div>

            </section>


            {/* PROVIDER PREVIEW */}

            <section className="admin-provider-section">

                <div className="admin-section-header">

                    <div>

                        <h2>Recent Providers</h2>

                        <p>
                            Providers currently available in AppointEase
                        </p>

                    </div>

                    <Link
                        to="/admin/providers"
                        className="admin-view-all"
                    >
                        View All
                    </Link>

                </div>


                {loading ? (

                    <p className="admin-loading">
                        Loading providers...
                    </p>

                ) : providers.length === 0 ? (

                    <div className="admin-empty">

                        <h3>No Providers</h3>

                        <p>
                            Add your first service provider.
                        </p>

                    </div>

                ) : (

                    <div className="admin-provider-grid">

                        {providers.slice(0, 6).map((provider) => (

                            <div
                                className="admin-provider-card"
                                key={provider.id}
                            >

                                <div className="admin-provider-avatar">
                                    {provider.name.charAt(0)}
                                </div>

                                <div className="admin-provider-info">

                                    <h3>
                                        {provider.name}
                                    </h3>

                                    <p>
                                        {provider.serviceType}
                                    </p>

                                    <span>
                                        {provider.category}
                                    </span>

                                </div>

                                <div className="admin-provider-rating">
                                    ⭐ {provider.rating}
                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>

        </div>
    );
}

export default AdminDashboard;