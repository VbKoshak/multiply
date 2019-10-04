module.exports = function multiply(first, second) {
  // your solution
  let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();

  let l1 = firstArr.length;
  let l2 = secondArr.length;

  let mass = new Array(l1);
  for (let i = 0; i < l1; i++) {
    mass[i] = new Array(l2);
    for (let j = 0; j < l2; j++) {
      mass[i][j] = +firstArr[i]*(+secondArr[j]);
    }
  }

  let saver = 0;
  let maxSize = l1 + l2 - 1;
  let temp, l;

  let arr = new Array(maxSize+1);
  arr[maxSize] = 0;

  for (let i = 0; i < l1; i++){
    for (let j = 0; j < l2; j++) {
      l = i+j;
      arr[l] = (arr[l]) ? arr[l] + mass[i][j] : mass[i][j];
    }
  }

  maxSize++;

  for (let i = 0; i < maxSize; i++) {
    temp = arr[i] + saver;
    arr[i] = temp % 10;
    saver = (temp - arr[i]) / 10;
  }

  let res = arr.reverse().join('');
  if (res[0] === '0'){
    res = res.slice(1);
  }
  return res;
}
