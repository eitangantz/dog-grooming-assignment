using DogGroomingAPI.Data;
using DogGroomingAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DogGroomingAPI.Controllers
{
    [Authorize]  // Ensure only authenticated users can access this controller
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AppointmentsController(AppDbContext context)
        {
            _context = context;
        }

        // Get all appointments (optional filtering by customer name or date)
        [HttpGet]
        public IActionResult GetAppointments([FromQuery] string? customerName, [FromQuery] DateTime? date)
        {
            var query = _context.Appointments.AsQueryable();

            if (!string.IsNullOrEmpty(customerName))
            {
                query = query.Where(a => a.CustomerName.Contains(customerName));
            }

            if (date.HasValue)
            {
                query = query.Where(a => a.ScheduledTime.Date == date.Value.Date);
            }

            var appointments = query.ToList();

            return Ok(appointments);
        }

        // Add a new appointment
        [HttpPost]
        public IActionResult AddAppointment([FromBody] Appointment appointment)
        {
            // Get the logged-in user's ID
            var userId = int.Parse(User.FindFirstValue("UserId"));

            appointment.UserId = userId;
            appointment.CreatedTime = DateTime.Now;

            _context.Appointments.Add(appointment);
            _context.SaveChanges();

            return Ok(new { message = "Appointment added successfully" });
        }

        // Edit an appointment (only if it belongs to the logged-in user)
        [HttpPut("{id}")]
        public IActionResult UpdateAppointment(int id, [FromBody] Appointment updatedAppointment)
        {
            var userId = int.Parse(User.FindFirstValue("UserId"));
            var appointment = _context.Appointments.FirstOrDefault(a => a.AppointmentId == id && a.UserId == userId);

            if (appointment == null)
            {
                return Unauthorized("You do not have permission to update this appointment.");
            }

            appointment.CustomerName = updatedAppointment.CustomerName;
            appointment.ScheduledTime = updatedAppointment.ScheduledTime;

            _context.SaveChanges();

            return Ok(new { message = "Appointment updated successfully" });
        }

        // Delete an appointment (only if it belongs to the logged-in user)
        [HttpDelete("{id}")]
        public IActionResult DeleteAppointment(int id)
        {
            var userId = int.Parse(User.FindFirstValue("UserId"));
            var appointment = _context.Appointments.FirstOrDefault(a => a.AppointmentId == id && a.UserId == userId);

            if (appointment == null)
            {
                return Unauthorized("You do not have permission to delete this appointment.");
            }

            _context.Appointments.Remove(appointment);
            _context.SaveChanges();

            return Ok(new { message = "Appointment deleted successfully" });
        }
    }
}
