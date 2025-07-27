const readmore1 = document.getElementById("one");
// const readmore2 = document.getElementById("two");
// const readmore3 = document.getElementById("three");
// const readmore4 = document.getElementById("four");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

readmore1.addEventListener("click", function() {
    popup.style.display = "block";
    overlay.style.display = "block";
});