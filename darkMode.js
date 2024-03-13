const darkModeToggle = document.getElementById('darkModeToggle');
const mainContainers = document.getElementsByClassName('main-container');
let darkModeEnabled = localStorage.getItem('darkModeEnabled');
const body = document.body;


if (darkModeEnabled === 'true') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    localStorage.setItem('darkModeEnabled', darkModeEnabled);
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    for (let i = 0; i < mainContainers.length; i++) {
        mainContainers[i].classList.add('dark-mode');
    }
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    for (let i = 0; i < mainContainers.length; i++) {
        mainContainers[i].classList.remove('dark-mode');
    }
}
