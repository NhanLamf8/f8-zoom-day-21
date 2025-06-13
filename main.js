//---------------------At---------------------
const fruits = ["mango", "banana", "apple", "tomato"];
Array.prototype.at2 = function (value) {
  let id = Math.trunc(value) || 0;
  if (id < 0) id = this.length + id;
  if (id >= this.length) return undefined;
  return this[id];
};

// console.log(fruits.at2(3));
// console.log(fruits.at2(-3));
// console.log(fruits.at2());
// console.log(fruits.at2(5));

//---------------------find---------------------
Array.prototype.find2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
};
const array3 = [5, 12, 8, 130, 44];
const found = array3.find2((element) => element > 10);
console.log(found);

//---------------------foreach---------------------

Array.prototype.forEach2 = function (callBack, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      callBack.call(thisArg, this[i], i, this);
    }
  }
};
// fruits.forEach2((fruit) => console.log(fruit));

// -----------------map-------------------------
Array.prototype.map2 = function (callBack, thisArg) {
  const length = this.length;
  let result = [];

  for (let i = 0; i < length; i++) {
    result.push(callBack.call(thisArg, this[i], i, this));
  }
  return result;
};

const array1 = [2, 4, 5, 7, 43];
const map1 = array1.map2((x) => x * 2);
console.log(map1);
console.log(["1", "2", "3"].map2(Number));
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map2((num, index) => {
  if (index < 3) {
    return num;
  }
});
console.log(filteredNumbers);

//----------------filter------------------------
Array.prototype.filter2 = function (callback, thisArg) {
  const length = this.length;
  const newArr = [];

  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
  }
  return newArr;
};
// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const result = words.filter2((word) => word.length > 6);
// console.log(result);

// function isBigEnough(value) {
//   return value >= 10;
// }
// const filtered = [12, 5, 8, 130, 44].filter2(isBigEnough);
// console.log(filtered);

// ---------------push------------------

Array.prototype.push2 = function (...elements) {
  const length = this.length;

  for (let i = 0; i < elements.length; i++) {
    this[length + i] = elements[i];
  }

  this.length = length + elements.length;
  return this.length;
};
// const animals = ["pigs", "goats", "sheep"];
// animals.push("chickens", "cats", "dogs");
// console.log(animals);

// const sports = ["soccer", "baseball"];
// const total = sports.push("football", "swimming");
// console.log(sports);

// ------------------Some-----------------
Array.prototype.some2 = function (callback, thisArg) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }

  return false;
};

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some2(even));

function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some2(isBiggerThan10);
[12, 5, 8, 1, 4].some2(isBiggerThan10);
