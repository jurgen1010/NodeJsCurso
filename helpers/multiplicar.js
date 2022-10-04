
const colors = require('colors/safe')
const fs = require('fs')
const crearArchivo = async(base = 5, listar, hasta) => {
        try {
            let salida = '';
            let consola = '';
            for (let i = 1; i <= hasta; i++) {
                //acumular +=
                salida += `${base} x ${i} = ${base * i}\n`
                consola += `${base} ${ 'x'.yellow } ${i} ${ '='.yellow } ${base * i}\n`
            }
            if (listar) {
                console.log(colors.green('================'));
                console.log(colors.green(' Tabla del:', base));
                console.log(colors.green('================'));
                console.log(colors.bgGray(consola))
            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
            return `tabla-${base}.txt creado`
        } catch (error) {
            throw error
        }
}
/* module.export es la manera en como puedo hacer visible una clase */
module.exports = {
    /*  crearArchivo: crearArchivo */
    crearArchivo
}