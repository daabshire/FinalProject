 function emailValidation() {
 
 	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form1.email.value)) {
    
    var myPage;
var firstName = document.getElementById('fname').value;
var lastName = document.getElementById('lname').value;
var fullName = (firstName + ' ' + lastName);

var city = document.getElementById('city').value;
var state = document.getElementById('state').value;

var email = document.getElementById('email').value;

var telephone = document.getElementById('phoneNumber').value;
var social = document.getElementById('linkedin').value;
var portfolioLink = document.getElementById('portfolio').value;

var programmingLanguages = document.getElementById('languages').value;
var softwareSkills =document.getElementById('sSkills').value;
var toolsUsed = document.getElementById('tools').value;
var graphicalSkills = document.getElementById('graphics').value;
var computerSkills = document.getElementById('computer').value;
var educationInfo = document.getElementById('education').value;

var jobDetails1 = document.getElementById('job1').value;
jobDetails1 = jobDetails1.replace(/\r?\n/g, '<br />');
var startDate1 =document.getElementById('start1').value;
var endDate1 = document.getElementById('end1').value;
var date1 = (startDate1 + ' to ');
var fullDate1 = (date1 + endDate1);

var jobDetails2 = document.getElementById('job2').value;
jobDetails2 = jobDetails2.replace(/\r?\n/g, '<br />');
var startDate2 =document.getElementById('start2').value;
var endDate2 = document.getElementById('end2').value;
var date2 = (startDate2 + ' to ');
var fullDate2 = (date2 + endDate2);

var jobDetails3 = document.getElementById('job3').value;
jobDetails3 = jobDetails3.replace(/\r?\n/g, '<br />');
var startDate3 =document.getElementById('start3').value;
var endDate3 = document.getElementById('end3').value;
var date3 = (startDate3 + ' to ');
var fullDate3 = (date3 + endDate3);

var references = document.getElementById('references').value;
references = references.replace(/\r?\n/g, '<br />');
var fullReferences = ('<h4>References</h4><p>' + references + '</p>');

var str = (firstName);
var str2 = (lastName);
var firstInitial = str.match (/\b(\w)/g);
var lastInitial = str2.match (/\b(\w)/g);
var initials = (firstInitial + lastInitial);


myPage = ('<html lang="e">\n<head>\n<title>Your Resume</title>\n<meta charset="utf-8">\n<link rel="stylesheet" type="text/css" href="stylesheet2.css">\n</head>\n<body>\n');
myPage += ('<div class="row">\n<div class="left column">\n<h1 id="initials">'+ initials + '</h1><br><br><br>\n<div class="contacts"><h4>Contact Information</h4>\n');
myPage += ('<p id="telephone">' + telephone + '</p>\n<p id="email">' + email + '</p>\n<p id="linkedIn">'+ social + '</p>\n<p id="portfolioLink">' + portfolioLink + '</p><br><br>\n<h4>Education</h4>\n<p id="educationInfo">'+ educationInfo + '</p><br><br>\n<h4>References</h4>\n<p id="references">'+ references + '</p>\n</div>\n</div>\n');
myPage += ('<div class="right column">\n<div class="name"><h1 id="fullName">' + fullName +'</h1><br><br><br></div>\n<div class="experience-section">\n'); 
myPage += ('<h3>Professional Experience</h3>\n<p id="fullDate1">' + fullDate1 +'</p>\n<p class= "details" id="jobDetails1">' + jobDetails1 + '</p><br>\n<p id="fullDate2">' + fullDate2 + '</p>\n<p class= "details" id="jobDetails2">' + jobDetails2 +'</p><br>\n');
myPage += ('<p id="fullDate3">' + fullDate3 +'</p>\n<p class="details" id="jobDetails3">' + jobDetails3 +'</p><br>\n<h4>Programming Languages</h4>\n<p id="programmingLanguages">'+ programmingLanguages +'</p>\n');
myPage += ('<h4>Software Skills</h4>\n<p id="softwareSkills">' + softwareSkills +'</p>\n<h4>Graphical Skills</h4>\n<p id="graphicalSkills">'+ graphicalSkills +'</p>\n');
myPage += ('<h4>Tools</h4>\n<p id="toolsUsed">' + toolsUsed +'</p>\n<h4>Computer Skills</h4>\n<p id="computerSkills">' + computerSkills +'</p>\n</div>\n</div>\n</div>\n');
myPage += ('</body>\n</html>');

resumeWindow = window.open('', 'myResume', 'width=800,height=800');
resumeWindow.document.write(myPage);

    return (true);

  }
    alert("You have entered an invalid email address!");
    return (false);
}





/*

Current Issues:
References not pulling  - details


myPage += ('<h4>Graphical Skills</h4>
					<p id="graphical"></p>

					<h4>Tools</h4>
					<p id="tools"></p>\n');
myPage += ('<h4>Computer Skills</h4>
					<p id="computer"></p>
				</div>
		</div>
	</div>\n');





 if (input.value.match(emailFormat)) {

    return resumeWindow;

  } else {

    alert("Invalid email address");

    document.form1.email.focus();

    return false;
}
}

if (emailFormat = false) {
	alert ("You must enter a valid email address");
} else {
	return resumeWindow;
}

*/