export async function getPosts(page=1){
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=18&_page=${page}`);
    response = await response.json();
    return response;
}