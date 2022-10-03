const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

/*Creamos una función que va a permitirnos recibir la URL y el callback que va a ser una función anónima para recibir la solicitud que nos está entregando el llamado a esta API: */

function fetchData(urlApi,callback){
    //Creamos una instancia del objeto XMLHttpRequest:
    let xhttp = new XMLHttpRequest();
    /*Ahora podemos utilizar los métodos del mismo, en este caso utilizamos "open" indicandole en el tipo de conexión "GET" para abrir una conexión a nuestra API*/
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event){
        /*Verificamos el estado  */
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

/**/
fetchData(`${API}/products`, function(error1,data1){
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            console.log('Info producto posición 0:',data1[0]);
            console.log('Nombre del producto:',data2.title);
            console.log('Categoría del producto:',data3.name);
        });
    });
});

