const descripcion = {
    demand: true
};

const completado = {
    demand: true,
    default: true
};

let argv = require('yargs')
    .command('crear', 'Genera una tarea en la base de datos', { descripcion })
    .command('actualizar', 'Muestra todas las tareas almacenadas', { descripcion, completado })
    .command('listar', 'Muestra todas las tareas almacenadas', {})
    .command('Borrar', 'Borra una tarea de la BD', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}