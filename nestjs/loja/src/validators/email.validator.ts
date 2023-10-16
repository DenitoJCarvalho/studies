import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";

import { UserRepository } from '../repositories/usuarios.repository';


@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {

  constructor(
    private usuarioRepository: UserRepository
  ) { }

  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const userWitnEmailExist = await this.usuarioRepository.ExistWithEmail(value);

    return !userWitnEmailExist;
  }

}

export const EmailIsUnique = (opcoesValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesValidacao,
      constraints: [],
      validator: EmailValidator
    })
  }
}