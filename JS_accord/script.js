const accord = document.getElementsByClassName("accordion");
// let i;

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}