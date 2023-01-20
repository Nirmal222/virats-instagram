import axios from "axios"
export async function getPosts(page=1){
    let response = await axios(`https://jsonplaceholder.typicode.com/photos?_limit=18&_page=${page}`);
    return response;
}