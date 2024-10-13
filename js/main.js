$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  if ($(window).width() >= 992) {
    sal({
      once: true,
    });
  } else {
    sal({
      once: true,
      disabled: true,
    });
  }
  /************************************ Header ************************************/
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $("#fixedNavbar ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 991) {
      $(".navbar").fadeOut(300);
      $(".overlay").fadeOut(300);
      $(".nav,.menu-btn").removeClass("active");
      $("body").removeClass("overflow");
    }
  });
  $(".menu-btn").on("click", function (e) {
    $(".navbar").fadeToggle(300);
    $(".overlay").fadeToggle(300);
    $(".nav,.menu-btn").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".overlay").on("click", function (e) {
    $(".navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".nav,.menu-btn").removeClass("active");
    $("body").removeClass("overflow");
  });
  /************************************ partners Slider ************************************/
  var partnersSwiper = new Swiper(".partners-slider .swiper", {
    a11y: {
      enabled: false,
    },
    autoplay: {
      enabled: true,
      delay: 0,
    },
    speed: 1000,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 4.5,
        spaceBetween: 15,
      },
      400: {
        slidesPerView: 5.5,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 8.5,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 12.5,
        spaceBetween: 35,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  // for counter //
  const sectionExists =
    document.getElementsByClassName("counter-cont").length > 0;

  if (sectionExists) {
    var a = 0;
    function countFunction() {
      $(".counter-num").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              if (this.countNum < 10) {
                $this.text("0" + Math.floor(this.countNum));
              } else {
                $this.text(Math.floor(this.countNum));
              }
            },
            complete: function () {
              if (this.countNum < 10) {
                $this.text("0" + this.countNum);
              } else {
                $this.text(this.countNum);
              }
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
    $(window).scroll(function () {
      var oTop = $(".counter-cont").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        countFunction();
      }
    });
    var oTop = $(".counter-cont").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      countFunction();
    }
  } else {
  }

  // end counter //
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
//mixitup
// var mixer = mixitup('.container');
var containerEl = document.querySelector("#mix-container");

var mixer = mixitup(containerEl, {
  animation: {
    effects: "fade scale(0.5)",
  },
});
