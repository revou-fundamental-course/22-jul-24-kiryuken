document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdown-button");
  const dropdownMenu = document.getElementById("dropdown-menu");

  dropdownButton.addEventListener("click", function () {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  dropdownMenu.addEventListener("click", function (e) {
    if (e.target.classList.contains("dropdown-item")) {
      dropdownButton.textContent = e.target.textContent;
      dropdownMenu.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (
      !dropdownButton.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const targetSection = document.getElementById(sectionId);
  const rect = targetSection.getBoundingClientRect();
  const inViewport =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  if (!inViewport) {
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  }
}

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".kotak-gambar .konten");
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const carouselImages = document.querySelector(".kotak-gambar");
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto slide
setInterval(() => {
  nextSlide();
}, 3000);

function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  let isValid = true;

  // Validate Name
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("nameError");
  if (name.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Validate Email
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Validate Interest
  const interest = document.getElementById("interest").value;
  const interestError = document.getElementById("interestError");
  if (interest === "") {
    interestError.style.display = "block";
    isValid = false;
  } else {
    interestError.style.display = "none";
  }

  if (isValid) {
    // If the form is valid, you can submit it here or handle the data as needed
    alert("Form submitted successfully!");
    document.querySelector(".form-contact").reset(); // Reset the form fields
  }
}
