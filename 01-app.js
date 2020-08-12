//Dos diferentes formas de importar
//const multiplicar=require('./multiplicar/multiplicar')
const {crearArchivo}=require('./multiplicar/multiplicar');


let base=process.argv[2];

// multiplicar.crearArchivo(base).
// then(archivo=>console.log(`Nombre del archivo: ${archivo}`)).
// catch(error=>console.error(error))

crearArchivo(base).
then(archivo=>console.log(`Nombre del archivo: ${archivo}`)).
catch(error=>console.error(error))


console.log(process.argv)
console.log(base)
