function changeImage(index, event) {
    event.preventDefault(); // Prevents the default behavior of anchor tags

    const images = document.querySelectorAll('.image');
    images.forEach((img, i) => {
        if (i + 1 === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });

    const buttons = document.querySelectorAll('.app-page-btn a');
    buttons.forEach(button => {
        button.style.backgroundColor = ''; // Reset background color for all buttons
        button.style.color = 'whitesmoke'; // Set text color for all buttons
        button.style.borderRadius = ''; // Reset border radius for all buttons
    });

    const selectedButton = document.querySelector('.app-page-btn a:nth-child(' + index + ')');
    if (selectedButton) {
        selectedButton.style.backgroundColor = 'whitesmoke'; // Change background color for selected button
        selectedButton.style.color = 'black'; // Change text color for selected button
        selectedButton.style.borderRadius = '50px'; // Set border radius for selected button
    }
}

// Set default selected button and display corresponding image
const defaultIndex = 1; // Change this index to set a different default button
const defaultButton = document.querySelector('.app-page-btn a:nth-child(' + defaultIndex + ')');
if (defaultButton) {
    defaultButton.click(); // Trigger click event on default button
}
