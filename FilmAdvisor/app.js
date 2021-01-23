const sliderimage = document.querySelectorAll(".sliderimage");
const slidercont = document.querySelector(".slidercont");
const nextbtn = document.querySelector(".nextbtn");
const prevbtn = document.querySelector(".prevbtn");
const dots = document.querySelector(".dots");

let numberOfImages = sliderimage.length;
let slideWidth = sliderimage[0].clientWidth;
let currentSlide = 0;


function slide() {

  sliderimage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  sliderimage[0].classList.add("active");

  createdots();
}

slide();


function createdots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  dots.children[0].classList.add("active");
}

nextbtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});

prevbtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
  slidercont.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

function setActiveClass() {
  let currentActive = document.querySelector(".sliderimage.active");
  currentActive.classList.remove("active");
  sliderimage[currentSlide].classList.add("active");

  let currentDot = document.querySelector(".dot.active");
  currentDot.classList.remove("active");
  dots.children[currentSlide].classList.add("active");
}


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navibar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function onoff() {
    var element = document.getElementById("navibar");
    var x = document.getElementById("foni");
    element.classList.toggle("navitog");
    x.classList.toggle("blury");
 }

function ena() {
    var pirveli = document.getElementById("kam");
    var meore = document.getElementById("enm");
    var mesame = document.getElementById("mkam");
    var meotxe = document.getElementById("menm");
    var mexute = document.getElementById("ka_dge");
    var meeqvse = document.getElementById("en_dge");
    var meshvide = document.getElementById("kabtn");
    var merve = document.getElementById("enbtn");
    var mecxre = document.getElementById("katext");
    var meate = document.getElementById("entext");
    var metertmete = document.getElementById("kazap");
    var metormete = document.getElementById("enzap");

    pirveli.classList.toggle("sufta");
    meore.classList.toggle("sufta");
    mesame.classList.toggle("sufta");
    meotxe.classList.toggle("sufta");
    mexute.classList.toggle("sufta");
    meeqvse.classList.toggle("sufta");
    meshvide.classList.toggle("sufta");
    merve.classList.toggle("sufta");
    mecxre.classList.toggle("sufta");
    meate.classList.toggle("sufta");
    metertmete.classList.toggle("sufta");
    metormete.classList.toggle("sufta");
 }


function regcheck() {
  email = document.getElementById("email").value;
  var shecdoma = document.getElementById("shecdoma");
  var kubiki = document.getElementById("kubiki");

  kubiki.classList.remove("sufta");

    shecdoma.innerHTML = email;


 }