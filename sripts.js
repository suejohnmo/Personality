// function personality() {
//   var userName = "";
//   userName = prompt("Please enter your name:");
//   var question1 = prompt(userName + "Are you Introverted or Extroverted? Enter 1 for intro and 2 for extra");
//   var question2 = propmt("Do you like the being Indoors or Outdoors? Enter 1 for indoors and 2 for outdoors");
//   if (question1 == "" || question2 == "") {
//     alert("you missed a step");
//   } else if (question1 == "1" && question2 == "1") {
//     alert("You should get a cat!Meow");
//   } else if (question1 == "2" && question2 == "1") {
//     alert("You should get a dog!Woof");
//   } else if (question1 == "2" && question2 == "2") {
//     alert("you should get a dog and a cat");
//   }
//   /* } else if{
//     alert("you should get neither");
//   } */
//
// }

function check(){

	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;

	var correct = 0;

  if (question2 == "" || question3 == "") {
		correct++;
}
	if (question2 == "2" && question3 == "3") {
		correct++;
}
	if (question2 == "3" && question3 == "2") {
		correct++;
}
	if (question2 == "3" && question3 == "3") {
		correct++;
	}


	var messages = ["you missed a step" , "You should get a cat!Meow" , "You should get a dog!Woof" , "you should get a dog and a cat"];
	var score;

	if (question2 == "" || question3 == "") {
		alert("you missed a step");
	}

	if (question2 == "2" && question3 == "2") {
		alert("You should get a cat!Meow");
	}

	if (question2 == "3" && question3 == "2") {
		alert("You should get a dog!Woof");
	}

  if (question2 == "3" && question3 == "3") {
    alert("you should get a dog and a cat");
  }
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages(alert);
	document.getElementById("number_correct").innerHTML =  + correct + "";
	// document.getElementById("picture").src = pictures[score];
	}
