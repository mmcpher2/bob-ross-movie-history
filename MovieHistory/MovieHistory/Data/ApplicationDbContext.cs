﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MovieHistory.Models;

namespace MovieHistory.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        // For DbSets: Include only the DbSets of the tables that you believe you are going to need to query

        public DbSet<Movie> Movie { get; set; }

        public DbSet<MovieUser> MovieUser { get; set; }

        public DbSet<Recommendation> Recommendation { get; set; }

        public DbSet<Movie> Movie { get; set; }
        public DbSet<MovieUser> MovieUser { get; set; }
        public DbSet<Recommendation> Recommendation { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
            builder.Entity<MovieUser>()
              .HasIndex(b => b.MovieUserId);
        }
    }
}
