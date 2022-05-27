let fs = require('fs')
const tareas = require("./data/tareas.json");
let guardarJson = (data) => fs.writeFileSync('./data/tareas.json',JSON.stringify(data,null,2),'utf-8');

let archivo = {

    leerJson : tareas, 


    tareasString : ()=>{
    console.log("------------------------------------");
    tareas.forEach((element,i )=> {
        console.log((i+1) + ". " + element.titulo + " - " + element.estado); 
    });
    console.log("------------------------------------");
    },
 

    crearTarea : (titulo,estado)=>{
        estado = estado.toLowerCase();
        estado = estado.trim();
        titulo = titulo.toLowerCase();
        let tarea = {              
            titulo, 
            estado,
        };
     tareas.push(tarea);
     guardarJson(tareas);
     console.log("------------------------------------");
     return ("- " + tarea.titulo + " - " + tarea.estado);
     
    },


    leerPorEstado : (estado)=>{
    let tareasFiltradas = tareas.filter((tarea)=>{
    return tarea.estado.toLowerCase() === estado.toLowerCase()
     })
    return console.log(tareasFiltradas);
    },

    buscarTarea : (i) => {return tareas.filter((tarea)=> (tarea.titulo.indexOf(i) != -1))}, 

};

module.exports = archivo;