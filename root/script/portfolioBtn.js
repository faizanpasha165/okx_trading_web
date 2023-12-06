// Function to show the selected content and style the selected button
function showContent(target) {
    const sliders = document.querySelectorAll('.slider');
    const buttons = document.querySelectorAll('.portfolio-btns a');

    sliders.forEach(slider => {
        slider.style.display = 'none';
    });

    buttons.forEach(button => {
        button.style.backgroundColor = 'black'; // Set the background color of all buttons to black
        button.style.color = 'whitesmoke'; // Set the text color of all buttons to whitesmoke
    });

    const selectedContent = document.getElementById(`${target}-content`);
    const selectedButton = document.querySelector(`[data-target="${target}"]`);

    selectedContent.style.display = 'block';
    selectedButton.style.backgroundColor = 'whitesmoke'; // Change the background color of the selected button to whitesmoke
    selectedButton.style.color = 'black'; // Change the text color of the selected button to black
    selectedButton.style.borderRadius = '50px'; // Apply border radius of 50% to the selected button

}

// Event listener for button clicks
document.querySelector('.portfolio-btns').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const target = event.target.getAttribute('data-target');
        showContent(target);
    }
});

// By default, show the Dashboard content and style the default button
showContent('dashboard');

// Changing content color to white
const contentAreas = document.querySelectorAll('.slider');
contentAreas.forEach(area => {
    area.style.color = 'white';
});

