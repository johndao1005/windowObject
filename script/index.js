// var button = document.getElementById("enter");
// var input = document.getElementById("input");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);

// 	li.addEventListener("click", function () {
// 		// creates a boolean that toggles the done class on li:
// 		// if the list item is clicked this toggles the done class
// 		var finished = this.classList.toggle("done");
// 		// creates a remove button for the finished item:
// 		var removeButton = document.createElement("button");
// 		removeButton.classList.add("deleteButton");

// 		// if the list item is clicked (li add event listener ) then
// 		// finished is true
// 		if (finished) {
// 			removeButton.appendChild(document.createTextNode("remove"));
// 			removeButton.classList = "deleteButton";
// 			li.appendChild(removeButton);

// 			removeButton.addEventListener("click", function () {
// 				this.parentElement.remove();
// 			});
// 		} else {
// 			this.getElementsByClassName("deleteButton")[0].remove();
// 		}
// 	});
// 	// revert input value back to nothing
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterPress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterPress);

function createWindow{
	let url="https://google.com";
	let win=window.open(url,"My New Window","width=300,height=200");
	document.getElementById("result").innerHTML = win.name + " - " +win.opener.location;
}