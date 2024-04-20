function getDriverLicense(success, failure) {
    let key = Math.random();
    if (key < 0.1) {
        success('успех!', key);
    } else {
        failure('упс, неудача', key);
    }
        
    
}

function success(result, key) {
    console.log("Успешно завершено с результатом", result);
    console.log(key);
}

function failure(error, key) {
    console.log("Завершено с ошибкой", error);
    console.log(key);
}

getDriverLicense(success, failure)