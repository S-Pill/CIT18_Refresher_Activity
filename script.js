const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);

function setThemeMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = 'Dark Mode';
    }
}

setThemeMode();
