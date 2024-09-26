const themeSelector = document.querySelector('select'); // replace 'select' with the appropriate selector for your dropdown element
function changeTheme() {
    // check to see what the current value of our select is.
    // The current value is conveniently found in themeSelector.value!
    if (themeSelector.value === 'dark') {
        // if the value is dark then:
        // add the dark class to the body
        document.body.classList.add('dark');
        // change the source of the logo img to point to the white logo.
        document.querySelector('img').src = 'byui-logo_white.png';
    } else {
        // otherwise
        // remove the dark class
        document.body.classList.remove('dark');
        // make sure the logo src is the blue logo.
        document.querySelector('img').src = 'byui-logo_blue.webp';
    }    
}
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);
