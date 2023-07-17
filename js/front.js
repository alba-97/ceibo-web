"use strict";

document.addEventListener("DOMContentLoaded", function () {
  new ModalVideo(".js-modal-btn");
  window.addEventListener("scroll", navBehavior);
  window.addEventListener("load", navBehavior);

  function navBehavior() {
    if (window.scrollY > 5) {
      document.querySelector(".navbar").classList.add("active");
    } else {
      document.querySelector(".navbar").classList.remove("active");
    }

    if (window.scrollY > 1000) {
      document.querySelector("#scrollTop").classList.add("active");
    } else {
      document.querySelector("#scrollTop").classList.remove("active");
    }
  }
  document.getElementById("scrollTop").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
});
