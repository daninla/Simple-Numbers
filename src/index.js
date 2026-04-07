"use strict";

simple_num: for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {  
    if (i % j === 0) {
      continue simple_num;                
    }
  }
  console.log(i);                         
}