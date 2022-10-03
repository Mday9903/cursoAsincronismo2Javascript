/*En este reto vamos a eleminar información de nuestra API con el método Fetch DELETE*/
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi,{
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}


/* En este caso vamos a borrar el producto con el id número 204 */

postData(`${API}/products/204`)
// .then(response => console.log(response.json()))
.then(response => response.json())
.finally(console.log("Se borró el producto!"))
// .then(data => console.log(data));