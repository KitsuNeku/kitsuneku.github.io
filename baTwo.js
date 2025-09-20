console.log("This is baTwo.js");

var firstname = "John Neo";
var lastname = "Dimayuga";
var birthyear = 2003;
var currentYear = 2025;
var age = currentYear - birthyear;
var message = "Hello, my name is " + firstname + " " + lastname + ". I am " + age + " years old. and i am learing JavaScript.";

document.getElementById("student_message").innerText = message;

var phone1 = "988866552";
var phone2 = "99887612366";
var phone3 = 876543123;

function validatePhoneNumber(phone) {
    return phone.toString().length === 9;
}

console.log("Phone1 (" + phone1 + "): " + validatePhoneNumber(phone1));
console.log("Phone2 (" + phone2 + "): " + validatePhoneNumber(phone2));
console.log("Phone3 (" + phone3 + "): " + validatePhoneNumber(phone3));

var phoneResults = `
    Phone1 (${phone1}): ${isValidPhone(phone1)} <br>
    Phone2 (${phone2}): ${isValidPhone(phone2)} <br>
    Phone3 (${phone3}): ${isValidPhone(phone3)}
`;
document.getElementById("phone_results").innerHTML = phoneResults;
