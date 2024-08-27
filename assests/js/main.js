

//   hamburger toggle on mobile

const open_button = document.querySelector(".open_button");
const close_button = document.querySelector(".close_button");
const mobile_nav = document.querySelector(".mobile_nav");

open_button.addEventListener("click", () => {
  mobile_nav.classList.add("hamburger_visible");
  close_button.style.display = "flex";
  open_button.style.display = "none";
});
close_button.addEventListener("click", () => {
  mobile_nav.classList.remove("hamburger_visible");
  close_button.style.display = "none";
  open_button.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  // Add active class to current page links
  const addActiveClass = (selector) => {
    document.querySelectorAll(selector).forEach((link) => {
      console.log(link);
      if (link.getAttribute("href") === currentPage) {
        link.parentElement.classList.add("active");
      }
    });
  };

  addActiveClass(".nav ul li a");
  addActiveClass(".mobile_nav ul li a");
  addActiveClass(".bottom_nav ul li a");
});


// lightbox

$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "close"
        ],
        loop: true,
        protect: true
    });
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
