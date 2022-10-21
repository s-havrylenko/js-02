/*
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
*/

const findLongestWord = function (string) {
  
  const words = string.split(' ');
  let longWord = ' ';

  for (const word of words) {
   
    if (word.length > longWord.length) {
      longWord = word;      
    }    
  }
  
  return longWord;
}


// Вызовы функции для проверки работоспособности реализации.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'