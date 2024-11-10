import { participantTemplate, summaryTemplate } from './template.mjs';

var count = 1;
document.getElementById('summary').style.display = 'none';

document.getElementById('add').addEventListener('click', function() {
    count++;
    document.getElementById('add').insertAdjacentHTML('beforebegin', participantTemplate(count));
    console.log('Button with id "add" was clicked');
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    var total = feeElements.reduce((acc, feeElement) => {
        return acc + parseInt(feeElement.value || 0); // Ensure to handle empty values
    }, 0);
    return total;
}

function submitForm(event) {
    event.preventDefault();
    var fee = totalFees();
    var name = document.getElementById('adult_name').value;
    document.getElementById('summary').innerHTML = summaryTemplate(count, name, fee);
    document.querySelector('form').style.display = 'none';
    document.getElementById('summary').style.display = 'block';
}

document.querySelector('form').addEventListener('submit', submitForm);