// ======= Swiper Slider =======  //

$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
});

// ======= Nav Manu =======  //

$(document).ready(function () {
  const menuBtn = document.getElementById("menu");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // $(document).on('click', '.aside .nav li', function(){
  //   $(this).addClass('active').siblings().removeClass('active')
  // });

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("li");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });

  // ======= To Top Circle Button =======  //

  $(document).ready(function () {
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();

    progressPath.style.strokeDasharray = pathLength + " " + pathLength;

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();

    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 500;

    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });

    jQuery(".progress-wrap").on("click", function (event) {
      jQuery("html, body").animate(
        {
          scrollTop: 0,
        },
        duration
      );
    });
  });
});

//  ======= counterUp =======  //

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// ======= Typing Text =======  //

$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: [
      "",
      "Web Designer",
      "Web Developer",
      "Wordpress Designer",
      "Wordpress Developer",
      "",
    ],
    typeSpeed: 150,
    BackSpeed: 60,
    loop: true,
  });
});

// ======= wow js =======  //

$(document).ready(function () {
  new WOW().init();
});
