const inputField = document.getElementById("input-btn");
const submitbtn = document.getElementById("submit-btn");

const names = ["ayan","chirag","ashwani"];

submitbtn.addEventListener("click", () => {
    console.log("btn clicked")
	const inputValue = inputField.value.trim().toLowerCase();

	if (names.includes(inputValue)) {
		alert("Current aura balance = -7. don't live in delulu.");
	} else {
		alert("Current aura count = +7. Thala for a reason.");
	}
});
