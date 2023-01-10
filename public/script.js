console.log("HEllo Public");
document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});
window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};
// Text Circle
let textArray = document
  .querySelector(".text-circle")
  .innerHTML.split("")
  .map(
    (item, index) =>
      `<span style="transform:rotate(${
        index * 13
      }deg)" key=${index} >${item}</span>`
  )
  .join("");
document.querySelector(".text-circle").innerHTML = textArray;

console.log("textArray: ", textArray);
