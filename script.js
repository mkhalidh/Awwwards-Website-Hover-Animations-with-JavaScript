document.querySelector(".left").addEventListener("mousemove", function () {
  document.querySelector(".c-center-one").style.height = "120vh";
  document.querySelector("#lft-btn").style.backgroundColor = "#333";
  document.querySelector("#lft-btn").style.color = "#fff";

  //   img-one
  document.querySelector("#one").style.width = "25vw";
  document.querySelector("#one").style.height = "25vh";
  document.querySelector("#one").style.opacity = "1";
  document.querySelector("#one").style.filter = "blur(0.5px)";

  //   document.querySelector(".left").style.cursor = "pointer";

  // img two
  document.querySelector("#two").style.width = "15vw";
  document.querySelector("#two").style.height = "17vh";
  document.querySelector("#two").style.opacity = "01";
  document.querySelector("#two").style.filter = "blur(10px)";

  // img three
  document.querySelector("#three").style.width = "10vw";
  document.querySelector("#three").style.height = "12vh";
  document.querySelector("#three").style.opacity = "01";
  document.querySelector("#three").style.filter = "blur(20px)";

  // img four
  document.querySelector("#four").style.width = "07vw";
  document.querySelector("#four").style.height = "7vh";
  document.querySelector("#four").style.opacity = "01";
  document.querySelector("#four").style.filter = "blur(35px)";
});

// lft leave mouse
document.querySelector(".left").addEventListener("mouseleave", function () {
  document.querySelector(".c-center-one").style.height = "0vh";
  document.querySelector(".left").style.cursor = "pointer";
  document.querySelector("#lft-btn").style.backgroundColor = "initial";
  document.querySelector("#lft-btn").style.color = "#333";

  //   img - one
  document.querySelector("#one").style.width = "20vw";
  document.querySelector("#one").style.height = "20vh";
  document.querySelector("#one").style.opacity = "0";
  document.querySelector("#one").style.filter = "blur(10px)";

  // img two
  document.querySelector("#two").style.width = "10vw";
  document.querySelector("#two").style.height = "10vh";
  document.querySelector("#two").style.opacity = "0";
  document.querySelector("#two").style.filter = "blur(25px)";

  // img three
  document.querySelector("#three").style.width = "08vw";
  document.querySelector("#three").style.height = "12vh";
  document.querySelector("#three").style.opacity = "0";
  document.querySelector("#three").style.filter = "blur(25px)";

  // img four
  document.querySelector("#four").style.width = "05vw";
  document.querySelector("#four").style.height = "5vh";
  document.querySelector("#four").style.opacity = "0";
  document.querySelector("#four").style.filter = "blur(45px)";
});

// for right
// move mouse
document.querySelector(".right").addEventListener("mousemove", function () {
  document.querySelector(".c-center-two").style.height = "120vh";
  document.querySelector("#rght-btn").style.backgroundColor = "#333";
  document.querySelector("#rght-btn").style.color = "#fff";

  //   document.querySelector(".left").style.cursor = "pointer";

  //   img-five
  document.querySelector("#five").style.width = "25vw";
  document.querySelector("#five").style.height = "25vh";
  document.querySelector("#five").style.opacity = "1";
  document.querySelector("#five").style.filter = "blur(0.5px)";

  //   document.querySelector(".left").style.cursor = "pointer";

  // img six
  document.querySelector("#six").style.width = "15vw";
  document.querySelector("#six").style.height = "17vh";
  document.querySelector("#six").style.opacity = "01";
  document.querySelector("#six").style.filter = "blur(10px)";

  // img seven
  document.querySelector("#seven").style.width = "10vw";
  document.querySelector("#seven").style.height = "12vh";
  document.querySelector("#seven").style.opacity = "01";
  document.querySelector("#seven").style.filter = "blur(20px)";

  // img eight
  document.querySelector("#eight").style.width = "07vw";
  document.querySelector("#eight").style.height = "7vh";
  document.querySelector("#eight").style.opacity = "01";
  document.querySelector("#eight").style.filter = "blur(35px)";
});

// rght
// leave mouse
document.querySelector(".right").addEventListener("mouseleave", function () {
  document.querySelector(".c-center-two").style.height = "0vh";
  //   document.querySelector(".left").style.cursor = "pointer";
  document.querySelector("#rght-btn").style.backgroundColor = "initial";
  document.querySelector("#rght-btn").style.color = "#333";

  //   img - five
  document.querySelector("#five").style.width = "20vw";
  document.querySelector("#five").style.height = "20vh";
  document.querySelector("#five").style.opacity = "0";
  document.querySelector("#five").style.filter = "blur(10px)";

  // img six
  document.querySelector("#six").style.width = "10vw";
  document.querySelector("#six").style.height = "10vh";
  document.querySelector("#six").style.opacity = "0";
  document.querySelector("#six").style.filter = "blur(25px)";

  // img seven
  document.querySelector("#seven").style.width = "08vw";
  document.querySelector("#seven").style.height = "12vh";
  document.querySelector("#seven").style.opacity = "0";
  document.querySelector("#seven").style.filter = "blur(25px)";

  // img eight
  document.querySelector("#eight").style.width = "05vw";
  document.querySelector("#eight").style.height = "5vh";
  document.querySelector("#eight").style.opacity = "0";
  document.querySelector("#eight").style.filter = "blur(45px)";
});
