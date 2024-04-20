function getSeven() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            // resolve(7)
            reject(new Error("error"))
        }, 4000)
    })
}

const promise = getSeven();
console.log(promise);

promise.then((data) => {
    console.log(data)
}).catch((e) => {
    console.log(e);
})

function getAgeOfUserName(name) {
    return new Promise(function(resolve, reject){
        if (name === 'Alex') {
            setInterval(() => {
                resolve(25)
            }, 3000)
        } else {
            setInterval(() => {
                reject(new Error("error no such user"))
            })
        }
    })
}

getAgeOfUserName('Alex')
.then((data) => console.log(data))
.catch((e) => console.log(e))

getAgeOfUserName('Tom')
.then((data) => console.log(data))
.catch((e) => console.log(e))