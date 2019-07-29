const fs = require('fs');  // proyecto propio de nodejs


let crearArchivo = (base) => {
    return new Promise( (resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido (${ base }) no es un numero`);
            return;
        }

        let data = `\nTabla del :  ${base}`;

        for (let i = 1, m = 10; i <= 10; i++)
            data += `\n${base} x ${i} = ${base * i}`;
        
        
        fs.writeFile(`./output-files/tabla-${base}.txt`, data, (err) => {
            if (err){
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });

    });
}


module.exports = {
    crearArchivo
};
