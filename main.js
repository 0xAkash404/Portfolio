'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    if (modalImg && modalTitle && modalText) {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

      testimonialsModalFunc();
    }

  });

}

// add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// form submission handler
if (form) {
  form.addEventListener("submit", function (e) {
    formBtn.disabled = true;
    formBtn.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon><span>Message Sent!</span>';
    
    // Reset form after 2 seconds
    setTimeout(() => {
      form.reset();
      formBtn.setAttribute("disabled", "");
      formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
    }, 2000);
  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // Remove active class from all pages and nav links first
    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
      navigationLinks[j].classList.remove("active");
    }

    // Add active class to the clicked page and nav link
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      }
    }

  });
}



// theme toggle functionality
const themeToggle = document.querySelector("#theme-toggle");
const htmlElement = document.documentElement;

// Check if user has a saved theme preference
const savedTheme = localStorage.getItem("theme") || "dark";
htmlElement.classList.toggle("light-mode", savedTheme === "light");

// Theme toggle event listener
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    htmlElement.classList.toggle("light-mode");
    
    // Save the new theme preference
    const currentTheme = htmlElement.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
  });
}



// signature toggle functionality
const nameElement = document.querySelector(".name-signature-wrapper .name");
if (nameElement) {
  nameElement.addEventListener("click", function (e) {
    e.preventDefault();
    const wrapper = document.querySelector(".name-signature-wrapper");
    wrapper.classList.toggle("show-signature");
  });
}



// project image click handler - redirect to github
const projectLinks = document.querySelectorAll(".project-link");

for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (e) {
    const githubLink = this.getAttribute("data-github-link");
    if (githubLink && githubLink !== "https://github.com") {
      e.preventDefault();
      window.open(githubLink, "_blank");
    }
  });
}



// stack scroll buttons functionality
const stackContainer = document.getElementById("stack-container");
const stackScrollLeftBtn = document.getElementById("stack-scroll-left");
const stackScrollRightBtn = document.getElementById("stack-scroll-right");

if (stackContainer && stackScrollLeftBtn && stackScrollRightBtn) {
  const scrollAmount = 310; // pixels to scroll per click (one card width ~280px + gap 15px + padding)

  stackScrollLeftBtn.addEventListener("click", function () {
    stackContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  stackScrollRightBtn.addEventListener("click", function () {
    stackContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  // Optional: Update button states based on scroll position
  function updateScrollButtons() {
    stackScrollLeftBtn.disabled = stackContainer.scrollLeft === 0;
    stackScrollRightBtn.disabled = 
      stackContainer.scrollLeft >= (stackContainer.scrollWidth - stackContainer.clientWidth - 10);
  }

  stackContainer.addEventListener("scroll", updateScrollButtons);
  updateScrollButtons();
}