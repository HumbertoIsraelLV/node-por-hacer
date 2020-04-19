const colors = require('colors');
const { argv } = require('./config/yargs');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tareaPorHacer = crear(argv.descripcion);
        // console.log(tareaPorHacer);

        break;
    case 'listar':
        let listado = getListado();
        for (let elem of listado) {
            console.log('======================='.green);
            console.log(elem.descripcion);
            console.log(`Estado: ${elem.completado}`);
            console.log('======================='.green);
        }
        break;
    case 'actualizar':
        if (actualizar(argv.descripcion, argv.completado))
            console.log('Actualizado correctamente');
        else
            console.log('No se realizo ningún cambio');
        break;
    case 'borrar':
        if (borrar(argv.descripcion, argv.completado))
            console.log('Borrado correctamente');
        else
            console.log('No se realizo ningún cambio');
        break;
    default:
        console.log('Comando no reconocido...');
}