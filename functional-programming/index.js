const bananaCake = cake({
  flavor: "banana",
  shape: "rounded",
  diameter: 20,
  height: 10,
  color: "yellow",
  fillings: ["Vanilla", "Strawberry"],
});

console.log(bananaCake.getFillings());
console.log(bananaCake.getArea());
console.log(bananaCake.getVolume());

const chocolateCake = cake({
  flavor: "chocolate",
  shape: "squared",
  width: 20,
  longitude: 20,
  height: 10,
  color: "yellow",
  fillings: ["Arequipe", "Vanilla"],
});

console.log(chocolateCake.getFillings());
console.log(chocolateCake.getArea());
console.log(chocolateCake.getVolume());
