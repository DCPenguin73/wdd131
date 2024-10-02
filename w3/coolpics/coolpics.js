document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    const navigation = document.querySelector('.navigation');

    button.addEventListener('click', function() {
        if (window.innerWidth < 1000) {
            if (navigation.style.display === 'none') {
                navigation.style.display = 'block';
            } else {
                navigation.style.display = 'none';
            }
        }
    });
});