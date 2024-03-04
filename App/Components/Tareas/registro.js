import {postProducts} from '../../../Apis/tareas/tareasApi.js';
export class registro extends HTMLElement{
    constructor() {
        super();
        this.render();
        this.saveData();
    }
    render(){
        this.innerHTML = /* html */`
        <div class="card mt-3">
            <div class="card-header">
                Tarea
            </div>
            <div class="card-body">
            <form id="frmTarea">
                <div class="row">
                    <div class="col-3">
                        <label for="nombreTarea" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombreTarea" name="nombreTarea">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="fechaInicio" class="form-label">Fecha Inicio</label>
                        <input type="date" class="form-control" id="fechaInicio" name ="fechaInicio">
                    </div>
                    <div class="col">
                        <label for="fechaFinal" class="form-label">Fecha Final</label>
                        <input type="date" class="form-control" id="fechaFinal" name="fechaFinal">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="Responsable" class="form-label">Responsable</label>
                        <input type="text" class="form-control" id="Responsable" name="Responsable">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="dificultad" class="form-label">Dificultad</label>
                        <select name="dificultad" id="dificultad">
                            <option value="facil">facil</option>
                            <option value="mediano">mediano</option>
                            <option value="dificil">dificil</option>
                        </select>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                    <div class="container mt-4 text-center">
                        <a href="#" class="btn btn-success" id="btnGuardar">Guardar Tarea</a>
                    </div>
                    </div>
                </div> 
            </form>
            </div>
        </div>
    `
    }
    saveData = () =>{
        const frmRegistro = document.querySelector('#frmTarea');
        document.querySelector('#btnGuardar').addEventListener("click", (e) =>{
            const datos = Object.fromEntries(new FormData(frmRegistro).entries());
            postProducts(datos);
            e.stopImmediatePropagation();
            e.preventDefault();
        })
}
};
customElements.define("registro-tarea", registro);