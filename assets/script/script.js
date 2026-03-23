
    const menuLinks = document.querySelectorAll('.nav-ul a');
    const menuToggle = document.getElementById('check');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });
