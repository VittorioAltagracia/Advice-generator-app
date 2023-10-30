"use strict";

const dice = document.querySelector(".dice");
const adviceParagraph = document.querySelector(".advice");
const adviceNum = document.querySelector(".advice-num");

//  function that fetches advices and updates html elements
async function getAdviceAndDisplayIt() {
  try {
    const randomAdvice = await fetch("https://api.adviceslip.com/advice");
    // line 12 - parcing data into json
    const returnedAdvice = await randomAdvice.json();
    const { slip } = returnedAdvice;

    // below - updating html elements
    adviceNum.innerHTML = `Advice #${slip.id}`;
    adviceParagraph.innerHTML = `❝${slip.advice}❞`;
  } catch (error) {
    console.log(error);
  }
}

// onclick we execute getAdvice
dice.addEventListener("click", () => {
  getAdviceAndDisplayIt();
});

// when a page loads initially we make an api call right away

window.addEventListener("DOMContentLoaded", () => {
  getAdviceAndDisplayIt();
});
