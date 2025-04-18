let user = {
    name: "abhishek",
    age: 22,
    online: true

}
let d = `this is the page line ${user.name} and this ${user.age} and ${user.online}`

delete user.age;
document.getElementById('display').textContent = d;