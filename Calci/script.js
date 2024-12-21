let globalVal = "";
let currString = "";
let ans = "";

function isOperation(val) {
  return ["+", "-", "/", "*"].includes(val);
}

let placevalue = (val) => {
  if (isOperation(val) && isOperation(currString[currString.length - 1])) {
    currString = currString.slice(0, -1);
  }
  currString += val;
  let temp = document.getElementById("input-field");
  temp.value = currString;
  console.log(currString);
};

let computeAll = () => {
  if (isOperation(currString[0]) && currString[0] !== "-") {
    currString = currString.slice(1, currString.length);
  }
  if (isOperation(currString[currString.length - 1])) {
    currString = currString.slice(0, -1);
  }

  computation(currString);
  globalVal = currString;
  currString = "";
};

let computeOperation = (x1, x2, operation) => {
  switch (operation) {
    case "+":
      return x1 + x2;
    case "-":
      return x1 - x2;
    case "/":
      return x2 !== 0 ? x1 / x2 : "Division by zero error";
    case "*":
      return x1 * x2;
    default:
      return "Invalid operation";
  }
};

let computation = (currString) => {
  let ans = 0;
  let intermediate = 0;
  let operation = "";

  for (let i = 0; i < currString.length; i++) {
    const curr = currString[i];

    if (!isOperation(curr)) {
      if (operation === "") {
        ans = ans * 10 + Number(curr);
      } else {
        intermediate = intermediate * 10 + Number(curr);
      }
    } else {
      if (operation === "") operation = curr;
      else {
        ans = computeOperation(ans, intermediate, operation);
        intermediate = 0;
        operation = curr;
      }
    }
  }

  if (operation !== "") {
    ans = computeOperation(ans, intermediate, operation);
  }

  let temp = document.getElementById("input-field");
  temp.value = String(ans);
};

let clearAll = () => {
  let temp = document.getElementById("input-field");
  temp.value = "";
  currString = "";
};

