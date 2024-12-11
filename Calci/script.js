let globalValue = 0;
let prevFirstValue = 0;
let prevOperation = "";
let prevSecondValue = 0;

let allOperationsArrayStringified = [];

let setGlobal = (value1, operation, value2) => {
  value1 = Number(value1);
  value2 = Number(value2);
  if (operation === "*") globalValue = value1 * value2;
  else if (operation === "/") globalValue = value1 / value2;
  else if (operation === "+") globalValue = value1 + value2;
  else if (operation === "-") globalValue = value1 - value2;
  else globalValue = 0;

  document.getElementById("globalVal").innerHTML = globalValue;
  let temp = document.getElementById("input-field");
  temp.value = "";
  let currentOperation = value1 + " " + operation + " " + value2;
  allOperationsArrayStringified.push(currentOperation);
  console.log(allOperationsArrayStringified);
};

let setPrevFirstNumber = (value) => {
  prevFirstValue = value;
};

let setPrevOperation = (value) => {
  prevOperation = value;
};

let setPrevSecondNumber = (value) => {
  prevSecondValue = value;
};

let placevalue = (value) => {
  if (
    value !== "+" &&
    value !== "-" &&
    value !== "*" &&
    value !== "/" &&
    value !== "."
  ) {
    value = Number(value);
  } else {
    setPrevOperation(value);
    let temp = document.getElementById("input-field");
    temp.value = 0;
    return;
  }
  let temp = document.getElementById("input-field");
  let initialVal = temp.value;
  temp.value = initialVal * 10 + value;
  if (prevOperation !== "") setPrevSecondNumber(temp.value);
  else setPrevFirstNumber(temp.value);
};

let compute = () => {
  if (globalValue == 0) {
    setGlobal(prevFirstValue, prevOperation, prevSecondValue);
  } else {
    setGlobal(globalValue, prevOperation, prevSecondValue);
  }
  prevFirstValue = globalValue;
  prevOperation = "";
  prevSecondValue = 0;
};

let clear = () => {
  globalValue = 0;
  prevFirstValue = 0;
  prevOperation = "";
  prevSecondValue = 0;
};
