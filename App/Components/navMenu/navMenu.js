export class navMenu extends HTMLElement{
    constructor() {
        super();
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./App/Components/navMenu/menuStyle.css";
        </style>
        <nav class="navbar navbar-expand-lg bg-body-tertiary mt-3">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Agenda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="#" data-verocultar='["c"]' aria-current="page" >Crear Tareas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-verocultar='["v"]'>Tareas Realizadas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-verocultar='["p"]'>Tareas Fallidas</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        `;
        this.querySelectorAll(".nav-link").forEach((val)=>{
            val.addEventListener("click", (e)=>{
                let data = JSON.parse(e.target.dataset.verocultar);
                let mainContent = document.querySelector('#mainContent');
                mainContent.innerHTML= "";
                switch (data[0]){
                    case 'c':
                        mainContent.innerHTML= "<registro-tarea></registro-tarea>";
                        break;
                    case 'v':
                        mainContent.innerHTML= "";
                        break;
                }
                e.stopImmediatePropagation();
                e.preventDefault();
            })
        })
    }
}
customElements.define("nav-menu", navMenu);