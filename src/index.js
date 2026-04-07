"use strict";

simple_num: for (let i = 0; i <= 100; i++) {
  for (let j = 2; j <= 9; j++) {
    if (i % j === 0 && i !== j) {
      continue simple_num;
    }
  }
  console.log(i);
}