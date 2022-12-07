

function findbmi() {

	var w = document.getElementById("weight").value;
	var h1 = document.getElementById("heightft").value;
	var h2 = document.getElementById("heightin").value;

	if (w === '') {
		alert("Enter weight");
	} else if (h1 === '') {
		alert("Enter height in ft");
	} else if (h2 === '') {
		alert("Enter height in inches");
	} else {

		var temp = (parseInt(h1) * 12 + parseInt(h2));
		var res = 703 * parseInt(w)/(temp * temp); // 703*(weight/height^2)
		res = Math.round(100*res)/100; // rounds to nearest hundredth


		document.getElementById("result").innerText = "Your BMI is: " + res;
		document.getElementById("result").style.display = "block";

		var suggest = document.getElementById("suggest");
		if (res < 18.5) {
			suggest.innerText = "You are underweight :(";

			suggest.style.display = "block";
			

		} else if (res > 18.5 && res < 24.9) {
			suggest.innerHTML = "You are normal weight :)";
			suggest.style.display = "block";
		} else if (res > 25 && res < 29.9) {
			suggest.innerHTML = "You are over weight :(";
			suggest.style.display = "block";
		} else if (res > 30) {
			suggest.innerHTML = "You are obese :(";
			suggest.style.display = "block";
		} else {
			suggest.innerHTML = "Did you enter correct measurements?";
			suggest.style.display = "block";
		}

		//alert("Your BMI is: " + res);

		document.getElementById("weight").value = "";
		document.getElementById("heightft").value = "";
		document.getElementById("heightin").value = "";
	} 
}
