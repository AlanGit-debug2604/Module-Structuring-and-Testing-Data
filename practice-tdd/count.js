export function countChar(stringOfCharacters, findCharacter) {
  // Given a string `stringOfCharacters` and a single character `findCharacter` to search for,
  const count = stringOfCharacters.split(findCharacter).length - 1;
  return count
}
