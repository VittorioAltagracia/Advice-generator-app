"use strict";

const dice = document.querySelector(".dice");
const adviceParagraph = document.querySelector(".advice");
const adviceNum = document.querySelector(".advice-num");

//  function that fetches advices
async function getAdvice() {
  try {
    const randomAdvice = await fetch("https://api.adviceslip.com/advice");
    const returnedAdvice = await randomAdvice.json();
    const { slip } = returnedAdvice;
    console.log(slip);
    adviceNum.innerHTML = slip.id;
    adviceParagraph.innerHTML = slip.advice;
    return slip;
  } catch (error) {
    console.log(error);
  }
}

// onclick we execute getAdvice
dice.addEventListener("click", () => {
  getAdvice();
  console.log("ok - it worked");
});
