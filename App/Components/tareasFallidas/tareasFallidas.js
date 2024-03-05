import { getProducts } from '../../../Apis/tareas/tareasApi.js';
export class tareasFallidas extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    async render() {
        try {
            const datos = await getProducts();
            datos.forEach(tarea => {
                if(tarea?.seleccion===false){
                    this.innerHTML += /* HTML */`
                    <style rel="stylesheet">
                        @import "App/Components/tareasFallidas/tareasFalidas.css";
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
                                <p>Fallida</p>
                            </div>
                        </div>
                    </div>
                `;
                }
            });
        } catch (error) {
            console.error(error);
        }
        
    }
}

customElements.define("cards-tareas-fallidas", tareasFallidas);