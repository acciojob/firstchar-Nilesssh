function firstChar(text) {
  // your code here
	let nice = text.trim();
	return nice.charAt(0);
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
