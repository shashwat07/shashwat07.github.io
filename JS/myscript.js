

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

$(document).ready(function(){
	$("#addImage").click(function(){
		$("#addModal").modal();
	})
});

var id;
var obj = JSON.parse(data);
var img = obj.images;

loadImages(img);
getId();

function loadImages(img){
	var txt="";
	for(var index=0; index<img.length;index++){
		var url = obj.images[index].url;
		var alt = obj.images[index].alt;
		var info = obj.images[index].info;
		var upDate = obj.images[index].upDate;
		var imgId =  index;

		txt += "<div class=\"floated_img col-lg-4 col-md-6 gallImg\" >";
		txt += "<img src=\"";
		txt += url;
		txt +=  "\"class=\"img-fluid\" alt =\"";
		txt += alt;
		txt += "\" id =\"";
		txt += imgId;
		txt += "\"data-toggle=\"modal\" data-target=\"#editModal\"";
		txt += "><p>";
		txt += info;
		txt+="</p></div>";
	}

	document.getElementById('addImg').innerHTML = txt;
}

var today = formatDate();

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}


$("#add").on("click", function(e) {
    e.preventDefault();

   	var alt = document.forms["modalForm"]["imgAlt"].value;
	var url = document.forms["modalForm"]["imgUrl"].value;
	var info = document.forms["modalForm"]["imgInfo"].value;
	var upDate = document.forms["modalForm"]["upDate"].value;

	if(alt == "" || url == "" || info == "" || upDate == ""){
		alert("Fields can't be empty!");
	}
	else if(upDate>today){
		alert("Future date not accepted!");
	}
	else{
		var imgId = img.length;
		img.push({id : imgId, alt : alt, url : url, info : info, upDate : upDate});

		loadImages(img);
		getId();

		alert("Image added!");
	}

		

	$("#addModal").modal('hide');

	

});




$("#edit").on("click", function(e) {
    e.preventDefault();
   	var altNew = document.forms["modalFormEdit"]["imgAltEdit"].value;
	var urlNew = document.forms["modalFormEdit"]["imgUrlEdit"].value;
	var infoNew = document.forms["modalFormEdit"]["imgInfoEdit"].value;
	var upDateNew = document.forms["modalFormEdit"]["upDateEdit"].value;


	if(altNew == "" || urlNew == "" || infoNew == "" || upDateNew == ""){
		alert("Fields can't be empty!");
	}
	else if(upDateNew>today){
		alert("Future date not accepted!");
	}
	else{
		img[id].url = urlNew;
		img[id].alt = altNew;
		img[id].info = infoNew;
		img[id].upDate = upDateNew;

		loadImages(img);
		getId();

		alert("Image modified!");
	}

	$("#editModal").modal('hide');

	

});


$("#remove").on("click", function(e) {
    e.preventDefault();
   	var alt = document.forms["modalFormEdit"]["imgAltEdit"].value;
	var url = document.forms["modalFormEdit"]["imgUrlEdit"].value;
	var info = document.forms["modalFormEdit"]["imgInfoEdit"].value;
	var upDate = document.forms["modalFormEdit"]["upDateEdit"].value;

	var flag = 1;
	for(var index=0; index<img.length;index++){
		if(alt == img[index].alt && url == img[index].url && info == img[index].info ){
			flag=0;
			break;
		}
	}
	if(flag){
		alert("No image found with this specifications!");
	}
	else{

		img.splice(index,1);
		loadImages(img);
		getId();
		alert("Image removed!");

	}

	$("#editModal").modal('hide');


});


function getId(){
	$('img').click(function(){
		id = this.id;
		document.getElementById("imgAltEdit").value=img[id].alt;
		document.getElementById("imgUrlEdit").value=img[id].url;
		document.getElementById("imgInfoEdit").value=img[id].info;
		document.getElementById("upDateEdit").value=img[id].upDate;

	});
}



