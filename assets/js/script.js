'use strict';

/**
 * Add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * Header active
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Scroll reveal effect
 */
const sections = document.querySelectorAll("[data-section]");

const reveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
};

reveal();
addEventOnElem(window, "scroll", reveal);

/**
 * Fitness Tracker JavaScript code
 */
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const ageInput = document.getElementById('age');
const activityLevelSelect = document.getElementById('activity-level');
const calculateBmiButton = document.getElementById('calculate-bmi');
const calculateCaloriesButton = document.getElementById('calculate-calories');
const bmiResultElement = document.getElementById('bmi-result');
const caloriesResultElement = document.getElementById('calories-result');

// Function to calculate BMI
function calculateBmi(weight, height) {
  const bmi = weight / (height / 100) ** 2;
  return bmi.toFixed(2);
}

// Function to calculate daily calories
function calculateDailyCalories(weight, height, age, activityLevel) {
  let dailyCalories;
  switch (activityLevel) {
    case 'sedentary':
      dailyCalories = 66 + (6.2 * weight) + (12.7 * height) - (6.8 * age);
      break;
    case 'lightly-active':
      dailyCalories = (66 + (6.2 * weight) + (12.7 * height) - (6.8 * age)) * 1.375;
      break;
    case 'moderately-active':
      dailyCalories = (66 + (6.2 * weight) + (12.7 * height) - (6.8 * age)) * 1.55;
      break;
    case 'very-active':
      dailyCalories = (66 + (6.2 * weight) + (12.7 * height) - (6.8 * age)) * 1.725;
      break;
    case 'extra-active':
      dailyCalories = (66 + (6.2 * weight) + (12.7 * height) - (6.8 * age)) * 1.9;
      break;
    default:
      dailyCalories = 0;
      break;
  }
  return dailyCalories.toFixed(2);
}

// Event listeners for calculate buttons
calculateBmiButton.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = calculateBmi(weight, height);
  bmiResultElement.textContent = `Your BMI is: ${bmi}`;
});

calculateCaloriesButton.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const age = parseFloat(ageInput.value);
  const activityLevel = activityLevelSelect.value;
  const dailyCalories = calculateDailyCalories(weight, height, age, activityLevel);
  caloriesResultElement.textContent = `Your daily calories are: ${dailyCalories}`;
});
