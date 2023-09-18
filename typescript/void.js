function olaMundo() {
    console.log(`Hola mundo | Hello World`);
}
/**
 *
 * @param errorMessage
 *
 * por padrão as funções em typescript retornam void
 */
function logError(errorMessage) {
    console.log(errorMessage);
}
logError('Required field - Name');
//Usando arrow functons
const logErrorExample2 = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExample2('Required field - Age');
