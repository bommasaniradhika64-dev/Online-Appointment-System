import { useEffect, useState } from "react";
import {
    getUserAppointments,
    cancelAppointment
} from "../services/api";

function MyAppointments() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cancellingId, setCancellingId] = useState(null);

    useEffect(() => {

        async function loadAppointments() {

            const user =
                JSON.parse(localStorage.getItem("user"));

            if (!user) {
                setLoading(false);
                return;
            }

            try {

                const data =
                    await getUserAppointments(user.id);

                setAppointments(data);

            } catch (error) {

                console.error(
                    "Appointments error:",
                    error
                );

                alert(error.message);

            } finally {

                setLoading(false);

            }
        }

        loadAppointments();

    }, []);


    async function handleCancel(appointmentId) {

        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this appointment?"
        );

        if (!confirmCancel) {
            return;
        }

        try {

            setCancellingId(appointmentId);

            const updatedAppointment =
                await cancelAppointment(appointmentId);

            setAppointments(
                (previousAppointments) =>
                    previousAppointments.map(
                        (appointment) =>
                            appointment.id === appointmentId
                                ? updatedAppointment
                                : appointment
                    )
            );

            alert(
                "Appointment cancelled successfully!"
            );

        } catch (error) {

            console.error(
                "Cancel appointment error:",
                error
            );

            alert(error.message);

        } finally {

            setCancellingId(null);

        }
    }


    if (loading) {

        return (
            <div className="appointments-page">

                <div className="appointments-message">

                    <h2>
                        Loading Appointments...
                    </h2>

                    <p>
                        Please wait while we load
                        your appointments.
                    </p>

                </div>

            </div>
        );
    }


    return (

        <div className="appointments-page">

            <div className="appointments-header">

                <h1>
                    My Appointments
                </h1>

                <p>
                    View and manage your booked appointments
                </p>

            </div>


            {appointments.length === 0 ? (

                <div className="appointments-message">

                    <div className="empty-appointment-icon">
                        📅
                    </div>

                    <h2>
                        No Appointments Yet
                    </h2>

                    <p>
                        You have not booked any appointments.
                    </p>

                </div>

            ) : (

                <div className="appointments-list">

                    {appointments.map(
                        (appointment) => (

                            <div
                                className="appointment-card"
                                key={appointment.id}
                            >

                                <div className="appointment-card-header">

                                    <div>

                                        <h2>
                                            {appointment.service}
                                        </h2>

                                        <p>
                                            Appointment #{appointment.id}
                                        </p>

                                    </div>


                                    <span
                                        className={
                                            appointment.status ===
                                            "CANCELLED"
                                                ? "status-cancelled"
                                                : "status-booked"
                                        }
                                    >
                                        {appointment.status}
                                    </span>

                                </div>


                                <div className="appointment-details">


                                    <div className="appointment-detail">

                                        <span className="appointment-icon">
                                            📅
                                        </span>

                                        <div>

                                            <small>
                                                Date
                                            </small>

                                            <strong>
                                                {
                                                    appointment.appointmentDate
                                                }
                                            </strong>

                                        </div>

                                    </div>



                                    <div className="appointment-detail">

                                        <span className="appointment-icon">
                                            🕐
                                        </span>

                                        <div>

                                            <small>
                                                Time
                                            </small>

                                            <strong>
                                                {
                                                    appointment.appointmentTime
                                                }
                                            </strong>

                                        </div>

                                    </div>



                                    <div className="appointment-detail">

                                        <span className="appointment-icon">
                                            📝
                                        </span>

                                        <div>

                                            <small>
                                                Reason
                                            </small>

                                            <strong>
                                                {
                                                    appointment.reason ||
                                                    "Not provided"
                                                }
                                            </strong>

                                        </div>

                                    </div>

                                </div>


                                {appointment.status !==
                                    "CANCELLED" && (

                                    <div className="appointment-actions">

                                        <button
                                            className="cancel-appointment-btn"
                                            onClick={() =>
                                                handleCancel(
                                                    appointment.id
                                                )
                                            }
                                            disabled={
                                                cancellingId ===
                                                appointment.id
                                            }
                                        >

                                            {cancellingId ===
                                            appointment.id
                                                ? "Cancelling..."
                                                : "Cancel Appointment"}

                                        </button>

                                    </div>

                                )}

                            </div>

                        )
                    )}

                </div>

            )}

        </div>
    );
}

export default MyAppointments;