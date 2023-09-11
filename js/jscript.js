 // Get the modal
 var modal = document.getElementById('myModal');
         
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 // var img = document.getElementById('car1');
 // select and image from class with name thumbnail
 var selectedImg = document.querySelectorAll('.thumbnail'); 
 var modalImg = document.getElementById("imgModal");
 // var captionText = document.getElementById("caption");

 for(var i=0; i < selectedImg.length; i++) {
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