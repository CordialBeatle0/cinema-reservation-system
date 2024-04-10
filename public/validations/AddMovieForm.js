// All  input values in form
const form = document.querySelector("#submit-form");


// Function to display error messages
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

const confirmBtn = document.querySelector("#confirm-btn");
confirmBtn.addEventListener("click", () => {
  validatePrevious();
});


function validatePrevious() {
  
 

  
  // Clearing previous error messages
  document
    .querySelectorAll(".form-group .error")
    .forEach((field) => field.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

    // Performing validation checks
    
 
  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length === 0) {
    $(".confirm_details-btn").click(function () {
      $(".payment-form").slideDown();
    });
  }
}

// Function to handle form submission // checks for errors
const handleFormData = (e) => {
  e.preventDefault();


  // Clearing previous error messages
  document
    .querySelectorAll(".form-group .error")
    .forEach((field) => field.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

  
  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length > 0) return;

  // Submitting the form
  form.submit();
};

// Handling form submission event
form.addEventListener("submit", handleFormData);
