console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)

let modes = document.querySelectorAll("button")

// Extra credit: Select the navbar

let na = document.querySelector("nav")
console.log(na)

// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar

modes[0].addEventListener("click", function(event){
   body.style.backgroundColor = "white";
  body.style.color = "black";
  na.classList.remove("bg-dark");
  na.classList.add("bg-light");
});



// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar

modes[1].addEventListener("click", function(event){
   body.style.backgroundColor = "black";
  body.style.color = "white";
  na.classList.add("bg-dark");
  na.classList.remove("bg-light");
});

// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards

let im = document.getElementsByClassName("card-img-top rounded")

// Console log the length of the array to confirm you have all 4 images

console.log(im.length)

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)

for(let i = 0; i < im.length; i++){
im[0].addEventListener("mouseover", function(event){
   im[0].src = "images/ears.gif"
}) 
  im[0].addEventListener("mouseout", function(event){
     im[0].src = "images/ears.jpg"
  })
  
    im[1].addEventListener("mouseout", function(event){
     im[1].src = "images/halp.jpg" 
  })
      im[1].addEventListener("mouseover", function(event){
     im[1].src = "images/halp.gif"
  })
  
    im[2].addEventListener("mouseover", function(event){
     im[2].src = "images/husky.gif"
  })
    im[2].addEventListener("mouseout", function(event){
     im[2].src = "images/husky.jpg"
  })
  
    im[3].addEventListener("mouseout", function(event){
     im[3].src = "images/dance.jpg"
  })
      im[3].addEventListener("mouseover", function(event){
     im[3].src = "images/dance.gif"
  })

 
}