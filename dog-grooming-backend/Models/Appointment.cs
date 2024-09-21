using System;

namespace DogGroomingAPI.Models
{
    public class Appointment
    {
        public int AppointmentId { get; set; }
        public int UserId { get; set; } // Foreign key linking to the User
        public string CustomerName { get; set; }
        public DateTime ScheduledTime { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}
