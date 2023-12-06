document.addEventListener('DOMContentLoaded', function () {
    const phoneContent = document.querySelector('.login_page_btn_contant_one');
    const emailContent = document.querySelector('.login_page_btn_contant_two');
    const qrCodeContent = document.querySelector('.login_page_btn_contant_three');

    const phoneBtn = document.querySelector('.phoneBtn');
    const emailBtn = document.querySelector('.emailBtn');
    const qrCodeBtn = document.querySelector('.qrCodeBtn');

    phoneBtn.addEventListener('click', function (e) {
        e.preventDefault();
        phoneContent.style.display = 'block';
        emailContent.style.display = 'none';
        qrCodeContent.style.display = 'none';

        // Set styles for selected and unselected buttons
        phoneBtn.style.textDecoration = 'underline';
        phoneBtn.style.color = 'black';
        emailBtn.style.textDecoration = '';
        emailBtn.style.color = '';
        qrCodeBtn.style.textDecoration = '';
        qrCodeBtn.style.color = '';
    });

    emailBtn.addEventListener('click', function (e) {
        e.preventDefault();
        phoneContent.style.display = 'none';
        emailContent.style.display = 'block';
        qrCodeContent.style.display = 'none';

        // Set styles for selected and unselected buttons
        phoneBtn.style.textDecoration = '';
        phoneBtn.style.color = '';
        emailBtn.style.textDecoration = 'underline';
        emailBtn.style.color = 'black';
        qrCodeBtn.style.textDecoration = '';
        qrCodeBtn.style.color = '';
    });

    qrCodeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        phoneContent.style.display = 'none';
        emailContent.style.display = 'none';
        qrCodeContent.style.display = 'block';

        // Set styles for selected and unselected buttons
        phoneBtn.style.textDecoration = '';
        phoneBtn.style.color = '';
        emailBtn.style.textDecoration = '';
        emailBtn.style.color = '';
        qrCodeBtn.style.textDecoration = 'underline';
        qrCodeBtn.style.color = 'black';
    });
});
