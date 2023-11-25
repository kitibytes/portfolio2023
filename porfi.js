// porfi.js
// const navbar = document.querySelector('.navbar');
//const content = document.querySelector('#content');

//function updateNavbarColor() {
    //const contentBackgroundColor = window.getComputedStyle(content).backgroundColor;
    //navbar.style.backgroundColor = contentBackgroundColor;

    // Check if the background is dark or light based on a brightness threshold
    //const brightnessThreshold = 128; // Adjust this value as needed

    // Convert the background color to RGB values
    //const rgb = contentBackgroundColor.match(/\d+/g);
    //if (rgb) {
        // Calculate brightness
        c//onst brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;

        // Set the text color based on brightness
        //if// (brightness < brightnessThreshold) {
           // navbar.style.color = 'white'; // Dark background, white text
           // navbar.style.backgroundColor = 'red';
     //   }// else {
          //  navbar.style.color = 'black'; // Light background, black text
           // navbar.style.backgroundColor = 'pink';
       // }
   // }
//}

// window.addEventListener('scroll', updateNavbarColor);
//updateNavbarColor();


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredPassword = document.getElementById('password').value;

    // entered password is "555"
    if (enteredPassword === '555') {
        // Redirect correct password
        window.location.href = 'private.html';
    } else {
        // Redirect incorrect password
        window.location.href = 'sweater.html';
    }
});

const video = document.getElementById('hidden-video');

video.addEventListener('ended', function () {
    video.play();
});

//background light going to be the pink from her apt (COLOR PICKER w black text or text blocks and white smoke letters)
//background dark will be either this red or a dark dark plum and light will be magenta, chartreuse or whitesmoke, moonlight yellow or silver, or a cream color. letters will be the same with text box