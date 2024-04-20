//мы можем скопировать поля - значения из одного объекта
//в другой
//Спреад объекта

const user = {name:'Igor'};
const userWithEmail = {...user, email:'example.com'};
console.log(userWithEmail);
