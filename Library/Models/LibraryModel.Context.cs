﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Library.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class LibraryStoreEntities : DbContext
    {
        public LibraryStoreEntities()
            : base("name=LibraryStoreEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<BanSach> BanSaches { get; set; }
        public virtual DbSet<BookReservation> BookReservations { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Contact> Contacts { get; set; }
        public virtual DbSet<LichSuMuon> LichSuMuons { get; set; }
        public virtual DbSet<MuonSach> MuonSaches { get; set; }
        public virtual DbSet<NguoiDoc> NguoiDocs { get; set; }
        public virtual DbSet<NhanVien> NhanViens { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<UserLogin> UserLogins { get; set; }

        public System.Data.Entity.DbSet<Library.Models.LoginModel> LoginModels { get; set; }
    }
}
