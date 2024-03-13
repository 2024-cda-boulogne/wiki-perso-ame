

// Modale

const modal = document.getElementById("myModal");
const images = document.getElementsByClassName("article-photo")
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
}


modal.addEventListener("click", function (event) {
    if (event.target === modalImg) {
        return;
    }
    modal.style.display = "none";
});
