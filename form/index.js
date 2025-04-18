document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    //     const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    //     local Database using only js.
    const users = [{
            id: 1,
            name: "Abhishek",
            email: "a@gmail.com"
        },
        {
            id: 2,
            name: "sharma",
            email: 'b@gmail.com'
        }

    ]

    const match = users.find(user => user.name === name && user.email === email);




    if (match) {
        formMessage.textContent = "given data is same in the page!";
        formMessage.style.color = "green";

        // Optionally clear form
        this.reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});