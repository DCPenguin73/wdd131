function getGrades(inputSelector) {
    // get grades from the input box
    let grades = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    grades = grades.split(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    grades = grades.map(grade => grade.trim().toUpperCase());
    // return grades
    return grades;
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let gpa = 0;
    if (grade === "A") {
      gpa = 4;
    } else if (grade === "B") {
      gpa = 3;
    } else if (grade === "C") {
      gpa = 2;
    } else if (grade === "D") {
      gpa = 1;
    } else if (grade === "F") {
      gpa = 0;
    }
    return gpa;
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in

    // convert the letter grades to gpa points
    let gpaPoints = grades.map(lookupGrade);
    // calculates the GPA
    let gpa = gpaPoints.reduce((total, item) => total + item, 0) / grades.length;
    // return the GPA
    return gpa.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    let element = document.querySelector(selector);
    if (element) {
      element.innerHTML = `Average GPA: ${gpa.toFixed(2)}`;
    } else {
      console.error(`Element with ID '${selector}' not found.`);
    }
  }
  
  function clickHandler() {
    // when the button in our html is clicked:

    // get the grades entered into the input
    let grades = getGrades("#grades");

    // calculate the gpa from the grades entered
    let gpa = calculateGpa(grades);
    // display the gpa
    outputGpa(gpa, "#output");
  }

    // add an event listener to the button
    document
    .querySelector("#submitButton")
    .addEventListener("click", clickHandler);