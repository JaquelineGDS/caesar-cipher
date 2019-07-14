
const test1 = encode('abc', 1);
if (test1 === 'bcd') {
  console.log('O parametro abc com deslocamento de 1 da função encode foi executado corretamente: ' + test1 );
} else {
  console.log('O parametro abc com deslocamento de 1 da função encode não foi executado corretamente.');
}

const test2 = encode('Jaqueline', 1);
if (test2 === 'Kbrvfmjof') {
  console.log('O parametro Jaqueline com deslocamento de 1 da função encode foi executado corretamente: ' + test2);
} else {
  console.log('O parametro Jaqueline com deslocamento de 1 da função encode não foi executado corretamente. ');
}

const test3 = decode('bcd', 1);
if (test3 === 'abc') {
  console.log('O parametro bcd com deslocamento de 1 da função decode foi executado corretamente: ' + test3);
} else {
  console.log('O parametro bcd com deslocamento de 1 não foi executado corretamente . ')
}
