import axios from "axios"
export async function getUser(){
    let response =await axios('https://jsonplaceholder.typicode.com/users/1')
    return response
}