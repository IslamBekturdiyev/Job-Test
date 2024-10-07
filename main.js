// slideshow jquery codes
$(document).ready(function () {
  $(".slideshow").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $("#prev-button"),
    nextArrow: $("#next-button"),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })
})

// accordion function
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling // Get the corresponding body

    // Toggle the display of the accordion body
    body.style.display = body.style.display === "block" ? "none" : "block"

    // Roating the icon when accordion opened
    const toggleIcon = header.querySelector(".toggle")
    toggleIcon.classList.toggle("rotate")
  })
})
