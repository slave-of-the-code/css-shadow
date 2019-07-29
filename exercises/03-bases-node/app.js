// requireds : existen 3 tipos
const fs = require('fs');  // proyecto propio de nodejs
// const fs = require('express'); // no es propia de node, es un paquete que se instala
// const fs = require('./fs'); // archivos que nosotros mismos escribimos



let base = 2;

let data = '';
data = `\nTabla del :  ${base}`;
for (let i = 1, m = 10; i <= 10; i++)
    data += `\n${base} x ${i} = ${base * i}`;


fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if (err)
        throw err;

        console.log(`El archivo de la tabla del ${ base } ha sido creado`);
});



base = 3;
data = `\nTabla del :  ${base}`;
for (let i = 1, m = 10; i <= 10; i++)
    data += `\n${base} x ${i} = ${base * i}`;

fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if (err)
        throw err;

    console.log(`El archivo de la tabla del ${ base } ha sido creado`);
});    