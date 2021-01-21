function openModal() {
    var myEmailInput = document.getElementById("emailInput");
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("cpsw");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");    
    var match = document.getElementById("match");

    var substring = "@colorado.edu";

    //when user is entering email
    myEmailInput.onkeyup = function() {
        console.log(myEmailInput.value);

        console.log(myEmailInput.value.includes(substring));

        if (myEmailInput.value.includes(substring) && myEmailInput.value.length == 21)
        {
            document.getElementById("emailInputHelp").innerHTML = "Valid Email!";
            document.getElementById("emailInputHelp").style.color = "green";
        }

        if (myEmailInput.value.includes(substring) == false && myEmailInput.value.length != 21)
        {
            document.getElementById("emailInputHelp").innerHTML = "Please Enter a Valid Email!";
            document.getElementById("emailInputHelp").style.color = "red";
        }
    }

	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
        var lowerCaseLetters = /[a-z]/g; // : Fill in the regular experssion for lowerCaseLetters
        var upperCaseLetters = /[A-Z]/g; // : Fill in the regular experssion for upperCaseLetters
        var numbers = /[0-9]/g; // : Fill in the regular experssion for digits
        var minLength = 8; // : Change the minimum length to what what it needs to be in the question 

        if(myInput.value.match(lowerCaseLetters)) {             
            letter.classList.remove("invalid"); 
            letter.classList.add("valid"); 
        } else {
            letter.classList.remove("valid"); 
            letter.classList.add("invalid"); 
        }

        // Validate capital letters        
        if(myInput.value.match(upperCaseLetters)) { 
            capital.classList.remove("invalid"); 
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers        
        if(myInput.value.match(numbers)) { 
            number.classList.remove("invalid"); 
            number.classList.add("valid"); 
        } else {
            number.classList.remove("valid"); 
            number.classList.add("invalid");
        }

        // Validate length
        if(myInput.value.length >= minLength) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }

    }
    confirmMyInput.onkeyup = function() {
                // Validate password and confirmPassword
                var passEqualsConfPass = ((myInput.value) == (confirmMyInput.value)); 
                if(passEqualsConfPass) { 
                    match.classList.remove("invalid"); 
                    match.classList.add("valid"); 
                } else {
                    match.classList.remove("valid"); 
                    match.classList.add("invalid"); 
                }        

                // Disable or Enable the button based on the elements in classList
                enableButton(letter, capital, number, length, match);
    }
}


function enableButton(letter, capital, number, length, match) 
{
    var button = document.getElementById('my_submit_button');
    var condition = (letter.className == "valid" && capital.className == "valid" && length.className == "valid" && match.className == "valid"); // TODO: Replace false with the correct condition
    if(condition) 
    {       
            button.disabled = false;
    }
    else
    {
        button.disabled = true;
    } 
}   
