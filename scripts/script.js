document.addEventListener('DOMContentLoaded', function() {
    // get the button element
    const changeImageButton = document.querySelector('.btn-outline-light');
    // get the image element
    const backgroundImage = document.querySelector('.bg-image');
    // store the original background image URL
    const originalImageURL = backgroundImage.style.backgroundImage;
    // add event listener to the button
    changeImageButton.addEventListener('click', function() {
        // toggle the image URL
        backgroundImage.style.backgroundImage = (backgroundImage.style.backgroundImage === originalImageURL) ? "url('images/abbeyroad2.png')" : originalImageURL;
    });
});
