import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentForm from "./AppointmentForm";

function Dashboard({ token }) {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/appointments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAppointments(response.data);
    };

    fetchAppointments();
  }, [token]);

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointments(
        appointments.filter((appointment) => appointment.appointmentId !== id)
      );
    } catch (error) {
      alert("Error deleting appointment");
    }
  };

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.appointmentId}>
            {appointment.customerName} -{" "}
            {new Date(appointment.scheduledTime).toLocaleString()}
            <button onClick={() => setSelectedAppointment(appointment)}>
              Edit
            </button>
            <button
              onClick={() => deleteAppointment(appointment.appointmentId)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2>{selectedAppointment ? "Edit" : "Add"} Appointment</h2>
      <AppointmentForm
        token={token}
        selectedAppointment={selectedAppointment}
        setAppointments={setAppointments}
      />
    </div>
  );
}

export default Dashboard;
