1. változók és konstansok 
primitív adattípusok :
String : 'cica';
Number : 5;
Boolean : logikai érték (true vagy false)
Összetett adattípusok
Tömb : [1, 2];
Matrix : (
  [1, 2],
  [3, 4]
);
Object : 

2. referencia szerint a függvény címét, érték szerint pedig a függvény értékét adjuk át. */

3.
const containsElement = (element, arr) => {
  let isInArray = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      isInArray = true;
    }
  }
  return isInArray;
};

4. 
const maxArray = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[1] > max) {
      max = arr[i];
      i++;
    }
  }
  return max;
};
const arr1 = [1, 30, 40, 10, -5, 3];
console.log(maxArray(arr1));

5.
const fifth = (arr) => {
  let resultArray = []
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 10 && arr[i] % 2 === 0) {
      resultArray.push(arr[i]);
      i++;
    }
  }
  return resultArray;
}
console.log(fifth(arr1));

6.
const section = (source1, source2) => {
  const target = [];
  for (let i = 0; i < source1.length; i++) {
    for (let j = 0; j < source2.length; j++) {
      if (source1[i] === source2[j]) {
        target.push(source1[i]);
        break;
      }
    }
  }
  return target;
};
const arr = [4, 8, 10, 15];
const nums2 = [1, 4, 10, 7];
console.log(arr, nums2);
console.log('section', section(arr, nums2));

7.
const add = (a, b) => {
  return a + b;
}
const mult = (a, b) => {
  return a * b;
}
const exp = (a, b) => {
  return a % b;
}
module.export = {
  add,
  mult,
  exp,
};

8.
const readline = require('readline-sync');
const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
