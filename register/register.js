var count = 1;
document.getElementById('summary').style.display = 'none';
function participantTemplate(count) {
    return `
   <section class="participant${count}">
            <p id="count">Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" value="" required="">
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity">
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee">
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date">
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected="" value="" disabled=""></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>
    `;
}

document.getElementById('add').addEventListener('click', function() {
    // Your code here
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

function summaryTemplate(count, name, fee) {
    document.getElementById('summary').innerHTML = `
        <h3>Thank you ${name} for registering. You have registered ${count} participants and owe \$${fee} in Fees.</h3>
    `;
}

function submitForm(event) {
    event.preventDefault();
    var fee = totalFees();
    var name = document.getElementById('adult_name').value;
    summaryTemplate(count, name, fee);
    document.querySelector('form').style.display = 'none';
    document.getElementById('summary').style.display = 'block';
}

document.querySelector('form').addEventListener('submit', submitForm);