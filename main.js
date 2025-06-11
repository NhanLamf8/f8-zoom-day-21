const fruits = ["mango", "banana", "apple", "tomato"];
//
Array.prototype.at2 = function (value) {
  let id = Math.trunc(value) || 0;
  if (id < 0) id = this.length + id;
  if (id >= this.length) return undefined;
  return this[id];
};

console.log(fruits.at2(3));
console.log(fruits.at2(-3));
console.log(fruits.at2());
console.log(fruits.at2(5));
