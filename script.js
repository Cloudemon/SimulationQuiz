var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [{
    question: "What's Hong's name at home?",
    a: "Khanh",
    b: "Le",
    c: "Ni",
    d: "Vo",
    answer: "C",
    img: "none",
    video: "none",
    audio: "none",
    youtube: "none"
  	},
  { question: "What's Philly number one cons?",
    a: "queo phai $100",
    b: "because Hong is there",
    c: "everything is more expensive than elsewhere, exclude NY, CA, and Dubai",
    d: "a & c",
    answer: "D",
    img: "test2.jpg",
    video: "none",
    audio: "none",
    youtube: "none"
	},
  { question: "How long is Hong's 1 xiu?",
    a: "30 mins",
    b: "1 hour",
    c: "15 mins",
    d: "Depends, sometimes it could be as long as a whole day",
    answer: "A",
    img: "test3.jpg",
    video: "none",
    audio: "none",
    youtube: "none"
	},
	{ question: "How long is the clip?",
    a: "2 mins",
    b: "10 seconds",
    c: "5 seconds",
    d: "20 seconds",
    answer: "B",
    img: "none",
    video: "test.mp4",
    audio: "none",
    youtube: "none"
	},
	{ question: "How long is the audio clip?",
    a: "10 mins",
    b: "5 mins",
    c: "2 mins",
    d: "1 mins",
    answer: "C",
    img: "none",
    video: "none",
    audio: "MelodyOfTheNight30.mp3",
    youtube: "none"
	},
	{ question: "How long is the YouTube below?",
    a: "10 mins",
    b: "1 minute 10 seconds",
    c: "2 mins",
    d: "8 minutes 20 seconds",
    answer: "D",
    img: "none",
    video: "none",
    audio: "none",
    youtube: "https://www.youtube.com/embed/EsI3lBVOCz8"
	}	
  ];

function _(x){
	return document.getElementById(x);
}

function renderQuestion(){
	//reset message
	document.getElementById("alert-success").style.display = 'none';
	document.getElementById("alert-danger").style.display = "none";
	document.getElementById("alert-warning").style.display = 'none';

	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;		
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos].question;
	chA = questions[pos].a;
	chB = questions[pos].b;
	chC = questions[pos].c;
	chD = questions[pos].d;
	img = questions[pos].img;
	video = questions[pos].video;
	audio = questions[pos].audio;
	youtube = questions[pos].youtube;

	test.innerHTML = "<h3>"+question+"</h3>";

		//Image
		if(img == 'none'){
		//hide img element if none
		} else {
			test.innerHTML += "<img src=\"" + img + "\" width=\"200\" height=\"200\" alt=\"missing picture\"><br>";
		}

		//video
		if(video == 'none'){
		//hide video element if none
		} else {
			test.innerHTML += "<video width=\"320\" height=\"240\" controls><source src=\"" + video + "\" type=\"video/mp4\"></video><br>";
		}

		//audio
		if(audio == 'none'){
		//hide audio element if none
		} else {
			test.innerHTML += "<audio controls><source src=\"" + audio + "\" type=\"audio/mpeg\"></audio><br>";
		}

		//YouTube
		if(youtube == 'none'){
		//hide YouTube element if none
		} else {
			test.innerHTML += "<iframe width=\"420\" height=\"315\" src=\"" + youtube + "\" allowfullscreen></iframe><br>";
		}

	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

	choice = undefined;//reset feedback
	document.getElementById("alert-success").style.display = 'none';
	document.getElementById("alert-danger").style.display = "none";
	document.getElementById("alert-warning").style.display = 'none';
}

function checkAnswer(){
	choices = document.getElementsByName("choices");	
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos].answer){
		correct++;
		document.getElementById("alert-success").style.display = 'block';
		document.getElementById("alert-danger").style.display = "none";
		document.getElementById("alert-warning").style.display = 'none';		
		pos++;
		setTimeout(renderQuestion, 1000);
	} else if (typeof(choice) === 'undefined') {		
		document.getElementById("alert-success").style.display = 'none';
		document.getElementById("alert-danger").style.display = "none";
		document.getElementById("alert-warning").style.display = 'block';

	} else {		
		document.getElementById("alert-success").style.display = 'none';
		document.getElementById("alert-danger").style.display = "block";
		document.getElementById("alert-warning").style.display = 'none';
	}
};