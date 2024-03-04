import { putProducts } from '../../../Apis/tareas/tareasApi.js';
const seleccionButton = (datos)=>{
    const buttons = document.querySelectorAll(".bx")
    buttons.forEach(button => {
        button.addEventListener("click", ()=>{
        const name = button.id;
        let ind = datos.findIndex(tarea => tarea.id === name);
        let id = datos[ind].id
        button.className==="bx bxs-check-square acabada" ? datos[ind].seleccion=true : datos[ind].seleccion=false
        putProducts(datos[ind], id)
    })
});
};
export {
    seleccionButton as seleccion
};