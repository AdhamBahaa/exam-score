var score = prompt("Enter your Exam Score:");

// if else Statements

if (score < 100 && score >= 85) {
  alert("You got an A 🎉");
  console.log("You got an A 🎉");
} else if (score < 85 && score >= 75) {
  alert("You got a B 🎉");
  console.log("You got an B 🎉");
} else if (score < 75 && score >= 65) {
  alert("You got a C 📜");
  console.log("You got a C 📜");
} else if (score < 65 && score >= 50) {
  alert("You got a D 👌");
  console.log("You got a D 👌");
} else if (score < 50 && score >= 0) {
  alert("You got a F 😟");
  console.log("You got a F 😟");
} else if (score > 100 || score < 0) {
  alert("Invalid Score ✖️");
  console.log("Invalid Score ✖️");
} else if (score == 100) {
  alert("Perfect Score 🏆");
  console.log("Perfect Score 🏆");
} else if (typeof score != Number) {
  alert("Not a Number ✖️");
  console.log("Not a Number ✖️");
}

//Switch Statemnent

switch (true) {
  case score == 100:
    alert("Perfect Score 🏆");
    console.log("Perfect Score 🏆");
    break;
  case score > 100 || score < 0:
    alert("Invalid Score ✖️");
    console.log("Invalid Score ✖️");
    break;
  case score < 100 && score >= 85:
    alert("You got an A 🎉");
    console.log("You got an A 🎉");
    break;
  case score < 85 && score > 75:
    alert("You got a B 🎉");
    console.log("You got an B 🎉");
    break;
  case score <= 75 && score > 65:
    alert("You got a C 📜");
    console.log("You got a C 📜");
    break;
  case score <= 65 && score > 50:
    alert("You got a D 👌");
    console.log("You got a D 👌");
    break;
  case score <= 50 && score > 0:
    alert("You got an F 😟");
    console.log("You got a F 😟");
    break;
  default:
    alert("Not a Number ✖️");
    console.log("Not a Number ✖️");
}
