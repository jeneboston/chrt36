function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("John Smithrovich(-ovna)")            
        },1000)
    })   
}

console.log(getName());
//working by 'then' 
getName().then((data)=>{
    console.log(data)
})

async function f(){
    const response = await getName();// opening promise by 'await'
    console.log(response)
}
f()

//same methods to return promises

function getFiveVer1(){
    return new Promise(function(resolve, reject){
        resolve(5);
    })
}

//and we r going to make same thin with 'async/await'

async function getFive(){
    return 5
}
console.log(getFive()); 