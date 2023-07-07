document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#menu").addEventListener("click", function () {
    this.classList.toggle("fa-times");
    document.querySelector("header").classList.toggle("toggle");
  });

  window.addEventListener("scroll", function () {
    document.querySelector("#menu").classList.remove("fa-times");
    document.querySelector("header").classList.remove("toggle");
  });

  var links = document.querySelectorAll('a[href*="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var target = document.querySelector(this.getAttribute("href"));
      var offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
});
