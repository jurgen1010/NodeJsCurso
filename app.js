const { crearArchivo } = require('./helpers/multiplicar')
require('colors')
const argv = require('./config/yargs')
console.clear()
/* argv para leer inputs por consola */
//console.log( argv )
crearArchivo ( argv.b, argv.l, argv.h )
    .then ( nombreArchivo => console.log(nombreArchivo.bgCyan))
    .catch (err => console.log(err))