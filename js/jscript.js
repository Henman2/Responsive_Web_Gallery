//get array of all the images saved in gallery
const numberOfImages = 9;
const imgSources = [];
for(let i = 1; i <= numberOfImages; i++){
    imgSources.push(`gallery/car${i}.jpg`);
}

 const imgContainer = document.querySelector(".flex-container");
 //loop through and display
 imgSources.forEach((src, index) =>{
    const img = document.createElement("img");
    img.classList.add("thumbnail");
    img.src = src;
    img.alt = `Ford Raptor ${index+1}`;
    imgContainer.appendChild(img);
 });

 // Get the modal
 var modal = document.getElementById('myModal');       
 // select an image from class with name thumbnail
 let selectedImg = document.querySelectorAll('.thumbnail'); 
 let modalImg = document.getElementById("imgModal");
 // var captionText = document.getElementById("caption");
 for(let i=0; i < selectedImg.length; i++) {
     selectedImg[i].onclick = function(){
         modal.style.display = "block";
         modalImg.src = this.src;
         modalImg.alt = this.alt;
     // captionText.innerHTML = this.alt;
 }
 }
 // When the user clicks on <span> (x), close the modal
 modal.onclick = function() {
    imgModal.className += " out";
     setTimeout(function() {
        modal.style.display = "none";
        imgModal.className = "modal-content";
      }, 400); 
  }        