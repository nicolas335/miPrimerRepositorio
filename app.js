
let process = require("process");
let archivo = require ("./funcionesDeTareas");


let accion = process.argv[2];
let accion2 = process.argv[3];
let accion3 = process.argv[4];

switch (accion) {
    case "listar":
        archivo.tareasString();
        break;
    case "crear" : 
        console.log("------------------------------------");
        console.log("Tu tarea fue creada con éxito.");
        console.log(archivo.crearTarea(accion2,accion3));
        console.log("------------------------------------");
        break;
    case "filtrar":
        console.log("------------------------------------");
        console.log(`Las tareas en estado ${estado.toLowerCase()} son:`);
        console.log("------------------------------------");
        archivo.leerPorEstado(accion2);
        break;;
    case "buscarPorEstado": 
        console.log("------------------------------------");
        console.log(archivo.buscarTarea(accion2));
        console.log("------------------------------------");
        break;
    case "buscarPorTitulo": //busca el o los titulos que coincida con las letras introducidas en la consola, sin importar que este o no el nombre total del titulo
        console.log("------------------------------------");
        console.log(archivo.buscarTarea(accion2));
        console.log("------------------------------------");
        break;
    case undefined:
        console.log("----------------------------------------");
        console.log("Atención, tienes que pasar una accion.");
        console.log("----------------------------------------");
        console.log("Las acciones disponibles son:");
        console.log("\n-listar-crear-filtrar\n");
        break;
    default:
        console.log("No entiendo que quieres hacer");
        break;
};
