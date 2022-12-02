const scrollBtn = document.querySelector(".scroll-to-top");

const refreshButtonVisibility = () => {
  if (document.documentElement.scrollTop >= 150) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.stylle.display = "block";
  }
};


scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
});