function getStudents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const stuident = [
                {
                    name: "Anri",
                    age: 32
                }]
                resolve(stuident)            
        },4000);
    })
}
const promise = getStudents();
console.log(promise);

promise.then((data) => {
    console.log(data)
})