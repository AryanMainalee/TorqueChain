const ham = document.querySelector('.ham');
const nav = document.querySelector('nav ul');

ham.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
