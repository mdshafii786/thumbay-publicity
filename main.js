$(document).ready(function () {
  console.log("Thumbay Publicity site loaded!");
  // You can add interactive scripts here later
})

// Scroll animation effect
$(document).ready(function () {
  function revealOnScroll() {
    $(".reveal").each(function () {
      var windowBottom = $(window).scrollTop() + $(window).height();
      var elementTop = $(this).offset().top;

      if (elementTop < windowBottom - 50) {
        $(this).addClass("animate");
      }
    });
  }

  // Run on scroll + load
  $(window).on("scroll", revealOnScroll);
  revealOnScroll();
});