
//create h3 element 
let heading3 = document.createElement("h3") 
heading3.setAttribute("id", "h")
heading3.innerHTML = "Please click on the identical tiles to verify that you are not a robot."
document.body.prepend(heading3)

// generate random image out of 5
let imgArray = ["img1", "img2", "img3", "img4", "img5"]
  let random_index = parseInt(Math.random()*imgArray.length)   // 3
  let random_img = imgArray[random_index]  // img3
  imgArray.push(random_img)  // img1, img2, img3, img4, img5, img3


  let imageNewArray = []

   let k1 = 0
  while(k1< imgArray.length){
      let random_index = parseInt(Math.random()*imgArray.length)  // 2

      if(imageNewArray[random_index] == undefined){
          imageNewArray[random_index] = imgArray[k1++]
      }
      else if(imageNewArray[random_index] != undefined){
          continue
      }
  }


   // assign class to images: // classList
   let images = document.querySelectorAll("img")
  let k = 0
  for(let t of images){
      // t.setAttribute("class", imgArray[k++])
      t.className = imageNewArray[k]
      t.id = k
      t.addEventListener("click",robotOrHuman)
      k++
  }


  let reset = document.createElement("button")
  reset.innerHTML = "Reset"
  reset.id = "reset"
  let verify = document.createElement("button")
  verify.id = "verify"
  verify.innerHTML = "Verify"
  let para = document.createElement("p")
  para.id = "para"

   let click = 0,  previousSelectionId = ""
  function robotOrHuman(e){
        let selctedImage = e.target
        selctedImage.classList.add("selected")
        document.body.append(reset)
        let currentSelectionId = selctedImage.id

        if(currentSelectionId != previousSelectionId){
            click++
            previousSelectionId = currentSelectionId

            if(click == 2){
              document.body.append(verify)
            }
        }
        
  }

   reset.addEventListener("click", resetGame)

   verify.addEventListener("click", verifyGame)

 

