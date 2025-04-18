document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");

    const newUser = {
        name: name,
        email: email
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];


    const exists = users.some(user => user.name === newUser.name && user.email === newUser.email);

    if (!exists) {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        message.textContent = "Successfully saved!";
        message.style.color = 'green';
    } else {
        message.textContent = "User already exists!";
        message.style.color = "red";
    }

    this.reset();
});