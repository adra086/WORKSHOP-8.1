# WORKSHOP-8.1 🐶 Dog Image Viewer
I created this project to display random dog images using an external API. Every time the user clicks the button, a new dog image is fetched and displayed dynamically on the canvas using p5.js.
Link to GitHub Repository: https://github.com/adra086/WORKSHOP-8.1

## Overview

This project uses the Dog CEO API to fetch random dog images and display them interactively on the canvas. The goal is to give users a playful experience while dynamically loading different dog images on demand.

Every time the "Get a New Dog Image" button is clicked, a new random dog image is fetched and displayed on the canvas, creating a fun and interactive experience.

## Goals

    Use the Dog CEO API to fetch random images of dogs.
    Dynamically display the image on a p5.js canvas.
    Handle errors gracefully if the API request fails.

## How I Built It
### 1. Setting Up the Project
I started by creating a basic p5.js project with an HTML file and a JavaScript sketch. The canvas is created using p5.js, and a button is added to interact with the API.

### 2. Fetching the Dog Image Using the Dog CEO API
I used the fetch() method to make an API call to the Dog CEO API, which returns a random image URL of a dog. Once the URL is received, the image is loaded using loadImage().

### 3. Displaying the Dog Image Dynamically

After fetching the image URL, I displayed the dog image on the canvas using p5.js functions. The button allows the user to fetch a new image dynamically with each click.

## Code Extracts and Explanation
### 1. Core Setup: Creating the Canvas and Button

``` javascript
function setup() {
  createCanvas(800, 600);
  background(220);

  // Create a button to fetch a new dog image
  button = createButton('Get a New Dog Image');
  button.position(20, 20);
  button.mousePressed(fetchDogImage);

  // Fetch the first dog image when the sketch loads
  fetchDogImage();
}
```

  Canvas Setup: A canvas of 800x600 is created to display the images.
  Button: The button is positioned and linked to the fetchDogImage() function, which triggers the API call.

### 2. Fetching the Dog Image Using the Dog CEO API

``` javascript
function fetchDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      dogImage = loadImage(data.message, () => {
        // Display the new dog image once it's loaded
        background(220);
        imageMode(CENTER);
        image(dogImage, width / 2, height / 2, 400, 300);
      });
    })
    .catch((err) => {
      console.error('Error fetching the dog image:', err);
      background(220);
      textSize(24);
      fill(255, 0, 0);
      text('Failed to load dog image. Please try again.', width / 2, height / 2);
    });
}
```

  fetch() Call: Requests a random dog image from the Dog CEO API.
  then() Block: Handles the successful response by loading and displaying the image.
  catch() Block: Catches and displays any error if the API request fails.

## Problems I Faced and How I Solved Them
### 1. Problem: No Dog Image Displayed Initially

    Cause: The fetch call wasn’t triggered at the start, so no image appeared until the user clicked the button.
    Solution: I added a call to fetchDogImage() inside setup() so that an image is loaded when the page is first opened.

### 2. Problem: Incorrect Image Loading Logic

    Cause: I initially tried using loadImage() outside the then() block, which caused errors since the image URL wasn’t available before the function was called.
    Solution: I moved loadImage() inside the then() block to ensure the image URL is fetched correctly before loading.

### 3. Problem: Handling API Errors Gracefully

    Cause: If the API request failed, there was no feedback to the user, and the canvas remained blank.
    Solution: I added a catch() block to display an error message on the canvas when the API request fails.

## Screenshots
### Initial Layout Before Any Interaction

![image](https://github.com/user-attachments/assets/f163a661-0283-4758-9edb-9f042f451952)

After Fetching the First Dog Image

![image](https://github.com/user-attachments/assets/76240df1-8cbc-4a2e-be37-ade0b8fbdbf5)

Another Dog Image

![image](https://github.com/user-attachments/assets/bf29aefe-3f43-4d60-80d6-ffb1d2dadd37)

## Problems I Faced and How I Solved Them

Throughout the development of this project, I encountered several issues that required debugging and problem-solving. I used trial and error along with help from ChatGPT to solve them effectively.

### 1. Problem: No Dog Image Displayed Initially

    Cause: The fetch call wasn’t triggered at the start, so no image appeared until the user clicked the button.
    How ChatGPT Helped: ChatGPT explained that the fetch call needed to be triggered as soon as the page loads, and suggested placing a call to fetchDogImage() inside setup().
    Solution: I followed ChatGPT’s suggestion and added fetchDogImage() inside setup(), ensuring that the canvas displayed an image immediately.

### 2. Problem: Incorrect Image Loading Logic

    Cause: Initially, I placed loadImage() outside the then() block, which caused the image to load before the API response was received, resulting in errors.
    How ChatGPT Helped: ChatGPT reviewed the structure of my code and pointed out that loadImage() should be called only after the image URL is successfully fetched.
    Solution: I moved loadImage() inside the then() block. This ensured that the image was loaded properly after the API returned the image URL.

### 3. Problem: Handling API Errors Gracefully

    Cause: When the API request failed, the canvas displayed no feedback, and users were left confused as to why no image appeared.
    How ChatGPT Helped: ChatGPT suggested adding a catch() block and provided an example of how to display an error message on the canvas using p5.js functions.
    Solution: I added a catch() block and used text() in p5.js to display a user-friendly error message when the API request failed. Now, if there’s an issue, users are informed with a message like “Failed to load dog image. Please try again.”

### 4. Problem: Repeated Images Occasionally Appeared

    Cause: The Dog CEO API sometimes returned the same image multiple times, making the output feel repetitive.
    How ChatGPT Helped: ChatGPT explained that this was a limitation of the API but suggested ways to handle it by maintaining a list of previously loaded images and skipping duplicates.
    Solution (Future Improvement): While I didn’t implement this in the current version, I plan to maintain an array of previously loaded images and compare new URLs to avoid repetition.

    ## Learning Points

    Using fetch() to Interact with APIs:
        I learned how to make GET requests to a public API and use the response to dynamically update the content of a web application.

    Handling API Responses and Errors:
        I practiced using then() for handling successful responses and catch() for error handling, ensuring the application remains user-friendly even when errors occur.

    Dynamic Image Loading in p5.js:
        I used loadImage() to fetch and display images from URLs dynamically, enhancing my understanding of how to work with external resources in p5.js.

### Future Improvements

    Allow users to save favorite dog images locally: Let users download or save the images they like.
    Display information about the dog breed: Fetch and display breed information alongside the dog image.
    View multiple images at once: Allow users to display a grid of dog images rather than just one at a time.

### Helpful Resources

    Dog CEO API Documentation
    p5.js Documentation
    MDN Web Docs: fetch()

