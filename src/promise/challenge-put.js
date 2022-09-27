/*En este reto vamos a modificar información de nuestra API con el método Fetch PUT*/
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi,{
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

/* En data vamos a enviar los campos y los valores que queremos asignar y modificar */
const data = {
    "title": "Nuevo titulo",
    "price": 100,
}

/*En este caso vamos a modificar el producto con el ip 210 (puede ser que no exista este producto en el futuro porque esta API la utilizan para probar este curso) */

postData(`${API}/products/210`, data)
// .then(response => console.log(response.json()))
.then(response => response.json())
.then(data => console.log(data));