// booleam
const isTrue = true;
const isFalse = false;

// Truthy e falsy

// falsy:
const zero = 0;
const emptyString = "";
const emptyArray = [];
const emptyObject = {};
const emptyFunction = function () {};
const nullValue = null;
const undefinedValue = undefined;
const NaNValue = NaN;
const falseValue = false;

// truthy:
const one = 1;
const string = "string";
const array = [1, 2, 3];
const object = { name: "John" };
const functionValue = function () {
  return "Hello World";
};
const trueValue = true;

console.log(emptyFunction() ? "true" : "false");
console.log(functionValue() ? "true" : "false");

// typeof
// typeof -> number, string, boolean, object, function
