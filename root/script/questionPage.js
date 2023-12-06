function toggleContent(dropdownIcon, dropdownContent) {
    dropdownIcon.addEventListener('click', function () {
        if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
            dropdownContent.style.display = 'block';
            dropdownIcon.classList.remove('fa-plus');
            dropdownIcon.classList.add('fa-minus');
        } else {
            dropdownContent.style.display = 'none';
            dropdownIcon.classList.remove('fa-minus');
            dropdownIcon.classList.add('fa-plus');
        }
    });
}

// Select the icon and the dropdown content
const dropdownIconOne = document.getElementById('dropdownIconOne');
const dropdownContentOne = document.getElementById('dropdownContentOne');
toggleContent(dropdownIconOne, dropdownContentOne);

// Select the icon and the dropdown content
const dropdownIconTwo = document.getElementById('dropdownIconTwo');
const dropdownContentTwo = document.getElementById('dropdownContentTwo');
toggleContent(dropdownIconTwo, dropdownContentTwo);

// Select the icon and the dropdown content
const dropdownIconThree = document.getElementById('dropdownIconThree');
const dropdownContentThree = document.getElementById('dropdownContentThree');
toggleContent(dropdownIconThree, dropdownContentThree);

const dropdownIconFour = document.getElementById('dropdownIconFour');
const dropdownContentFour = document.getElementById('dropdownContentFour');
toggleContent(dropdownIconFour, dropdownContentFour);
