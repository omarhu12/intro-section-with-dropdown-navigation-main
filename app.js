const features = document.querySelector("#first");
const company = document.querySelector("#second");
const menuBtn = document.querySelector(".hamburger");
const side = document.querySelector("aside");
let firstMenu = document.querySelector(".menu--1");
let secondMenu = document.querySelector(".menu--2");

const featuresMobile = document.querySelector("#firstMobile");
const companyMobile = document.querySelector("#secondMobile");

const dropFirst = document.querySelector(".first");
const dropSecond = document.querySelector(".second");

const overlay = document.querySelector(".background-blur");

featuresMobile.addEventListener("click", function () {
  featuresMobile.classList.toggle("show");
  dropFirst.classList.toggle("show");
  companyMobile.classList.remove("show");
  dropSecond.classList.remove("show");
});
companyMobile.addEventListener("click", function () {
  companyMobile.classList.toggle("show");
  dropSecond.classList.toggle("show");
  featuresMobile.classList.remove("show");
  dropFirst.classList.remove("show");
});

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  side.classList.toggle("active");
  overlay.classList.toggle("show");
});

features.addEventListener("click", function () {
  firstMenu.classList.toggle("active");
  features.classList.toggle("active");
  secondMenu.classList.remove("active");
  company.classList.remove("active");
});
company.addEventListener("click", function () {
  secondMenu.classList.toggle("active");
  company.classList.toggle("active");
  firstMenu.classList.remove("active");
  features.classList.remove("active");
});
