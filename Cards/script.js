const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let jokeContainer = document.getElementById("joke");
let btn = document.getElementById("btn");

const getJoke = async () => {
  jokeContainer.classList.remove("fade");
  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    if (data.type === "single") {
      // Single-part joke
      jokeContainer.innerText = data.joke;
    } else {
      // Two-part joke
      jokeContainer.innerText = `${data.setup} ... ${data.delivery}`;
    }

  } catch (error) {
    jokeContainer.innerText = "Oops! Something went wrong. Please try again.";
  }
};

btn.addEventListener("click", getJoke);
getJoke();
