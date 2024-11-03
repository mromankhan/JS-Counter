let initVal = 1;
let countH1El = document.querySelectorAll(".count")[0];

// Add function
function add() {
    let countElVal = initVal;
    printMsg(countElVal, "+");
}

// Minus function
function minus() {
    let countElVal = initVal;
    printMsg(countElVal, "-");
}

// Count Value printing function
function printMsg(initialValue, operator) {
    let currentCount = Number(countH1El.innerHTML)
    if (operator === "+") {
        countH1El.innerHTML = currentCount + initialValue;
    }
    else if (operator === "-") {
        if(currentCount > 0 ){
            countH1El.innerHTML = currentCount - initialValue;
        }
    }
   
}


function reset() {
    countH1El.innerHTML = "0";
}
