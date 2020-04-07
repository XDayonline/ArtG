export function getCarsfromAPi(){
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    const url= 'https://artgback.herokuapp.com/api/cars' + API_TOKEN;
    return fetch(url)
        .then((response) => response.json)
        .then(json => console.log(json))
        .catch((error) => console.error(error))
}