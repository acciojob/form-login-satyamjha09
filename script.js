function getFormvalue() {
    // Get the first name and last name input values
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;

    // Combine the values and display in an alert
    const alertMessage = `${firstName} ${lastName}`;
    alert(alertMessage);
}
