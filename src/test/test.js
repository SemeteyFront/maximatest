//2
// let a = prompt('Первое число?', 1);
// let b = prompt('Второе число?', 2);
// alert(a + b);

let a = +prompt('Первое число?', 1); //Number()
let b = +prompt('Второе число?', 2); //Number()

console.log(`Второе задание: ${a + b}`);

//3

let n = 10;
console.log('Третье задание: ');
nextNum: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextNum;
  }

  console.log(i);
}

//4
console.log('Четвертое задание: ');
console.log(0.1 + 0.2 === 0.3); //false

//5

const arr = [15, 24, -3, 3, 0, 26, -3];

function minMax(arr) {
  console.log('Пятое задание: ');
  console.log(Math.min(...arr));
  console.log(Math.max(...arr));
}

minMax(arr);

function palindrome(str) {
  let empty = '';
  for (let i = str.length - 1; i >= 0; --i) {
    empty += str[i];
  }
  return str === empty;
}
console.log('Шестое задание: ');
console.log(palindrome('saippuakivikauppias'));

const arr2 = ['apple', 'orange', 'patate', 'notebook', 'eebneli', 'catering'];

function anagram(arr, str) {
  const sortStr = str.split('').sort().join('');
  const empty = [];
  for (let i = 0; i < arr.length; i++) {
    empty.push(arr[i].split('').sort().join(''));
  }
  if (empty.includes(sortStr)) {
    return str;
  } else {
    return 'Анаграмм нет';
  }
}

console.log('Седьмое задание: ');
console.log(anagram(arr2, 'beeline'));
console.log(anagram(arr2, 'ketonoob'));
console.log(anagram(arr2, 'pancil'));
