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
    
    public partial class BanSach
    {
        public int IdSachBan { get; set; }
        public Nullable<int> IdSach { get; set; }
        public Nullable<System.DateTime> NgayBan { get; set; }
        public Nullable<int> SoLuongBan { get; set; }
        public Nullable<decimal> GiaTien { get; set; }
        public Nullable<decimal> TongTien { get; set; }
        public string TenKhachHang { get; set; }
        public string EmailKhachHang { get; set; }
    
        public virtual Book Book { get; set; }
    }
}
