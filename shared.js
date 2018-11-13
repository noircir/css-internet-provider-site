const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop.style.backgroundImage);

if (selectPlanButtons) {
    selectPlanButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // modal.style.display = 'block';
            // backdrop.style.display = 'block';
            modal.classList.add('open');
            backdrop.classList.add('open');
        });
    });
}

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
    closeModal();
    mobileNav.classList.remove('open');
});

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});