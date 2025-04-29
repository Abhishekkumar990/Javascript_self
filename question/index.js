const btnMenu = document.getElementById('navMenu');
const dropdown = document.getElementById('dropdown-content');

btnMenu.addEventListener('click', () => {
    dropdown.classList.toggle('show')
})

let objQustion = [{
        id: 1,
        qustion: "What is the capital of France?",
        options: {
            option1: "Berlin",
            option2: "Madrid",
            option3: "Paris",
            option4: "Rome"
        },
        ans: "Paris"
    },
    {
        id: 2,
        qustion: "The fall of England",
        options: {
            option1: "ans no 1",
            option2: "all fall",
            option3: "the end",
            option4: "none"
        },
        ans: "none"
    },
    {
        id: 3,
        qustion: "Which planet is known as the Red Planet?",
        options: {
            option1: "Earth",
            option2: "Mars",
            option3: "Jupiter",
            option4: "Venus"
        },
        ans: "Mars"
    },
    {
        id: 4,
        qustion: "How many continents are there on Earth?",
        options: {
            option1: "5",
            option2: "6",
            option3: "7",
            option4: "8"
        },
        ans: "7"
    },
    {
        id: 5,
        qustion: "Which is the largest ocean on Earth?",
        options: {
            option1: "Indian Ocean",
            option2: "Pacific Ocean",
            option3: "Atlantic Ocean",
            option4: "Arctic Ocean"
        },
        ans: "Pacific Ocean"
    },
    {
        id: 6,
        qustion: "Who wrote the play 'Romeo and Juliet'?",
        options: {
            option1: "Shakespeare",
            option2: "Dickens",
            option3: "Hemingway",
            option4: "Fitzgerald"
        },
        ans: "Shakespeare"
    },
    {
        id: 7,
        qustion: "What is the tallest mountain in the world?",
        options: {
            option1: "Mount Kilimanjaro",
            option2: "Mount Everest",
            option3: "Mount Fuji",
            option4: "Mount Elbrus"
        },
        ans: "Mount Everest"
    },
    {
        id: 8,
        qustion: "What is the smallest country in the world?",
        options: {
            option1: "Monaco",
            option2: "Liechtenstein",
            option3: "Vatican City",
            option4: "Malta"
        },
        ans: "Vatican City"
    },
    {
        id: 9,
        qustion: "Which country is known as the Land of the Rising Sun?",
        options: {
            option1: "China",
            option2: "Japan",
            option3: "India",
            option4: "South Korea"
        },
        ans: "Japan"
    },
    {
        id: 10,
        qustion: "Who is the inventor of the telephone?",
        options: {
            option1: "Albert Einstein",
            option2: "Thomas Edison",
            option3: "Alexander Graham Bell",
            option4: "Nikola Tesla"
        },
        ans: "Alexander Graham Bell"
    },
    {
        id: 11,
        qustion: "What is the largest animal in the world?",
        options: {
            option1: "Elephant",
            option2: "Blue Whale",
            option3: "Giraffe",
            option4: "Shark"
        },
        ans: "Blue Whale"
    },
    {
        id: 12,
        qustion: "Which element has the chemical symbol 'O'?",
        options: {
            option1: "Oxygen",
            option2: "Osmium",
            option3: "Ozone",
            option4: "Olafium"
        },
        ans: "Oxygen"
    },
    {
        id: 13,
        qustion: "Which is the longest river in the world?",
        options: {
            option1: "Amazon River",
            option2: "Nile River",
            option3: "Yangtze River",
            option4: "Mississippi River"
        },
        ans: "Nile River"
    },
    {
        id: 14,
        qustion: "What is the largest desert in the world?",
        options: {
            option1: "Sahara Desert",
            option2: "Gobi Desert",
            option3: "Arabian Desert",
            option4: "Antarctic Desert"
        },
        ans: "Antarctic Desert"
    },
    {
        id: 15,
        qustion: "Which country invented pizza?",
        options: {
            option1: "Greece",
            option2: "Italy",
            option3: "France",
            option4: "Spain"
        },
        ans: "Italy"
    },
    {
        id: 16,
        qustion: "Who painted the Mona Lisa?",
        options: {
            option1: "Van Gogh",
            option2: "Picasso",
            option3: "Da Vinci",
            option4: "Rembrandt"
        },
        ans: "Da Vinci"
    },
    {
        id: 17,
        qustion: "Which animal is known as the King of the Jungle?",
        options: {
            option1: "Lion",
            option2: "Tiger",
            option3: "Elephant",
            option4: "Giraffe"
        },
        ans: "Lion"
    },
    {
        id: 18,
        qustion: "Which is the longest running Broadway musical?",
        options: {
            option1: "Les Misérables",
            option2: "Phantom of the Opera",
            option3: "Cats",
            option4: "The Lion King"
        },
        ans: "Phantom of the Opera"
    },
    {
        id: 19,
        qustion: "What is the main ingredient in guacamole?",
        options: {
            option1: "Tomato",
            option2: "Avocado",
            option3: "Onion",
            option4: "Pepper"
        },
        ans: "Avocado"
    },
    {
        id: 20,
        qustion: "In which country is the Great Barrier Reef located?",
        options: {
            option1: "Australia",
            option2: "New Zealand",
            option3: "South Africa",
            option4: "Indonesia"
        },
        ans: "Australia"
    },
    {
        id: 21,
        qustion: "What is the currency of Japan?",
        options: {
            option1: "Yuan",
            option2: "Yen",
            option3: "Won",
            option4: "Ringgit"
        },
        ans: "Yen"
    },
    {
        id: 22,
        qustion: "What is the capital of Australia?",
        options: {
            option1: "Sydney",
            option2: "Melbourne",
            option3: "Canberra",
            option4: "Brisbane"
        },
        ans: "Canberra"
    }
];


const display = document.getElementById('question-box');

objQustion.forEach(q => {
    const wrapper = document.createElement('div');
    wrapper.style = "border: 1px solid #ccc; padding:10px; margin:10px;";

    const question = document.createElement('p');
    question.innerHTML = `<strong>Q${q.id}:</strong> ${q.qustion}`;

    // Options (as radio buttons)
    const optionsDiv = document.createElement('div');
    for (let key in q.options) {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = "radio";
        radio.name = `q${q.id}`;
        radio.value = q.options[key];
        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + q.options[key]));
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(document.createElement('br'));
    }

    const button = document.createElement('button');
    button.textContent = "Submit";
    const result = document.createElement('p');
    result.id = `result-${q.id}`;

    button.onclick = () => {
        const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
        if (selected) {
            result.textContent = selected.value === q.ans ? "Correct ✅" : "Wrong ❌";
        } else {
            result.textContent = "Please select an option!";
        }
    };

    wrapper.append(question, optionsDiv, button, result);
    display.appendChild(wrapper);
});