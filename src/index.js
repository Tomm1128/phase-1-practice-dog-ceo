const dogImgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

const displayDogImgs = (resp) => {
  const imgArray = resp.message
  imgArray.forEach(dogImg => {
    const imgSection = document.getElementById("dog-image-container")
    const imgTag = document.createElement("img")
    imgTag.src = dogImg
    imgSection.appendChild(imgTag)
  });
}

const displayDogBreeds = (resp) => {
  const dogBreedObject = resp.message
  const dogBreedSection = document.getElementById("dog-breeds")
  for (const dogBreed in dogBreedObject){
    if(dogBreedObject[dogBreed].length >= 1){
      dogBreedObject[dogBreed].map((breedType) => {
        let text = ""
        if (dogBreed === "australian" || dogBreed === "finnish"){
          text = `${dogBreed} ${breedType}`
        } else {
          text = `${breedType} ${dogBreed}`
        }
        const li = document.createElement("li")
        li.textContent = text         
        dogBreedSection.appendChild(li)
       })
    } else {
      const li = document.createElement("li")
      li.textContent = dogBreed
      dogBreedSection.appendChild(li)
    }
  }

  const dogBreedList = dogBreedSection.children
  for (const listItem of dogBreedList){
    listItem.addEventListener("click", () => {
      if (listItem.style.color === "red"){
        listItem.style.color = ""
      } else {
      listItem.style.color = "red"
      }
    })
  }
}

const fetchFromApi = (url, cb) => {
  fetch(url)
  .then(resp => resp.json())
  .then(resp => cb(resp))
}


const init = () => {
  fetchFromApi(dogImgUrl, displayDogImgs)
  fetchFromApi(breedUrl, displayDogBreeds)
  


}

document.addEventListener("DOMContentLoaded", init)
