// 1. Target Element DOM References
const scoreInput = document.getElementById("score-input");
const extraCreditChk = document.getElementById("extra-credit-chk");
const computeBtn = document.getElementById("compute-btn");
const outputMatrix = document.getElementById("output-matrix");

// 2. Core Operational Computation Function
function calculateGradePayload() {

    // Trim whitespace from the raw input string
    const trimmedInput = scoreInput.value.trim();

    // Convert the trimmed input value into a number
    let rawScore = Number(trimmedInput);

    // 3. Validation Logic using standard if/else
    if (trimmedInput == "") {
    outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid number.</strong>";
    return;
    }

    else if (isNaN(rawScore)) {
    outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid number.</strong>";
    return;
    }

    else if (rawScore < 0) {
    outputMatrix.innerHTML= "<strong class='text-danger'>Range Violation: Score must be between 8 and 100.</strong>";
    return;
    }

    else if (rawScore > 100) {
    outputMatrix.innerHTML = "<strong class='text-danger'>Range Violation: Score must be between e and 100.</strong>";
    return;
    }

    //4. Extra Credit Logic usang standard 11/else
    let finalScore = 0;

    if (extraCreditChk.checked) {
    finalScore = rawScore + 5; 
    } 
    
    else {
        finalScore = rawScore;
    }

    // Cap the maximum score at 100
    if (finalScore > 100) {
    finalScore = 100;
    }

    // 5. Pass/Fail Decision Logic using standard if/else
    let statustext = "";
    let statusColorClass = "";

    if (finalScore >= 75) {
        statusText = "Passed";
        statusColorClass = "text-success";
    }
    
    else {
        statusText = "Failed";
        statusColorclass = "text-danger";
    }
    
    //6. Output the final HTML result
    outputMatrix.innerHTML = "<h4>Final Score: " + finalScore + "</h4>" +
                             "<h1 class='display-4 " + statusColorClass + " font-bold'>" + statusText + "</h1>";
    
}

//7. Attaching the Listener Connection
computeBtn.addEventListener("click", calculateGradePayload);5