// document.addEventListener("DOMContentLoaded", function () {
//     const addBookButton = document.getElementById("addBookButton");
//     const addBookForm = document.getElementById("addBookForm");
//     const submitBtn = document.querySelector(".submitBtn");
  
//     // Event listener to show/hide the form
//     addBookButton.addEventListener("click", function () {
//       addBookForm.style.display = "block";
//     });
  
//     // Event listener for form submission
//     submitBtn.addEventListener("click", function () {
//       addBookForm.style.display = "none";
//     });
//   });
  // Get the modal
  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}