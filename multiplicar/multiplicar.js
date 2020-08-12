var colors = require('colors');
const fs= require('fs');

let listarTabla=(base, limite)=>{

    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(`${base} no es un numero valido para la base`);
            return;
        }
        if(!Number(limite)){
            reject(`${limite} no es un numero valido para el limite`);
            return;
        }

        console.log('=========================='.green);
        console.log(`Tabla del ${base} hasta el ${limite} `.blue);
        console.log('=========================='.green);

        for (let index = 1; index <=limite; index++) {
            console.log(`${base} * ${index} = ${base*index}`.red);
        }
        resolve('');
        return;       
    });
}

let crearArchivo=(base,limite)=>{

    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`${base} no es un numero valido para la base`);
            return;
        }
        if(!Number(limite)){
            reject(`${limite} no es un numero valido para el limite`);
            return;
        }

        let data = '';

        for (let index = 1; index <=limite; index++) {
            data+=`${base} * ${index} = ${base*index}\n`;
        }


        fs.writeFile(`tabla-${base}-hastas-${limite}.txt`, data, (err) => {
            if (err){
                reject(err);
            }else{
                resolve(`tabla-${base}-hastas-${limite}.txt`);
            }            
        });

    });

}

module.exports={
    crearArchivo,
    listarTabla
}