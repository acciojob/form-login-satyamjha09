function getFormvalue() {

	const form = document.querySelector('form1');
	
	const firstName = document.getElementById("fname").value;
	const lastName = document.getElementById("lname").value;
	const alertMessage = ` ${firstName}  ${lastName}`;
	alert(alertMessage)
}
