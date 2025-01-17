const aboutLink = document.querySelector('.nav-links a[href="#about"]');
const contactLink = document.querySelector('.nav-links a[href="#"]'); // Измените на ссылку CONTACT

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#about');
});

contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToBottom(); // Функция прокрутки в конец страницы
});

function scrollToSection(section) {
    const targetSection = document.querySelector(section);
    const heading = targetSection.querySelector('h2, h3');
    const paragraphs = targetSection.querySelectorAll('p');
    const clientFrames = targetSection.querySelectorAll('.client-frame');

    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Сброс анимации для заголовка и параграфов
    if (heading) heading.classList.remove('scale-down-center');
    paragraphs.forEach(paragraph => {
        paragraph.classList.remove('scale-down-center');
    });

    clientFrames.forEach(frame => {
        frame.classList.remove('slide-top');
    });

    setTimeout(() => {
        if (heading) heading.classList.add('scale-down-center');
        paragraphs.forEach(paragraph => {
            paragraph.classList.add('scale-down-center');
        });
        clientFrames.forEach(frame => {
            frame.classList.add('slide-top');
        });
    }, 10);
}

// Функция для прокрутки в конец страницы
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}