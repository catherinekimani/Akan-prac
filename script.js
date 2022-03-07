function getName (){
    // variables: day, month, year.
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    // gender variables
    var gender = document.querySelector('input[name="gender"]:checked').value;

    // var days
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

    // var Akan names 
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // birthdate
    var dateOfBirth = new Date (year + '/'+month + '/' +day);
    var dayOftheWeek = dateOfBirth.getDay();

    // form validation
    if (day <= 0 || day > 31) {
        document.getElementById("error").innerText = "Please Enter valid day"
    } else if (month <= 0 || month > 12) {
        document.getElementById("error").innerText = "Incorrect!!"
    } else if (year <= 0 || year > 2022) {
        document.getElementById("error").innerText = "Please enter valid year"
    } else if(gender == "male") {
        document.getElementById("findName").innerText = "your were born on " + days[dayOftheWeek] + "." + " Your Akan name is " + maleNames[dayOftheWeek] + "!"
    } else if (gender == "female"){
        document.getElementById("findName").innerText = "your were born on" + days[dayOftheWeek] + "." + " Your Akan name is " + femaleNames[dayOftheWeek] + "!"
    }
}
