const dogImgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dogBreedSection = document.getElementById("dog-breeds")

const getDogImgs = () => {
  fetch(dogImgUrl)
  .then(resp => resp.json())
  .then(resp => displayDogImgs(resp))
}

const displayDogImgs = (resp) => {
  const imgArray = resp.message
  imgArray.forEach(dogImg => {
    const imgSection = document.getElementById("dog-image-container")
    const imgTag = document.createElement("img")
    imgTag.src = dogImg
    imgSection.appendChild(imgTag)
    });
}


const init = () => {
  getDogImgs()

  fetch(breedUrl)
  .then(resp => resp.json())
  .then(resp => {
    const dogBreedObject = resp.message
    console.log(dogBreedObject)
    for (const dogBreed in dogBreedObject){
      if(dogBreedObject[dogBreed].length >= 1){
        
      }
    }
  })


}

document.addEventListener("DOMContentLoaded", init)
