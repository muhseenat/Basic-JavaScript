//Promise is a object used for asynchronous computations.


const prom= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data is fetched after 3 seconds");
    },3000);

    setTimeout(()=>{
        reject("No data back from the server,there is a error");
    },5000);

});

prom.then((response)=>{
    console.log(response);
}).catch(err=>{
    console.log(err);
});