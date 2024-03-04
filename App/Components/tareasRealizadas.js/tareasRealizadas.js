import { getProducts } from '../../../Apis/tareas/tareasApi.js';
export class tareasRealizadas extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    async render() {
        try {
            const datos = await getProducts();
            datos.forEach(tarea => {
                if(tarea?.seleccion===true){
                    this.innerHTML += /* HTML */`
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
                                <p>Finalizada</p>
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

customElements.define("cards-tareas-realizadas", tareasRealizadas);