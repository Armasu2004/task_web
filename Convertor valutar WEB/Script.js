function convert() {
	var amount = document.getElementById("amount").value;
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;

	if (from == "USD" && to == "EUR") {
		var result = amount * 0.83;
	} else if (from == "USD" && to == "MDL") {
		var result = amount * 17.57;
	} else if (from == "EUR" && to == "USD") {
		var result = amount * 1.20;
	} else if (from == "EUR" && to == "MDL") {
		var result = amount * 21.27;
	} else if (from == "MDL" && to == "USD") {
		var result = amount * 0.057;
	} else if (from == "MDL" && to == "EUR") {
		var result = amount * 0.047;
	} else {
		var result = amount;
	}

	document.getElementById("result").innerHTML = amount + " " + from + " = " + result.toFixed(2) + " " + to;
	document.getElementById("result").style.display = "block";
}
