const argv = require('yargs')
    .command('crear', 'crear elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la lista por hacer'

        },
    })
    .command('actualizar', 'actualizar el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la lista por '

        },
        completado: {
            default: true,
            alias: 'c',
            descripcion: 'marca como completadoo  o pendiente la tarea'
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}