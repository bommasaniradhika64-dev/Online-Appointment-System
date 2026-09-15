const API_BASE_URL = "http://localhost:8080/api";

export async function registerUser(userData) {

    const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text);
    }

    return JSON.parse(text);
}

// Login User
export async function loginUser(userData) {

    const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text);
    }

    return JSON.parse(text);
}

// Book Appointment
export async function bookAppointment(appointmentData) {

    const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentData)
    });

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text);
    }

    return JSON.parse(text);
}
// Get User Appointments
export async function getUserAppointments(userId) {
    const response = await fetch(
        `${API_BASE_URL}/appointments/user/${userId}`
    );

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text);
    }

    return JSON.parse(text);
}
// Cancel Appointment
export async function cancelAppointment(appointmentId) {
    const response = await fetch(
        `${API_BASE_URL}/appointments/${appointmentId}/cancel`,
        {
            method: "PUT"
        }
    );

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text);
    }

    return JSON.parse(text);
}
// Get All Providers
export async function getAllProviders() {
    const response = await fetch(`${API_BASE_URL}/providers`);

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text);
    }

    return JSON.parse(text);
}
// Get Provider By ID
// Get Provider By ID
export async function getProviderById(providerId) {

    const response = await fetch(
        `${API_BASE_URL}/providers/${providerId}`
    );

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text);
    }

    return JSON.parse(text);
}
