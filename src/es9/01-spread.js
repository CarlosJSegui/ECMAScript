const user = {
    username: "Carlos",
    age: 31,
    country: "Cuba",
};

// const {username, ...values} = user;
// console.log(username);
// console.log(values);

const { country,...values} = user;
console.log(country);
console.log(values);