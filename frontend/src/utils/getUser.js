export async function getUser(){
    let response =await fetch('https://jsonplaceholder.typicode.com/users/1')
    response =await response.json();
    return response
}