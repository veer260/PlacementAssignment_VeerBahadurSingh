const getData = () => {
  console.log("hello");
};

const doSomeMagic = (fn, delay) => {
  let count = 0;
  let timer;
  console.log("count:", count);
  return (...args) => {
    count++;
    clearTimeout(timer);
    timer = setTimeout(() => {
      //   fn(...args);
      console.log(count);
    }, delay);
  };
};

const betterFunction = doSomeMagic(getData, 2000);
