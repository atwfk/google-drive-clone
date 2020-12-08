$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 762) {
      $(".navbar").css({
        "background-color": "#fff",
        border: "1px solid gray",
      });
      $(".navbar .navbar-nav li a").css({
        color: "#555555",
        "font-size": "16px",
      });
      $(".navbar .navbar-nav li button").animate(
        {
          "margin-right": "0px",
        },
        500
      );
      $(".background-photo").css({ "padding-top": "60px" });
    }
    if ($(this).scrollTop() >= 50 && $(this).scrollTop() <= 100) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.9" });
    } else if ($(this).scrollTop() >= 100 && $(this).scrollTop() <= 150) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.8" });
    } else if ($(this).scrollTop() >= 150 && $(this).scrollTop() <= 200) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.7" });
    } else if ($(this).scrollTop() >= 200 && $(this).scrollTop() <= 250) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.6" });
    } else if ($(this).scrollTop() >= 250 && $(this).scrollTop() <= 300) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.5" });
    } else if ($(this).scrollTop() >= 300 && $(this).scrollTop() <= 350) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.4" });
    } else if ($(this).scrollTop() >= 350 && $(this).scrollTop() <= 400) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.3" });
    } else if ($(this).scrollTop() >= 400 && $(this).scrollTop() <= 450) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.2" });
    } else if ($(this).scrollTop() >= 450 && $(this).scrollTop() <= 500) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.1" });
    } else if ($(this).scrollTop() >= 500 && $(this).scrollTop() <= 550) {
      $(".background-photo .headline-cta-section").css({ opacity: "0.0" });
    } else {
      $(".background-photo .headline-cta-section").css({ opacity: "1" });
    }
  });
  $(".background-photo i").click(function () {
    $("html,body").animate(
      {
        scrollTop: 800,
      },
      600
    );
  });
});
