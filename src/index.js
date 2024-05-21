const init = () => {
  const dogImgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  const dogBreedSection = document.getElementById("dog-breeds")
  let dogBreedList

  const displayDogImgs = (imgArray) => {
    imgArray.forEach(dogImg => {
      const imgSection = document.getElementById("dog-image-container")
      const imgTag = document.createElement("img")
      imgTag.src = dogImg
      imgTag.style.height = "500px"
      imgTag.style.width = "500px"
      imgSection.appendChild(imgTag)
    });
  }

  const changeColor = () => {
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

  const sortDogBreeds = () => {
    const sortDropdown = document.getElementById("breed-dropdown") 
    const originalList = dogBreedSection.innerHTML
    sortDropdown.addEventListener("click", (event) => {
      dogBreedSection.innerHTML = originalList
      let userOption = event.target.value 
      let sortedList = []
      for (const listItem of dogBreedList){
        if(listItem.textContent.charAt(0) === userOption){
          sortedList.push(listItem)
        }
      }
      dogBreedSection.innerHTML = ""
      sortedList.map((listItem) => {
        dogBreedSection.appendChild(listItem)
      })
      changeColor(sortedList)
    })
  }

  const displayDogBreeds = (dogBreedObject) => {
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
    dogBreedList = dogBreedSection.children
    changeColor()
    sortDogBreeds()
  }

  const handleFetch = (url, cb) => {
    fetch(url)
    .then(resp => resp.json())
    .then(resp => cb(resp.message)
  )}

  handleFetch(dogImgUrl, displayDogImgs)
  handleFetch(breedUrl, displayDogBreeds)

}

document.addEventListener("DOMContentLoaded", init)
