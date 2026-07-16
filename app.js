// 1. Target Element DOM References
const midtermInput = document.getElementById("midterm-input");
const finalsInput = document.getElementById("finals-input");
const extraCreditChk = document.getElementById("extra-credit-chk");
const computeBtn = document.getElementById("compute-btn");
const outputMatrix = document.getElementById("output-matrix");

// 2. Core Operational Computation Function
function calculateFinalGrade() {

    // Trim whitespace from the raw input string
    const cleanInputMidterm = midtermInput.value.trim();
    const cleanInputFinals = finalsInput.value.trim();

    // Convert the trimmed input value into a number
    let midtermScore = Number(cleanInputMidterm);
    let finalsScore = Number(cleanInputFinals);

    //Calculate Grade
    let computedScore = (midtermScore * 0.45) + (finalsScore * 0.55);

    // 3. Validation Logic using standard if/else

        //empty input
    if (cleanInputMidterm === "" && cleanInputFinals === "") {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Error:</strong> Please type your <strong>Midterm Grade</strong> and <strong>Finals Grade</strong> before submitting.</span>";
        return;
    }

    else if (cleanInputMidterm === "") {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Error:</strong> Please do not leave an <strong>empty input</strong> on the <strong>Midterm Grade</strong>.</span>";
        return;
    }

    else if (cleanInputFinals === "") {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Error:</strong> Please do not leave an <strong>empty input</strong> on the <strong>Finals Grade</strong>.</span>";
        return;
    }

        //numbers only
    else if (isNaN(cleanInputMidterm) && isNaN(cleanInputFinals)) {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Error:</strong> Please enter only <strong>valid numbers</strong> on <strong>either grade inputs</strong>.</span>";
        return;
    }

    else if (isNaN(cleanInputMidterm)) {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Error:</strong> Please enter a <strong>valid number</strong> on your <strong>Midterm Grade</strong>.</span>";
        return;
    }

    else if (isNaN(cleanInputFinals)) {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Error:</strong> Please enter a <strong>valid number</strong> on your <strong>Finals Grade</strong>.</span>";
        return;
    }

        //below 0 limit
    else if (computedScore < 0) {
        outputMatrix.innerHTML= "<span class='text-danger'><strong>Range Violation:</strong> <strong>Midterm Grade</strong> and <strong>Finals Grade</strong> must not be <strong>below 0</strong>.</span>";
        return;
    }

    else if (cleanInputMidterm < 0) {
        outputMatrix.innerHTML= "<span class='text-danger'><strong>Range Violation:</strong> <strong>Midterm Grade</strong> must not be <strong>below 0</strong>.</span>";
        return;
    }

    else if (cleanInputFinals < 0) {
        outputMatrix.innerHTML= "<span class='text-danger'><strong>Range Violation:</strong> <strong>Finals Grade</strong> must not be <strong>below 0</strong>.</span>";
        return;
    }

        //above 100 limit
    else if (computedScore > 100) {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Range Violation:</strong> <strong>Either grade inputs</strong> must not be <strong>above 100</strong>.</span>";
        return;
    }

    else if (cleanInputMidterm > 100) {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Range Violation:</strong> <strong>Midterm Grade</strong> must not be <strong>above 100</strong>.</span>";
        return;
    }

    else if (cleanInputFinals > 100) {
        outputMatrix.innerHTML = "<span class='text-danger'><strong>Range Violation:</strong> <strong>Finals Grade</strong> must not be <strong>above 100</strong>.</span>";
        return;
    }

    // 5. Letter Equiv Decision Logic using standard if/else
    let statusText = "";
    let statusColorClass = "";

    if (computedScore === 100) {
        statusText = "A+";
        statusColorClass = "text-success";
    }

    else if (computedScore >= 96) {
        statusText = "A";
        statusColorClass = "text-success";
    }

    else if (computedScore >= 91) {
        statusText = "B";
        statusColorClass = "text-success";
    }

    else if (computedScore >= 86) {
        statusText = "C";
        statusColorClass = "text-warning";
    }

    else if (computedScore >= 81) {
        statusText = "D";
        statusColorClass = "text-warning";
    }

    else if (computedScore >= 75) {
        statusText = "E";
        statusColorClass = "text-warning";
    }
    
    else {
        statusText = "Failed";
        statusColorClass = "text-danger";
    }
    
    //6. Output the final HTML result
    outputMatrix.innerHTML = "<h4>Final Score: " + computedScore + "%</h4>" +
                             "<h1 class='display-4 " + statusColorClass + " fw-bold'>" + statusText + "</h1>";
    
}

//7. Attaching the Listener Connection
computeBtn.addEventListener("click", calculateFinalGrade);