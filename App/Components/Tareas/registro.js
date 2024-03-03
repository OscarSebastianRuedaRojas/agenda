export class registro extends HTMLElement{
    constructor() {
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    `
    }
}
customElements.define("registro-tarea", registro);