

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

var obj = JSON.parse(data);



var img = obj.images;
var txt="";
for(var index=0; index<img.length;index++){
	var url = obj.images[index].url;
	var alt = obj.images[index].alt;
	var info = obj.images[index].info;
	txt += "<div class=\"floated_img col-lg-4 col-md-6 gallImg\" >";
	txt += "<img src=\"";
	txt += url;
	txt +=  "\"class=\"img-fluid\" alt =\"";
	txt += alt;
	txt += "\"><p>";
	txt += info;
	txt+="</p></div>";
}

document.getElementById('addImg').innerHTML = txt;



