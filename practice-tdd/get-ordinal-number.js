export function getOrdinalNumber(num) {
  //Given a number `num`, the function should return a string representing the ordinal form of that number.
  //When the number ends with 1, except those ending with 11,
  //Then the function should return a string by appending "st" to the number.
  if (num % 10 === 1 && num % 100 !== 11) return `${num}st`;

  //When the number ends with 2, except those ending with 12,
  //Then the function should return a string by appending "nd" to the number.
  if (num % 10 === 2 && num % 100 !== 12) return `${num}nd`;

  //When the number ends with 3, except those ending with 13,
  //Then the function should return a string by appending "rd" to the number.
  if (num % 10 === 3 && num % 100 !== 13) return `${num}rd`;

  return `${num}th`;
}
