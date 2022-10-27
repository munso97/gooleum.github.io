$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: null,
    navigation: {
      textColor: "#000",
      bulletsColor: "#000",
      position: "right",
    },
    anchors: ["home", "about", "skills", "portfolio", "contact", "footer"],
    sectionsColor: ["white", "white", "white", "white", "white", "white"],
    loopTop: true,
    loopBottom: true,
  });
});

const body = document.querySelector("#pagepiling");
const toggleBtn = document.querySelector('.nav-icon');
const menu = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

body.addEventListener("click", () => {
  menu.classList.remove("active");
});

// typing
$(".type-it").typeIt({
  strings: ["UI Designer.", " Web Designer."],
  loop: true,
  breakLines: false,
  speed: 250,
  // cursor: false
});


// About Profile
const sociability = document.querySelector(".about_info ul li:nth-child(1)");
const endeavoring = document.querySelector('.about_info ul li:nth-child(2)');
const passionate = document.querySelector(".about_info ul li:nth-child(3)");
const creative = document.querySelector(".about_info ul li:nth-child(4)");
const about_profile = document.querySelector('.about_profile');

// Sociability 사회적인
sociability.addEventListener("mouseenter", function () {
  (about_profile.style.backgroundImage = `url(../images/about/communication.gif)`),
  $(".about_info ul li:nth-child(1) img").attr(
    "src",
    "../images/about/chat-blue.png"
  );
});

sociability.addEventListener("mouseleave", function () {
  (about_profile.style.backgroundImage = `url(../images/about/profile.png)`),
  $(".about_info ul li:nth-child(1) img").attr(
    "src",
    "../images/about/chat.png"
  );
});

// Endeavoring 도전적인
endeavoring.addEventListener("mouseenter", function () {
  about_profile.style.backgroundImage = `url(../images/about/animation.gif)`,
    $(".about_info ul li:nth-child(2) img").attr("src", "../images/about/chart-blue.png");
});

endeavoring.addEventListener("mouseleave", function () {
  (about_profile.style.backgroundImage = `url(../images/about/profile.png)`),
  $(".about_info ul li:nth-child(2) img").attr(
    "src",
    "../images/about/chart.png"
  );
});

// Passionate 열정
passionate.addEventListener("mouseenter", function () {
  (about_profile.style.backgroundImage = `url(../images/about/run.gif)`),
  $(".about_info ul li:nth-child(3) img").attr(
    "src",
    "../images/about/heart-blue.png"
  );
});

passionate.addEventListener("mouseleave", function () {
  (about_profile.style.backgroundImage = `url(../images/about/profile.png)`),
  $(".about_info ul li:nth-child(3) img").attr(
    "src",
    "../images/about/heart.png"
  );
});

// creative 열정
creative.addEventListener("mouseenter", function () {
  (about_profile.style.backgroundImage = `url(../images/about/Creative.gif)`),
  $(".about_info ul li:nth-child(4) img").attr(
    "src",
    "../images/about/light-blue.png"
  );
});

creative.addEventListener("mouseleave", function () {
  (about_profile.style.backgroundImage = `url(../images/about/profile.png)`),
  $(".about_info ul li:nth-child(4) img").attr(
    "src",
    "../images/about/light.png"
  );
});


// Progress *********************************************************
let controller = new ScrollMagic.Controller();

let bar1 = $("#skills .skills_bars1 li:nth-child(1) .progress-bar");
let bar2 = $("#skills .skills_bars1 li:nth-child(2) .progress-bar");
let bar3 = $("#skills .skills_bars1 li:nth-child(3) .progress-bar");
let bar4 = $("#skills .skills_bars1 li:nth-child(4) .progress-bar");
let bar5 = $("#skills .skills_bars2 li:nth-child(1) .progress-bar");
let bar6 = $("#skills .skills_bars2 li:nth-child(2) .progress-bar");
let bar7 = $("#skills .skills_bars2 li:nth-child(3) .progress-bar");
let bar8 = $("#skills .skills_bars2 li:nth-child(4) .progress-bar");
let tl = new TimelineMax();

tl.fromTo(bar1, 1, {
    width: "0%"
  }, {
    width: "90%"
  }, 0.5)
  .fromTo(bar2, 1, {
    width: "0%"
  }, {
    width: "92%"
  }, 1)
  .fromTo(bar3, 1, {
    width: "0%"
  }, {
    width: "79%"
  }, 1.5)
  .fromTo(bar4, 1, {
    width: "0%"
  }, {
    width: "75%"
  }, 2)
  .fromTo(bar5, 1, {
    width: "0%"
  }, {
    width: "70%"
  }, 0.5)
  .fromTo(bar6, 1, {
    width: "0%"
  }, {
    width: "75%"
  }, 1)
  .fromTo(bar7, 1, {
    width: "0%"
  }, {
    width: "86%"
  }, 1.5)
  .fromTo(bar8, 1, {
    width: "0%"
  }, {
    width: "90%"
  }, 1.5);

let scene = new ScrollMagic.Scene({
    triggerElement: ".skills skill-box:nth-child(3)",
    triggerHook: 1
  })

  .setTween(tl)
  .addTo(controller);



var $statItem = $(".progress_number");

$statItem.each(function () {
  var currentItem = $(this),
    $rateNum = currentItem.attr("data-rate");

  $({
    mycount: 0
  }).animate({
    mycount: $rateNum
  }, {
    duration: 2500,
    progress: function () {
      var now = this.mycount;
      currentItem.text(Math.floor(now) + "%");
    }
  });
});


// Portfolio filter
$(".categories button").each(function () {
  $(this).click(function (e) {
    $(".categories button").removeClass("selected");
    $(this).addClass("selected");

    e.preventDefault();
  });
});


$(window).load(function () {
  $(".grid row").isotope({
    // options
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });
});

// Isotope Filter Setting
var grid = $(".grid");
var m1 = $("#all");
var m2 = $("#web");
var m3 = $("#app");
var m4 = $("#vue");

$(".grid-item a").magnificPopup({
  type: "inline",
  preload: false,
  closeOnBgClick: false,
  closeBtnInside: true,
  gallery: {
    enabled: true
  }
});

// 정렬 후 설정시작
// 1. 전체정렬 처리하기
m1.click(function (e) {
  // 아이소톱 정렬처리
  grid.isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    filter: ".grid-item"
  });

  // 매그니픽 팝업처리
  $(".grid-item a").magnificPopup({
    type: "inline",
    preload: false,
    closeOnBgClick: false,
    closeBtnInside: true,
    gallery: {
      enabled: true
    }
  });

  e.preventDefault();
});

// 2. 웹정렬 처리하기
m2.click(function (e) {
  // 아이소톱 정렬처리
  grid.isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    filter: ".web"
  });

  // 매그니틱 팝업처리
  $(".web a").magnificPopup({
    type: "inline",
    preload: false,
    closeOnBgClick: false,
    closeBtnInside: true,
    gallery: {
      enabled: true
    }
  });

  e.preventDefault();
});

m3.click(function (e) {
  // 아이소톱 정렬처리
  grid.isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    filter: ".app"
  });

  // 매그니틱 팝업처리
  $(".app a").magnificPopup({
    type: "inline",
    preload: false,
    closeOnBgClick: false,
    closeBtnInside: true,
    gallery: {
      enabled: true
    }
  });

  e.preventDefault();
});

m4.click(function (e) {
  // 아이소톱 정렬처리
  grid.isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    filter: ".vue"
  });

  // 매그니틱 팝업처리
  $(".vue a").magnificPopup({
    type: "inline",
    preload: false,
    closeOnBgClick: false,
    closeBtnInside: true,
    gallery: {
      enabled: true
    }
  });

  e.preventDefault();
});



// Darkmode
$(function () {
  let body = $(".section");
  let darkModeIcon = $(".dark_mode");
  let checkNum = 1;

  darkModeIcon.click(function () {
    if (checkNum == 1) {
      body.addClass("dark-item");

      // Video
      $("#video").attr("src", "../images/video/cloud_dark.mp4");
      $("#video_footer").attr("src", "../images/video/cloud_dark.mp4");

      // page
      $("#pp-nav li span").addClass("dark");

      // 메뉴바
      $(".nav-icon img").attr({
        src: "../images/header/navbar-darkmode.png",
      });

      // darkmode button
      $(".dark_mode img").attr({
        src: "../images/header/sun.png",
      });
      $(this).css("background-color", "rgb(90, 90, 90)");

      // 로고
      $(".logo").css("color", "rgb(90, 90, 90)");

      //about icon
      $(".about_info li:nth-child(1) img").attr({
        src: "../images/about/chat-white.png",
      });
      $(".about_info li:nth-child(2) img").attr({
        src: "../images/about/chart-white.png",
      });
      $(".about_info li:nth-child(3) img").attr({
        src: "../images/about/heart-white.png",
      });
      $(".about_info li:nth-child(4) img").attr({
        src: "../images/about/light-white.png",
      });

      // skills icon
      $(".skills>div:nth-child(1) img").attr({
        src: "../images/skills/design-white.png",
      });
      $(".skills>div:nth-child(2) img").attr({
        src: "../images/skills/coding-white.png",
      });
      $(".skills>div:nth-child(3) img").attr({
        src: "../images/skills/sass-white.png",
      });
      $(".skills>div:nth-child(4) img").attr({
        src: "../images/skills/responsive-white.png",
      });

      //portfolio
      $("#portfolio .mooneo img").attr({
        src: "../images/portfolio/mooneo_main_dark.png",
      });
      $("#portfolio .jiin img").attr({
        src: "../images/portfolio/jiin_main_dark.png",
      });

      checkNum = 0;
      
    } else {
      body.removeClass("dark-item");

      // Video
      $("#video").attr("src", "../images/video/cloud.mp4");
      $("#video_footer").attr("src", "../images/video/cloud.mp4");

      // page
      $("#pp-nav li span").removeClass("dark");

      // 메뉴바
      $(".nav-icon img").attr({
        src: "../images/header/navbar.png",
      });

      // darkmode button
      $(".dark_mode img").attr({
        src: "../images/header/moon.png",
      });
      $(this).css("background-color", "#000");

      // 로고
      $(".logo").css("color", "#333");

      //about icon
      $(".about_info li:nth-child(1) img").attr({
        src: "../images/about/chat.png",
      });
      $(".about_info li:nth-child(2) img").attr({
        src: "../images/about/chart.png"
      });
      $(".about_info li:nth-child(3) img").attr({
        src: "../images/about/heart.png"
      });
      $(".about_info li:nth-child(4) img").attr({
        src: "../images/about/light.png"
      });

      // skills icon
      $(".skills>div:nth-child(1) img").attr({
        src: "../images/skills/design.png",
      });
      $(".skills>div:nth-child(2) img").attr({
        src: "../images/skills/coding.png",
      });
      $(".skills>div:nth-child(3) img").attr({
        src: "../images/skills/sass.png",
      });
      $(".skills>div:nth-child(4) img").attr({
        src: "../images/skills/responsive.png",
      });

      //portfolio
      $("#portfolio .mooneo img").attr({
        src: "../images/portfolio/mooneo_main.png",
      });
      $("#portfolio .jiin img").attr({
        src: "../images/portfolio/jiin_main.png",
      });


      checkNum = 1;
    }
  });
});

// Contact

$(document).ready(function () {
  $("form")
    .submit(function () {
      alert("이메일이 전송되었습니다.");
      setTimeout(function () {
        document.getElementById("myform").reset();
      }, 0)
    })
});