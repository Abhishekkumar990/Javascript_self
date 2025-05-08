const image = ["https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",

    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",

    "https://as1.ftcdn.net/jpg/01/17/74/42/220_F_117744270_RcWaPulPITQhQZSQHcJV0zLVGzgU17PJ.jpg"
]

let index = 0;
const slideImage = document.getElementById('image');

setInterval(() => {
    index = (index + 1) % image.length;
    slideImage.src = image[index];
}, 3000);

// Here is the logo id in js to show the page logo
document.getElementById('logo-id').textContent = "Abhishek";

//Here it is the dropdown code
function navfunction() {
    const drop = document.getElementById('nav-dropdown');
    drop.classList.toggle('show')

}