// faq section

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {

    item.addEventListener('click', () => { 
        item.children[1].classList.toggle('faq-answer-hidden');
        item.children[1].classList.toggle('faq-answer-visible');
    }
    );      
});
    
// dark mode button/white mode button
const modeBtn = document.querySelector('#themeButton');
modeBtn.addEventListener('click', () => {
    console.log('clicked');
    const faq = document.querySelector('.faq');
    faq.classList.toggle('faq-darkmode');
    faqItems.forEach((item) => {
        item.classList.toggle('faq-item-darkmode');
    });
    document.querySelector('body').classList.toggle('lightmode');
    document.querySelector('body').classList.toggle('darkmode');
    const htmlContent = document.querySelector('.themeIcon');
    htmlContent.innerHTML === "🌙" ? htmlContent.innerHTML = "☀️" : htmlContent.innerHTML = "🌙";
});
    