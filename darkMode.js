const darkModeToggle = document.getElementById('darkModeToggle');
const mainContainers = document.getElementsByClassName('main-container');
let darkModeEnabled = localStorage.getItem('darkModeEnabled');
const body = document.body;

// Convertit la chaîne récupérée de localStorage en booléen
darkModeEnabled = darkModeEnabled === 'true';

// Inverse la valeur de darkModeEnabled
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Applique le mode sombre si darkModeEnabled est true
if (darkModeEnabled) {
    toggleDarkMode();
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('click', () => {
    // Inverse la valeur de darkModeEnabled lors du clic
    darkModeEnabled = !darkModeEnabled;
    console.log(darkModeEnabled);
    // Met à jour le mode sombre
    toggleDarkMode();
    // Enregistre la nouvelle valeur de darkModeEnabled dans localStorage
    localStorage.setItem('darkModeEnabled', darkModeEnabled);
});
