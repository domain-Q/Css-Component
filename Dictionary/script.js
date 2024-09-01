const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const button = document.getElementById("search-btn");

button.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
     result.classList.remove("center")
      result.innerHTML = ` <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()" >
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition} 
            </p>
            <p class="word-example">${
              data[0].meanings[0].definitions[0].example || ""
            } </p>`;
      sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
      
    }).catch((err)=>{
        result.classList.add("center")
        result.innerHTML =`<h3 class="error" >Bekaar hai bhaiya mai toh toot gya</h3>
                   <img class="puneet" src="./this-straight-up-made-me-sad-for-puneet-the-judges-didnt-v0-rot6mjpdqk7b1.webp" alt="">`
    })
});
function playSound(){
    sound.play()
}
