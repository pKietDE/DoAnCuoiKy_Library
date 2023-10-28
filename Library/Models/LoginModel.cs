using System.ComponentModel.DataAnnotations;

namespace Library.Models
{
    public class LoginModel
    {
        [Key]
        [Display(Name = " Tên Đăng Nhập ")]
        [Required(ErrorMessage = " Bạn Phải Nhập Tài Khoản")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Bạn Phải Nhập Mật Khẩu")]
        [Display(Name = "Mật Khẩu")]
        public string Password { get; set; }
    }
}