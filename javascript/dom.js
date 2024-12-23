const myform = document.getElementById("myForm");

myform.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameField = document.getElementById("name");
  const phoneField = document.getElementById("phone");
  const emailField = document.getElementById("email");
  const addressField = document.getElementById("address");
  const pinField = document.getElementById("pincode");

  let nameInput = nameField.value;
  let emailInput = emailField.value;
  let phoneInput = phoneField.value;
  let addressInput = addressField.value;
  let pincodeInput = pinField.value;

  const emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
  const namePattern = "^[a-zA-Z ]{5,50}$";
  const phonePattern = "^[1-9][0-9]{9}$";
  const addressPattern = "^[a-zA-Z0-9 ,.-/]{0,150}$";
  const pincodePattern = "^[1-9][0-9]{5}$";

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let addressError = document.getElementById("addressError");
  let pincodeError = document.getElementById("pincodeError");

  if (
    nameInput == "" ||
    emailInput == "" ||
    phoneInput == "" ||
    addressInput == "" ||
    pincodeInput == ""
  ) {
    alert("u should fill all the fields");
  }

  if (!nameInput.match(namePattern)) {
    nameError.innerText = "invalid username";
    nameError.style.color = "red";
  } else {
    nameError.innerText = "";
  }

  if (!phoneInput.match(phonePattern)) {
    phoneError.innerText = "phone number should be 10";
    phoneError.style.color = "red";
  } else {
    phoneError.innerText = "";
  }

  if (!emailInput.match(emailPattern)) {
    emailError.innerText = "invalid email";
    emailError.style.color = "red";
  } else {
    emailError.innerText = "";
  }

  if (!addressInput.match(addressPattern)) {
    addressError.innerText = "address should not exceed 150 characters";
    addressError.style.color = "red";
  } else {
    addressError.innerText = "";
  }

  if (!pincodeInput.match(pincodePattern)) {
    pincodeError.innerText = "pincode should be 6 digits";
    pincodeError.style.color = "red";
  } else {
    pincodeError.innerText = "";
  }
});
