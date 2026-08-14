function addRecommendation() {
    let recText = document.getElementById('new-rec').value.trim();
    
    if (recText !== "") {
        let recList = document.getElementById('rec-list');
        let newRec = document.createElement('div');
        newRec.className = 'recommendation';
        newRec.textContent = `"${recText}" - Anonymous Viewer`;
        
        recList.appendChild(newRec);
        
        document.getElementById('new-rec').value = '';
        
        showPopup(true);
    }
}

function showPopup(show) {
    if (show) {
        alert("Thank you for submitting a recommendation!");
    }
}
