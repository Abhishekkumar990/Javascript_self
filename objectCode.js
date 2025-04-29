let obj = {
    user1: {
        fname: "Abhishek",
        mname: "Kumar",
        lname: "sharma",
        online: "true",
    },
    user2: {
        fname: "Rajesh",
        mname: "Kumar",
        lname: "sharma",
        online: "true",
    },
    user3: {
        fname: "Rajesh",
        mname: "Kumar",
        lname: "sharma",
        online: "true",
    }
}

let obj1Data = `This is first objet data: ${obj.user1.fname} ${obj.user1.mname} ${obj.user1.lname}`;
console.log(obj1Data);


let obj2Data = `This second obj data ${obj.user2.fname} ${obj.user2.mname} ${obj.user2.lname}`

console.log(obj2Data);

obj.user1.gender = "male";

//loop for the objects
function cilckbtn() {
    document.getElementById('display').textContent = obj1Data + `${ obj.user1.gender}`;
    //     delete obj.user1.gender;

    document.getElementById('dis').textContent = obj1Data + `${ obj.user1.gender}`;
    let loopValue = "";
    for (let key in obj) {
        let element = document.getElementById('loop');
        element.style.color = "#fff";
        element.style.backgroundColor = "blue";
        element.style.padding = "10px";
        element.style.border = "1px solid black"
        element.style.borderRadius = "5px"
        let user = obj[key]
        loopValue += `${key}: ${user.fname} ${user.mname} ${user.lname}<br>`


    }
    document.getElementById('loop').innerHTML = loopValue;

}



// using the array in object.

let obj1 = {
    color: "Red",
    name: "ford",
    manufatured: "21/02/2003",
    start: function() {
        console.log("engine stated");
        return "Engine started";
    }
}

function start() {
    let p = document.createElement('p');
    p.textContent = obj1.start();
    p.style.color = "blue";
    p.style.fontWeight = 500;
    document.getElementById('cont').appendChild(p)
}
//