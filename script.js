// Example: Banner Play Button Interaction
document.querySelector('.banner button').addEventListener('click', function() {
    alert('Playing the selected movie/show!');
});

// My List button interaction
document.querySelector('.list-btn').addEventListener('click', function() {
    alert('Added to your list!');
});
// Save email to LocalStorage
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    localStorage.setItem('subscribedEmail', email); // locally store
    alert("Email saved locally! (No backend used)");
    document.getElementById('emailInput').value = '';
});





// Modal display functionality
document.querySelector('.banner button').addEventListener('click', function() {
    document.getElementById('playModal').style.display = "block"; // Show modal
});

// Get the modal and close button
var modal = document.getElementById('playModal');
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Start button functionality (optional)
document.querySelector('.startBtn').addEventListener('click', function() {
    alert('Enjoy your movie/show!');
    modal.style.display = "none"; // Close the modal
});

