// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
    // Menu mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    // Fechar menu ao clicar em um link (mobile)
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show');
        });
    });

    // Efeito de rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
