// Retrieving form and input elements
const form = document.getElementById("form");
const nameOfUser = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Regular expression pattern for email validation
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Function to add error message to the specified input
function appendError(parent, elementName) {
	var errorElement = parent.querySelector("#errorMessage");
	if (!errorElement) {
		// If error message does not already exist
		var errorMessage = document.createElement("p");
		errorMessage.textContent = elementName + " can not be empty or the format is not correct.";
		errorMessage.setAttribute("id", "errorMessage");
		parent.appendChild(errorMessage);
	}
}

// Function to handle input validation
function validation(element, elementName) {
	var parent = element.parentNode;

	if (element.value.trim() === "") {
		appendError(parent, elementName);
		element.setAttribute("class", "errorBox");
	} else {
		if (elementName == "Email") {
			if (!emailPattern.test(email.value)) {
				appendError(parent, elementName);
				element.setAttribute("class", "errorBox");
			} else {
				var errorElement = parent.querySelector("#errorMessage");
				if (errorElement) {
					parent.removeChild(errorElement);
				}
			}
		} else {
			var errorElement = parent.querySelector("#errorMessage");
			if (errorElement) {
				parent.removeChild(errorElement);
			}
		}
	}
}

// Function to check if there are any errors when submitting
function errorCheck(event) {
	event.preventDefault();
	var errorCount = document.querySelectorAll("#errorMessage");

	if (errorCount.length === 0) {
		alert("Form submitted");
	} else {
		alert("Please fix all errors before submitting");
		return false;
	}
}

// Adding event listeners
nameOfUser.addEventListener("input", function () {
	validation(nameOfUser, "Name");
});
email.addEventListener("input", function () {
	validation(email, "Email");
});
message.addEventListener("input", function () {
	validation(message, "Message Box");
});

// Handling form submission event
document.addEventListener("submit", errorCheck);
