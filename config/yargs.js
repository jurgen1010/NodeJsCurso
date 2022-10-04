const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type:  'boolean',
                        default: false,
                        describe: 'Muestra en consola la tabla de multiplicar en base b'
                    }
                    ,
                    'h': {
                        alias: 'hasta',
                        type:  'number',
                        demandOption: true,
                        describe: 'Muestra en consola la tabla de multiplicar en base b hasta el multiplicador h'
                    }
                })
                .check( ( argv, options ) => {
                    if ( isNaN( argv.b && argv.h) ){
                        throw 'La base tiene que ser un número'
                    }
                    /* sí no hay errores retornamos true */
                    return true
                })
                .argv;
module.exports = argv