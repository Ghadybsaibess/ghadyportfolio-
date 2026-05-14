const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 90) {
      element.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
