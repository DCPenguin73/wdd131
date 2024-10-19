document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.querySelector('.navigation');

    const menuButton = document.querySelector('button.menu');
    menuButton.addEventListener('click', function() {
        if (window.innerWidth < 1000) {
            if (navigation.style.display === 'none') {
                navigation.style.display = 'block';
            } else {
                navigation.style.display = 'none';
            }
        }
    });
});

function showNavigation() {
    const navigation = document.querySelector('.navigation');
    if (window.innerWidth < 1000) {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
}

window.addEventListener('resize', showNavigation);


function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
    // console.log('in viewHandler', event.target);
	// create a variable to hold the element that was clicked on from event.target
    let clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    let pic = clickedElement.src.split("-");
    // console.log('src', clickedElement.src);
    // console.log(pic);
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let newPic = pic[0] + "-full.jpeg";
    // console.log(newPic);
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    let test = viewerTemplate(newPic, clickedElement.alt);
    // console.log(test);
    document.body.insertAdjacentHTML("afterbegin", test);
    
    // console.log('after insert');

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);

}

function closeViewer() {
    // remove the viewer element from the DOM
    document.querySelector('.viewer').remove();

}

document.querySelector(".gallery").addEventListener("click", function(event) {
    console.log(event.target.tagName);
    if (event.target.tagName === 'IMG') {
        viewHandler(event);
    }
});
