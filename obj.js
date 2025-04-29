let obj = {
    name: "abhishek",
    email: "abc@123gmail.com",
    address: "Bihar",

    sessions: ["monday", "sunday"],
    isLoggedIn() {
        console.log(`Welcome ${this.name}`);

    }

}


console.log(obj)

console.log(obj.isLoggedIn());