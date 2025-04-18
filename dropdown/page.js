function toggleFunction() {
    const dropdown = document.getElementById('drop-btn');
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"; // hide the dropdown
    } else {
        dropdown.style.display = "block"; // show the dropdown
    }
    let obj = {
        name: "abhishek",
        age: 22,
        work: "web Developer",
        place: "greater Noida"

    }

    document.getElementById('name').textContent = obj.name;
    document.getElementById('age').textContent = obj.age;
    document.getElementById("work").textContent = obj.work;
    document.getElementById('place').textContent = obj.place;

}