//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    return `<li>  ${step}  </li>`; //the html string made from step
}

const stepsHtml = steps.map(listTemplate); // map the list to HTML
// use map to convert the list from strings to HTML
const myListElement = document.getElementById("myList");
if (myListElement) {
    myListElement.innerHTML = stepsHtml.join("");
} else {
    console.error("Element with ID 'myList' not found.");
}

const grades = ["A", "B", "A"];
const gradeTemplate = (grade) => {
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
    return `<li>  ${grade} - GPA: ${gpa}  </li>`; // the html string made from grade and GPA
}

const gradesHtml = grades.map(gradeTemplate); // map the list to HTML
// use map to convert the list from strings to HTML
const gradeListElement = document.getElementById("myList2");
if (gradeListElement) {
    gradeListElement.innerHTML = gradesHtml.join("");
} else {
    console.error("Element with ID 'myList2' not found.");
}

const gpaPoints = grades.map((grade) => {
    if (grade === "A") return 4;
    if (grade === "B") return 3;
    if (grade === "C") return 2;
    if (grade === "D") return 1;
    if (grade === "F") return 0;
    return 0; // default case
});

const gpa = gpaPoints.reduce((total, item) => total + item, 0) / grades.length;

const gpaElement = document.getElementById("myList3");
if (gpaElement) {
    gpaElement.innerHTML = `Average GPA: ${gpa.toFixed(2)}`;
} else {
    console.error("Element with ID 'myList3' not found.");
}

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const longNamedFruits = fruits.filter(fruit => fruit.length > 6);
const longNamedFruitsElement = document.getElementById("myList4");
if (longNamedFruitsElement) {
    longNamedFruitsElement.innerHTML = longNamedFruits.map(fruit => `<li>${fruit}</li>`).join("");
} else {
    console.error("Element with ID 'myList4' not found.");
}

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const index = numbers.indexOf(luckyNumber);

const resultElement = document.getElementById("act5");
if (resultElement) {
    if (index !== -1) {
        resultElement.innerHTML = `Lucky number ${luckyNumber} found at index ${index}.`;
    } else {
        resultElement.innerHTML = `Lucky number ${luckyNumber} not found.`;
    }
} else {
    console.error("Element with ID 'act5' not found.");
}