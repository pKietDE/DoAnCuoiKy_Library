var giohang = new Array();
document.getElementById("showgiohang").style.display ="none";
function addtocart(x) {
    var item = x.parentElement.children;
    var img = item[0].src;
    var tensp = item[1].innerText;
    var giasp = item[2].children[0].innerText;
    var slsp = item[3].value;

    //khai báo mảng con
   // var items = [img, tensp, giasp, slsp];
   //khai báo kiểu object
    var item = { img, tensp, giasp, slsp };
  
    showlengthgiohang();//show số chổ icon
    showgiohang();//show chi tiet gio hang

}
function showgiohang() {
    var strcart = "";
    for (var i = 0; i < giohang.length; i++) {
        // const items = Array[i];
        let j = i + 1;
        let hinhsp = "<img src='" + giohang[i]["img"] + "' width = '50'";
        let tensp = giohang[i]["tensp"];
        let giasp = giohang[i]["giasp"];
        let slsp = giohang[i]["slsp"];
        let thanhtien = giasp * slsp;

        strcart += "<tr>";
        strcart += "<td>" + j + "</td>";
        strcart += "<td>" + hinhsp + "<br>" + tensp + "</td > ";
        strcart += "<td>" + giasp + "</td > ";
        strcart += "<td>" + slsp + "</td > ";
        strcart += "<td>" + thanhtien + " </td > ";
        strcart += "<td><button id='btnr' onclick='remove()'>Xóa</button> </td > ";

        strcart += "</tr>";
        
    }
    document.getElementById("giohangchitiet").innerHTML = strcart;
}

function showlengthgiohang() {
    var countsp = giohang.length;
    document.getElementById("soluonghang").innerHTML = countsp;
}
function showhidecart() {
    var c = document.getElementById("showgiohang");
    if (c.style.display == "") {
      c.style.display = "none";

    }
    else {
        c.style.display = "";

    }
}
document.getElementById("readMore").addEventListener("click", function (e) {
    e.preventDefault();
    var content = document.querySelector(".content");
    if (content.style.maxHeight === "100px") {
        content.style.maxHeight = "100%"; // Hiển thị toàn bộ nội dung
        this.textContent = "Read Less";
    } else {
        content.style.maxHeight = "100px"; // Ẩn nội dung
        this.textContent = "Read More";
    }
});
let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let dots = document.querySelectorAll(".slider .dots li");



let active = 0;
let lenghtItems = items.length - 1

next.onclick = function () {
    if (active + 1 > lenghtItems) {
        active = 0;
    } else {
        active += 1;

    }
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active = active - 1 : lenghtItems;
    reloadSlider();
}
let refreshSlider = setInterval(() => { next.click() }, 5000)
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = - checkLeft + 'px';

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 5000);

}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
}
