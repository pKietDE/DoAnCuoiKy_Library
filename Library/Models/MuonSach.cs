//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class MuonSach
    {
        public int IdMuonSach { get; set; }
        public Nullable<int> IdNguoiDoc { get; set; }
        public Nullable<int> IdSach { get; set; }
        public Nullable<System.DateTime> NgayMuon { get; set; }
        public Nullable<System.DateTime> NgayTra { get; set; }
        public string Status { get; set; }
    
        public virtual Book Book { get; set; }
        public virtual NguoiDoc NguoiDoc { get; set; }
    }
}