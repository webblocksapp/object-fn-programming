const bananaCake = new Cake({
  flavor: "banana",
  shape: "rounded",
  diameter: 20,
  height: 10,
  color: "yellow",
  fillings: ["Vanilla", "Strawberry"],
});
console.log("Rellenos torta de banano", bananaCake.getFillings());
console.log("Area torta de banano", bananaCake.getArea());
console.log("Volumen torta de banano", bananaCake.getVolume());

const chocolateCake = new Cake({
  flavor: "chocolate",
  shape: "squared",
  diameter: 10,
  color: "brown",
  fillings: ["Strawberry", "Arequipe"],
  width: 10,
  longitude: 10,
  height: 10,
});

console.log("Rellenos torta de chocolate", chocolateCake.getFillings());
console.log("Area torta de chocolate", chocolateCake.getArea());
console.log("Volumen torta de chocolate", chocolateCake.getVolume());
