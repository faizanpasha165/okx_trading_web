document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const closeBtn = document.getElementById('closeBtn');
    const toggleBtnLink = document.querySelector('.toggle_btn_link');

    toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleBtnLink.classList.add('active');
    });

    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleBtnLink.classList.remove('active');
    });



});

