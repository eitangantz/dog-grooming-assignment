namespace DogGroomingAPI.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; } // Store password hashes, not plain passwords
        public string FirstName { get; set; }
    }
}
