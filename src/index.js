const btn = document.querySelector(".js-button");

function onClick(e) {
  console.log("click", e.target);
}

btn.addEventListener("click", onClick);

function isNumber(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
}
function addNumbers(a, b) {
  return isNumber(a, b) ? isNumber(a, b) : a + b;
}
function subNumbers(a, b) {
  return isNumber(a, b) ? isNumber(a, b) : a - b;
}
function multiplyNumbers(a, b) {
  return isNumber(a, b) ? isNumber(a, b) : a * b;
}
function divideNumbers(a, b) {
  if (isNumber(a, b)) {
    return isNumber(a, b);
  }
  if (b === 0) {
    return "На нуль ділити не можна!";
  }
  return a / b;
}
const arr = [1, 2, "a", 3, "b", 4];
function getMinNumber(arr) {
  let minNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNumber && typeof arr[i] === "number") {
      minNumber = arr[i];
    }
  }
  return minNumber;
}

function getMaxNumber(arr) {
  let maxNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber && typeof arr[i] === "number") {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}

const min = getMinNumber(arr);
const max = getMaxNumber(arr);
console.log(
  `мінімальне значення масиву: ${min}  максимальне значення масиву: ${max}`
);

function Accumulator(initialValue) {
  this.value = initialValue;
}

Accumulator.prototype.increment = function () {
  this.value++;
};

Accumulator.prototype.decrement = function () {
  this.value--;
};
function CancelableAccumulator(initialValue) {
  Accumulator.call(this, initialValue);
  this.initialValue = initialValue;
}
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function () {
  this.value = this.initialValue;
};

const refs = {
  image: document.querySelector("#image"),
  aFlag: document.querySelector("#a"),
  bFlag: document.querySelector("#b"),
  cFlag: document.querySelector("#c"),
  dFlag: document.querySelector("#d"),
};

const handleClick = (event) => {
  event.target.classList.toggle("photo");
};
refs.image.addEventListener("click", handleClick);

const handleKeyDown = (event) => {
  if (event.key === "a" || event.key === "A") {
    refs.aFlag.scrollIntoView();
  } else if (event.key === "b" || event.key === "B") {
    refs.bFlag.scrollIntoView();
  } else if (event.key === "c" || event.key === "C") {
    refs.cFlag.scrollIntoView();
  } else if (event.key === "d" || event.key === "D") {
    refs.dFlag.scrollIntoView();
  } else return;
};
document.addEventListener("keydown", handleKeyDown);
