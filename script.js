document.getElementById('rec-form').addEventListener('submit', function(event) {
    // Prevent default form reload
    event.preventDefault();
    
    // Get recommendation text
    const recText = document.getElementById('new-rec').value.trim();
    
    if (recText !== "") {
        // Create new blockquote element
        const recList = document.getElementById('rec-list');
        const newRec = document.createElement('blockquote');
        newRec.textContent = `"${recText}" - Anonymous Viewer`;
        
        // Append to the list
        recList.appendChild(newRec);
        
        // Task 3: Trigger showPopup after successful submission
        showPopup();
        
        // Clear input field after submit
        document.getElementById('new-rec').value = '';
    }
});

function showPopup() {
    alert("Thank you for submitting a recommendation!");
}
