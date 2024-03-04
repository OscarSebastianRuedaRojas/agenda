const URL_API = "http://localhost:3000/tareas";
const myHeaders = new Headers({
    "Content-Type": "application/json"
});
const getProduct = async() => {
    try {
        const respuesta = await fetch(`${URL_API}`);
		if(respuesta.status === 200){
			const datos = await respuesta.json();
            viewDataHtml(datos);
		} else if(respuesta.status === 401){
            console.log('La url no es correcta');
		} else if(respuesta.status === 404){
            console.log('El producto que buscas no existe');
		} else {
            console.log('Se presento un error en la peticion consulte al Administrador');
		} 
	} catch(error){
        console.log(error);
	}
    
}
const postProduct = (datos) =>{

    fetch(`${URL_API}`,
	{
		method: "POST",
		headers: myHeaders,
		body:JSON.stringify(datos)
	}
    ).then(res=>{
        return res.json()
    })
    .catch(err=>{
        console.log(err);
    })

}
export {
    getProduct as getProducts,
    postProduct as postProducts
};