function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        document.getElementById("fn").innerHTML = ("First Name must be filled out..");
        return false;
    }
}

const form = document.getElementById('form')
const checkbox = document.getElementById('checkbox')
const message = document.getElementById('message1')

form.addEventListener('submit', function validateCheckbox(e) {
    e.preventDefault()
    if (checkbox.checked === true) {
        message.innerHTML = 'Done'
    }
    else {
        message.innerHTML = 'Please Check Something'
    }
})