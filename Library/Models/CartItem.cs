using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.Models
{
    public class CartItem
    {
        public int MaHh { get; set; }
        public string Ten { get; set; }
        public string Hinh { get; set; }
        public double DonGia { get; set; }
        public int SoLuong { get; set; }
        public double ThanhTien => SoLuong * DonGia;
    }
}