const seats = document.querySelectorAll(".seats");
const bookBtn = document.querySelector("#book");

for (let seat of seats) {
	seat.setAttribute("isClicked", false);
}

for (let seat of seats) {
	seat.addEventListener("click", function (e) {
		e.preventDefault();
		let isClicked = seat.getAttribute("isClicked");
		console.log(seat, isClicked);
		if (isClicked === "false") {
			seat.setAttribute("isClicked", true);
			seat.classList.add("selected");
		}
		if (isClicked === "true") {
			seat.setAttribute("isClicked", false);
			seat.classList.remove("selected");
		}
	});
}
