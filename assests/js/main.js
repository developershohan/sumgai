document.addEventListener("DOMContentLoaded", function () {
  // Hamburger toggle on mobile
  const open_button = document.querySelector(".open_button");
  const close_button = document.querySelector(".close_button");
  const mobile_nav = document.querySelector(".mobile_nav");

  if (open_button && close_button && mobile_nav) {
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
  }

  // Current page highlight in navigation
  const currentPage = window.location.pathname.split("/").pop();
  const addActiveClass = (selector) => {
    document.querySelectorAll(selector).forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.parentElement.classList.add("active");
      }
    });
  };

  addActiveClass(".nav ul li a");
  addActiveClass(".mobile_nav ul li a");
  addActiveClass(".bottom_nav ul li a");

  // Lightbox initialization
  if (typeof $.fancybox === "function") {
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
  }

  // Back to top button
  const backToTopBtn = document.getElementById("back_to_top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Contact form submission reset
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
  }
});


// dropdown header mobile nav
document.addEventListener("DOMContentLoaded", function () {
  const toggleMenus = document.querySelectorAll(".toggle-menu");

  toggleMenus.forEach(toggleMenu => {
    toggleMenu.addEventListener("click", function () {
      const subMenu = this.nextElementSibling;
      const isOpen = this.getAttribute("data-menu-open") === "true";

      // Toggle the visibility of the submenu
      if (isOpen) {
        subMenu.classList.remove("show");
      } else {
        subMenu.classList.add("show");
      }

      // Update the data attribute
      this.setAttribute("data-menu-open", !isOpen);

      // Toggle the plus and minus icons
      const plusIcon = this.querySelector(".fa-plus");
      const minusIcon = this.querySelector(".fa-minus");

      plusIcon.classList.toggle("hidden");
      minusIcon.classList.toggle("hidden");
    });
  });
});
