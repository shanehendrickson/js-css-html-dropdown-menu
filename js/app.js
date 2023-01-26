const menuBtn = document.getElementById("menuBtn");
const dropDownList = document.querySelector(".nav-links-container");

function toggle(){
  dropDownList.classList.toggle("hidden");
}

menuBtn.addEventListener("click", toggle)