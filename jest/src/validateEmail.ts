export class Email {

  validate(email: string): boolean {

    //verifica email no padrão email@gmail.com
    let exp1 = new RegExp(/^([aA-zZ]){1}([aA-zZ0-9]){1,}([@]){1}([aA-zZ0-9]){1,}([.]){1}([aA-zZ]){3}$/, 'gi');

    //verifica email no padrão email@email.com.br
    let exp2 = new RegExp(/^([aA-zZ]){1}([aA-zZ0-9]){1,}([@]){1}([aA-zZ0-9]){1,}([.]){1}([aA-zZ]){3}([.]){0,1}([aA-zZ]){0,2}$/, 'gi');

    //verifica email no padrão email.outraparte@gmail.com ou email.outraparte@gmail.com.br 
    let exp3 = new RegExp(/^([aA-zZ]){1}([aA-zZ0-9]){1,}([_\-.!#$%&*()_+<>]){0,1}([aA-zZ0-9]){0,}([@]){1}([aA-zZ0-9]){1,}([.]){1}([aA-zZ]){3}([.]){0,1}([aA-zZ]){0,2}$/, 'gi');

    //verifica email no padrão email@email-provider.com ou email@email-provider.com.br ou email-outraparte@email-provider.com.br
    let exp4 = new RegExp(/^([aA-zZ]){1}([aA-zZ0-9]){1,}([_\-.!#$%&*()_+<>]){0,1}([aA-zZ0-9]){0,}([@]){1}([aA-zZ0-9]){1,}([.\-_]){0,1}([aA-zZ]){0,}([.]){1}([aA-zZ]){3}([.]){0,1}([aA-zZ]){0,2}$/, 'gi');

    if ((exp1.test(email))
      || (exp2.test(email))
      || (exp3.test(email))
      || (exp4.test(email))
    ) {
      return true;
    } else {
      return false;
    }

  }

}