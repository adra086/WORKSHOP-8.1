<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random Dog Image API</title>
    <style>
      body {
        background-color: #f0e6d6;
        text-align: center;
        font-family: Arial, sans-serif;
      }
      canvas {
        display: block;
        margin: 20px auto;
        border: 2px solid #533d0d;
      }
      button {
        padding: 10px 20px;
        background-color: #d1a543;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
        border-radius: 8px;
      }
      button:hover {
        background-color: #927128;
      }
    </style>
  </head>
  <body>
    <h1>Random Dog Image Generator</h1>
    <p>Click the button to fetch and display a new random dog image.</p>
    <button onclick="fetchDogImage()">Get Random Dog</button>
    <script src="libraries/p5.min.js"></script>
    <script>
      let dogImage; // Variable to store the dog image object

      function setup() {
        createCanvas(600, 400);
        background(220);
        textAlign(CENTER, CENTER);
        textSize(24);
        fill(0);
        text('Click the button to see a random dog!', width / 2, height / 2);
      }

      function fetchDogImage() {
        // Fetch the API for a random dog image
        fetch('https://dog.ceo/api/breeds/image/random')
          .then((response) => response.json())
          .then((data) => {
            dogImage = loadImage(data.message, () => {
              // Clear canvas and display new dog image
              background(220);
              imageMode(CENTER);
              image(dogImage, width / 2, height / 2, 400, 300);
            });
          })
          .catch((err) => {
            console.error('Error fetching the dog image:', err);
            background(220);
            text('Failed to load dog image. Please try again.', width / 2, height / 2);
          });
      }
    </script>
  </body>
</html>
