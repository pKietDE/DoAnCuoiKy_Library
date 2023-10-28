var giohang = new Array();
document.getElementById("showgiohang").style.display = "none";
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
    giohang.push(item)

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
        strcart += "<td><button onclick='xoasp(this)'>Xóa</button> </td > ";

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
function xoasp(x) {
    //xóa tr
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[1].innerText;

    tr.remove();


    //xóa mảng
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][1] == tensp) {
            giohang.splice(i, 1);
        }
    }
    // console.log(giohang)
}



