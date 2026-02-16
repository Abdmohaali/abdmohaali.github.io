document.querySelector("button").addEventListener("click", gradeQuiz);

function gradeQuiz(){
    let q1userAnswer = document.querySelector("input[name=q1]:checked").value;
    alert("grading quiz. . . " + q1userAnswer);
}

shuffleQ1Choices();
function shuffleQ1Choices(){
    let q1Choices = ["font-color", "text-color", "color", "color-text"];

    for(i of q1Choices){
    let radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement);
    labelElement.prepend(" ");

    document.querySelector("#q1Choices").append(labelElement);

    console.log(radioElement);
    }
}