export class Email {

  validate(email: string): boolean {

    let exp1 = new RegExp(/^([aA-zZ]){1}([aA-zZ0-9]){1,}([@]){1}([aA-zZ0-9]){1,}([.]){1}([aA-zZ]){3}$/, 'gi');

    let exp2 = new RegExp(/^([aA-zZ]){1}([aA-zZ0-9]){1,}([@]){1}([aA-zZ0-9]){1,}([.]){1}([aA-zZ]){3}([.]){0,1}([aA-zZ]){0,2}$/, 'gi');

    let exp3 = new RegExp(/^([aA-zZ]){1}([aA-zZ0-9]){1,}([_\-.!#$%&*()_+<>]){0,1}([aA-zZ0-9]){0,}([@]){1}([aA-zZ0-9]){1,}([.]){1}([aA-zZ]){3}([.]){0,1}([aA-zZ]){0,2}$/, 'gi');

    if ((exp1.test(email))
      || (exp2.test(email))
      || (exp3.test(email))
    ) {
      return true;
    } else {
      return false;
    }



  }

  hasSymbolSign(email: string): boolean {
    let regexp = /^([aA-zZ0-9._#\-~$&%!]){1,}[@]{1}$/gi;
    return regexp.test(email);
  }

  firstCharacterIsLetter(email: string): boolean {
    let regexp = /^([aA-zZ]){1}([aA-zZ0-9._#\-~$&%!]){1,}[@]{1}$/gi;
    return regexp.test(email);
  }

  hasTwoPoints(email: string): boolean {
    let characterSpecial: number = 0;

    for (let letter of email) {
      if (letter === '.'
        || letter === '_'
        || letter === '#'
        || letter === '-'
        || letter === '~'
        || letter === '$'
        || letter === '&'
        || letter === '%'
        || letter === '!'
      ) {
        characterSpecial += 1;
      }
    }

    if (characterSpecial > 1) {
      return false;
    } else {
      return true;
    }
  }
}