export class Email {

  hasLetters(email: string): boolean {
    let regexp = /^([aA-zZ]){1,}$/gi;
    return regexp.test(email);
  }

  hasNumbers(email: string): boolean {
    let regexp = /^([aA-zZ0-9]){1,}$/gi;
    return regexp.test(email);
  }

  hasSpecialCharacters(email: string): boolean {
    let regexp = /^([aA-zZ0-9._#\-~$&%!]){1,}$/gi;
    return regexp.test(email);
  }

  hasSymbolSign(email: string): boolean {
    let regexp = /^([aA-zZ0-9._#\-~$&%!]){1,}[@]{1}$/gi;
    return regexp.test(email);
  }

  firstCharacterIsLetter(email: string) {
    let regexp = /^([aA-zZ]){1}([aA-zZ0-9._#\-~$&%!]){1,}[@]{1}$/gi;
    return regexp.test(email);
  }
}