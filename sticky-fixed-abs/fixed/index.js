console.log("abs");
let name = "veer";

let obj = {
  name: "ram",
};

function func(a, b) {
  console.log(`hello ${this.name} !`);
  console.log(a + b);
}

const newfunc = func.bind(obj);
newfunc(4, 8);
