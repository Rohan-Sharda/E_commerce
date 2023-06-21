const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}
// const MainImg = document.getElementById("MainImg");
// const smallImg = document.querySelector(".small-img-group");
// smallImg.addEventListener("click", function (e) {
//   const child = e.target.closest(".small-img");
//   console.log(child);
//   MainImg.src = child.src;
// });
