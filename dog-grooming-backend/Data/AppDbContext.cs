﻿using Microsoft.EntityFrameworkCore;
using DogGroomingAPI.Models;

namespace DogGroomingAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
    }
}
