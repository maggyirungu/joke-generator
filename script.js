const bclick = document.getElementById("btn");
const joke = document.getElementById("joke");
const apiKey = "XTjbEyiyR2f1T4OFv4XWBQ==z8piTNdugTuuaPqK";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1 ";
async function getJoke() {
  joke.innerText = "Updating...";
  bclick.disabled = true;
  bclick.innerText = "Loading...";

  const response = await fetch(apiURL, options);
  const data = await response.json();
  joke.innerText = data[0].joke;

  bclick.disabled = false;
  bclick.innerText = "Tell me a joke";
}

bclick.addEventListener("click", getJoke);
