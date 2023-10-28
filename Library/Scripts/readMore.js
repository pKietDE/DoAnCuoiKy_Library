document.getElementById("read-more-checkbox").addEventListener("click", function (e) {
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