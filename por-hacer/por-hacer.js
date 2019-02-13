const fs = require('fs');


let listadoporhacer = [];

const guardardb = () => {
    let data = JSON.stringify(listadoporhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new error('No se pudo guardar el archivo', err);
    })
}

const cargardb = () => {
    try {
        listadoporhacer = require('../db/data.json');
    } catch (error) {
        listadoporhacer = [];
    }

}
const crear = (descripcion) => {
    cargardb();
    let porhacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porhacer);
    guardardb()

    return porhacer;
}

const getlistado = () => {
    cargardb();


    return listadoporhacer;
}


const actualizar = (descripcion, completado = true) => {
    cargardb();

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardardb();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargardb();
    let nuevolistado = listadoporhacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoporhacer.length === nuevolistado.length) {
        return false;
    } else {
        listadoporhacer = nuevolistado;
        guardardb();
        return true;
    }
}

module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}