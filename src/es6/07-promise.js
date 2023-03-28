const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Yeah");
        } else {
            reject("Sorry");
        }
    })
} 

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));