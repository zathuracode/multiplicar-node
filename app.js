const {crearArchivo,listarTabla}=require('./multiplicar/multiplicar');
const {argv}=require('./config/yargs');

// console.log('Base',argv.base);
// console.log('Limite',argv.limite);

let comando =argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite).
            then().
            catch(error=>console.error(error));
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite).
            then(archivo=>console.log(`Nombre del archivo: ${archivo}`)).
            catch(error=>console.error(error));
        break;
    default:
        console.log('Debe enviar alguno de estos comandos listar o crear');
}