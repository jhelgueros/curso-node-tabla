const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (x = 5, listar = false, h = 10) => {

    try {

        let salida, consola = ''

        for (let index = 1; index <= h; index++) {

            salida += `${x} x ${index} = ${x * index}\n`
            consola += `${x} ${'x'.green} ${index} ${'='.yellow} ${x * index}\n`

        }

        // fs.writeFile(`tabla-${x}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`table del ${x} creada`)
        // })
        if (listar) {
            console.log('=========================='.green)
            console.log(`Tabla del ${x}`)
            console.log('=========================='.green)

            console.log(consola)
        }


        fs.writeFileSync(`./salidas/tabla-${x}.txt`, salida)
        return `tabla-${x}.txt`
        //console.log(`table del ${x} creada`)     
    } catch (err) {
        throw (err)
    }

}


module.exports = {
    crearArchivo
}

// const crearArchivo = (x = 5) => {


//     return new Promise((resolve, reject) => {
//         console.log('==========================')
//         console.log(`Tabla del ${x}`)
//         console.log('==========================')

//         let salida = ''

//         for (let index = 1; index < 11; index++) {

//             salida += `${x} x ${index} = ${x * index}\n`

//         }

//         // fs.writeFile(`tabla-${x}.txt`, salida, (err) => {
//         //     if (err) throw err;
//         //     console.log(`table del ${x} creada`)
//         // })
//         console.log(salida)

//         fs.writeFileSync(`tabla-${x}.txt`, salida)
//         resolve(`tabla-${x}.txt`)
//         //console.log(`table del ${x} creada`)

//     })


// }


