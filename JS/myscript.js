
function validateForm(){
	var name = document.forms["contactMeForm"]["name"].value;
	var email = document.forms["contactMeForm"]["mail"].value;
	var comment = document.forms["contactMeForm"]["comment"].value;
	
	if(name==""){
		alert("Must enter name!");
		return false;
	}

	if(email==""){
		alert("Please enter your email address!");
		return false;
	}
	
	if(comment==""){
		alert("Hey, you forgot to put in some text to send!");
		return false;
	}
}