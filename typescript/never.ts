/**
 * Never é usado para representar um tipo de valor que nunca ocorrerá
 * throw errors
 * @param message string
 */

const error = (message: string): never => {
  throw new Error(message);
}

console.log(error('Isto é um erro!'));

const rejectMessage = () => {
  return error('Error de messagem - 02');
}

console.log(rejectMessage());