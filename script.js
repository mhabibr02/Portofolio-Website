// Smooth scroll untuk navigasi
// Animasi saat halaman pertama kali dimuat
window.addEventListener('load', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200); // delay bertahap untuk efek muncul bertahap
    });
});

// Animasi saat scroll (Lazy Loading Effect)
window.addEventListener('scroll', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

