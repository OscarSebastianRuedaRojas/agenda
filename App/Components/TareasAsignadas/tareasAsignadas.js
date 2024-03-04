import { getProducts } from '../../../Apis/tareas/tareasApi.js';
import {seleccion} from "/App/Components/clasificacion/clasificacion.js"
export class tareasAsignadas extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    async render() {
        try {
            const datos = await getProducts();
            datos.forEach(tarea => {
                this.innerHTML += /* HTML */`
                <style rel="stylesheet">
                    @import "App/Components/TareasAsignadas/tareaStyle.css";
                </style>
                    <div class="card">
                        <div class="row">
                            <div class="col">
                                <h2>${tarea.nombreTarea}</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h3>Fecha inicio</h3>
                                <p>${tarea.fechaInicio}</p>
                            </div>
                            <div class="col">
                                <h3>Fecha Final</h3>
                                <p>${tarea.fechaFinal}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h3>Responsable:</h3>
                                <p>${tarea.Responsable}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h3>Dificultad:</h3>
                                <p>${tarea.dificultad}</p>
                            </div>
                            <div class="col">
                                <div class="cajitaIconos">
                                    <i class='bx bxs-check-square acabada' id = ${tarea.nombreTarea}></i>
                                    <i class='bx bxs-checkbox-minus fallida' id = ${tarea.nombreTarea}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        } catch (error) {
            console.error(error);
        }
        const datos = await getProducts()
        seleccion(datos)
    }
}

customElements.define("cards-tareas", tareasAsignadas);
