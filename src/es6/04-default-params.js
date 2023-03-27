function newUser(name, age, country) {
    var name = name || "Oscar";
    var age = age || 34;
    var country = country || "US";
    console.log(name, age, country);
}

newUser();
newUser("David", 15, "Col");

function newAdmin(name = "José", age = 32, country = "CU") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("Pepe", 28, "Br");