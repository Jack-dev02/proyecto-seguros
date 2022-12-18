let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let form = document.getElementById('form');
let message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    console.log('Data sent successfully');
    console.log('hola mundo');

    //e.preventDefault();
     
    /* metodo que inserta los datos en el html */
    //let insert = document.getElementById('insert');
    /*Capturamos los datos del input campo que se va a insertar en el html */
    //insert.innerHTML = name.value;


    /* creamos un metodo que nos permita agregar innertHTML a todos los elemento */

    /*let insert = document.getElementById('insert');
    insert.innerHTML = name.value  + '<br>'  + email.value + '<br>' + phone.value + '<br>' + message.value;

    console.log(name.value);
    console.log(email.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(message.value);

    */
});