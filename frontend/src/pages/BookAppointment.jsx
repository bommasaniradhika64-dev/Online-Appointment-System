import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProviderById, bookAppointment } from "../services/api";

function BookAppointment() {

    const { providerId } = useParams();
    const navigate = useNavigate();

    const [provider, setProvider] = useState(null);
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState(false);
    const [error, setError] = useState("");

    const [service, setService] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [reason, setReason] = useState("");

    useEffect(() => {

        async function loadProvider() {

            try {

                const data =
                    await getProviderById(providerId);

                setProvider(data);
                setService(data.serviceType || "");

            } catch (error) {

                console.error(
                    "Error loading provider:",
                    error
                );

                setError(
                    "Unable to load provider details. Please try again."
                );

            } finally {

                setLoading(false);

            }
        }

        loadProvider();

    }, [providerId]);


    function getTodayDate() {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    async function handleSubmit(event) {

        event.preventDefault();

        const user =
            JSON.parse(localStorage.getItem("user"));

        const isLoggedIn =
            localStorage.getItem("isLoggedIn") === "true";


        if (!isLoggedIn || !user) {

            alert(
                "Please login before booking an appointment."
            );

            navigate("/login");

            return;
        }


        if (
            !service ||
            !appointmentDate ||
            !appointmentTime
        ) {

            alert(
                "Please fill all required fields."
            );

            return;
        }


        try {

            setBooking(true);


            const appointmentData = {

                userId: user.id,

                providerId: Number(providerId),

                service: service,

                appointmentDate: appointmentDate,

                appointmentTime: appointmentTime,

                reason: reason

            };


            console.log(
                "Booking appointment:",
                appointmentData
            );


            await bookAppointment(
                appointmentData
            );


            alert(
                "Appointment booked successfully!"
            );


            navigate("/my-appointments");


        } catch (error) {

            console.error(
                "Booking error:",
                error
            );

            alert(error.message);

        } finally {

            setBooking(false);

        }
    }


    if (loading) {

        return (
            <div className="booking-page">

                <div className="booking-message">

                    <h2>
                        Loading...
                    </h2>

                    <p>
                        Loading provider details.
                    </p>

                </div>

            </div>
        );
    }


    if (error) {

        return (
            <div className="booking-page">

                <div className="booking-message">

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
            <div className="booking-page">

                <div className="booking-message">

                    <h2>
                        Provider Not Found
                    </h2>

                    <p>
                        We could not find this provider.
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

        <div className="booking-page">

            <div className="booking-container">


                {/* LEFT SIDE - PROVIDER */}

                <div className="booking-provider-card">

                    <div className="booking-provider-avatar">

                        {provider.name
                            ?.charAt(0)
                            ?.toUpperCase()}

                    </div>

                    <h2>
                        {provider.name}
                    </h2>

                    <p className="booking-provider-service">
                        {provider.serviceType}
                    </p>

                    <span className="booking-provider-category">
                        {provider.category}
                    </span>


                    <div className="booking-provider-info">

                        <div>
                            <span>📍</span>
                            <div>
                                <small>Location</small>
                                <strong>
                                    {provider.location}
                                </strong>
                            </div>
                        </div>


                        <div>
                            <span>💼</span>
                            <div>
                                <small>Experience</small>
                                <strong>
                                    {provider.experience}
                                </strong>
                            </div>
                        </div>


                        <div>
                            <span>⭐</span>
                            <div>
                                <small>Rating</small>
                                <strong>
                                    {provider.rating} / 5
                                </strong>
                            </div>
                        </div>

                    </div>


                    <Link
                        to={`/provider/${provider.id}`}
                        className="view-profile-small"
                    >
                        View Provider Profile
                    </Link>

                </div>



                {/* RIGHT SIDE - BOOKING FORM */}

                <div className="booking-form-card">

                    <div className="booking-heading">

                        <h1>
                            Book Appointment
                        </h1>

                        <p>
                            Choose a convenient date and
                            time for your appointment.
                        </p>

                    </div>


                    <form
                        onSubmit={handleSubmit}
                        className="booking-form"
                    >


                        {/* SERVICE */}

                        <div className="form-group">

                            <label>
                                Service
                            </label>

                            <select
                                value={service}
                                onChange={(event) =>
                                    setService(
                                        event.target.value
                                    )
                                }
                                required
                            >

                                <option value="">
                                    Select Service
                                </option>

                                <option
                                    value={provider.serviceType}
                                >
                                    {provider.serviceType}
                                </option>

                            </select>

                        </div>



                        {/* DATE */}

                        <div className="form-group">

                            <label>
                                Appointment Date
                            </label>

                            <input
                                type="date"
                                value={appointmentDate}
                                min={getTodayDate()}
                                onChange={(event) =>
                                    setAppointmentDate(
                                        event.target.value
                                    )
                                }
                                required
                            />

                        </div>



                        {/* TIME */}

                        <div className="form-group">

                            <label>
                                Appointment Time
                            </label>

                            <input
                                type="time"
                                value={appointmentTime}
                                onChange={(event) =>
                                    setAppointmentTime(
                                        event.target.value
                                    )
                                }
                                required
                            />

                        </div>



                        {/* REASON */}

                        <div className="form-group">

                            <label>
                                Reason / Notes
                                <span>
                                    {" "}(Optional)
                                </span>
                            </label>

                            <textarea
                                value={reason}
                                onChange={(event) =>
                                    setReason(
                                        event.target.value
                                    )
                                }
                                placeholder="Tell us briefly about your appointment..."
                                rows="4"
                            />

                        </div>



                        {/* BUTTON */}

                        <button
                            type="submit"
                            className="confirm-booking-btn"
                            disabled={booking}
                        >

                            {booking
                                ? "Booking..."
                                : "Confirm Appointment"}

                        </button>


                        <Link
                            to={`/provider/${provider.id}`}
                            className="cancel-booking-link"
                        >
                            ← Back to Provider Profile
                        </Link>

                    </form>

                </div>

            </div>

        </div>

    );
}

export default BookAppointment;