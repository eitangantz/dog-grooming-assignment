import React, { useState, useEffect } from "react";
import axios from "axios";

function AppointmentForm({ token, selectedAppointment, setAppointments }) {
  const [customerName, setCustomerName] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  useEffect(() => {
    if (selectedAppointment) {
      setCustomerName(selectedAppointment.customerName);
      setScheduledTime(
        new Date(selectedAppointment.scheduledTime)
          .toISOString()
          .substring(0, 16)
      );
    }
  }, [selectedAppointment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedAppointment) {
        await axios.put(
          `http://localhost:5000/api/appointments/${selectedAppointment.appointmentId}`,
          {
            customerName,
            scheduledTime,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/appointments",
          {
            customerName,
            scheduledTime,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAppointments((prev) => [...prev, response.data]);
      }
    } catch (error) {
      alert("Error saving appointment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={scheduledTime}
        onChange={(e) => setScheduledTime(e.target.value)}
        required
      />
      <button type="submit">
        {selectedAppointment ? "Update" : "Add"} Appointment
      </button>
    </form>
  );
}

export default AppointmentForm;
