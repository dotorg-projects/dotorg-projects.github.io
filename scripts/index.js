window.addEventListener('scroll', function () {
    let navbar = document.getElementById('main-navbar');
    if (!navbar) return;
    if (window.scrollY > 350) {
        navbar.style.backgroundColor = '#0F3D25';
        navbar.style.borderBottom = '1px solid #1A5C38';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'none';
    }
});