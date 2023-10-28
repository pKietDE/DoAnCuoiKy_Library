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

