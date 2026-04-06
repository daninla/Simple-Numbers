"use strict";

simple_num: for (let i = 0; i <= 100; i++) {
  for (let j = 2; j <= 100; j++) {
    if (i % j === 0 && j !== 1 && j !== i) {
      continue simple_num;
    }
  }
  console.log(i);
}