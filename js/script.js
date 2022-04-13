const modalWindow = document.querySelector('.modal'),
        btnsModal = document.querySelectorAll('.button-play');

btnsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
})