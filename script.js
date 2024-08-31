const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

document.getElementById("navigateButton").onclick = function() {
    window.location.href = "./pages/resume.html"; // Replace "page2.html" with the actual file name
};

document.getElementById("hire-btn").onclick = function() {
    window.location.href = "./pages/hire.html"; // Replace "page2.html" with the actual file name
};