async function fetchData ()
{
    try{
        const respones = await fetch("https://jsonplaceholder.typicode.com/postss")
        const data = await respones.json();
        console.log(data);

    }catch(eror){
        console.log(eror);

    }
 
}
fetchData();
