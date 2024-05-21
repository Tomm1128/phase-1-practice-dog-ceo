const dogImgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

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
    for (const dogBreed in dogBreedObject){
      const dogBreedSection = document.getElementById("dog-breeds")
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
  })


}

document.addEventListener("DOMContentLoaded", init)
