const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 7;

crearArchivo(base)
    .then((archivo) => {
        console.log(`Archivo creado : ${ archivo }`);
    })
    .catch((err) => console.error('Error : ', err));