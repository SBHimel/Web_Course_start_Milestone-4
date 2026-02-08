
//----Problem-01: New Price for Eid Sale---

function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        const invalid = "Invalid";
        return invalid;
    }
    else if (discount < 0 || discount > 100) {
        const invalid = "Invalid";
        return invalid;
    }
    else if (currentPrice > 0) {
        const discountAmount = (currentPrice * discount) / 100;
        const finalPrice = currentPrice - discountAmount;
        return finalPrice.toFixed(3);
    }
    else {
        return "Invalid";
    }
}
console.log(newPrice(1500, 20));    // 1200.000
console.log(newPrice(2000, 15));    // 1700.000
console.log(newPrice("1500", 20));  // Invalid
console.log(newPrice(1500, 150));   // Invalid
console.log(newPrice(-500, 20));    // Invalid



//Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
    if (typeof otp !== "string") {
        const invalid = "Invalid";
        return invalid;
    }
    else if (otp.length !== 8) {
        return false;
    }
    else if (!otp.startsWith("ph-")) {
        return false;
    }
    else {
        return true;
    }
}


// ------------------------
// উদাহরণ
console.log(validOtp("ph-10985"));    // true
console.log(validOtp("ph-1234"));     // false
console.log(validOtp("abc-12345"));   // false
console.log(validOtp(["ph-10985"]));  // Invalid
console.log(validOtp(12345678));      // Invalid



//----Problem-03: BCS Final Score Calculator----



function finalScore(omr) {
    const right = omr.right;
    const wrong = omr.wrong;
    const skip = omr.skip;
    const totalQuestions = right + wrong + skip;
    if (typeof omr !== "object" || Array.isArray(omr) || omr === null) {
        const invalid = "Invalid";
        return invalid;
    }
    else if (typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number") {
        const invalid = "Invalid";
        return invalid;
    }
    else if (totalQuestions !== 100) {
        const invalid = "Invalid";
        return invalid;
    }
    else {
        const score = right * 1 + wrong * -0.5;
        return Math.round(score);
    }
}

// ------------------------
// উদাহরণ
console.log(finalScore({ right: 67, wrong: 23, skip: 10 })); // 56
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));  // Invalid
console.log(finalScore({ right: 50, wrong: 10, skip: 40 })); // 45
console.log(finalScore({ right: 30, wrong: 30, skip: 40 })); // 15
console.log(finalScore("!@#"));                              // Invalid
console.log(finalScore(["Raj"]));                             // Invalid



//---------Problem-04: Upcoming Gono Vote

function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid"; 
    }
    let haVoteDilo = 0;
    let naVoteDilo = 0;
    for (let i = 0; i < array.length; i++) {
        let dilo = array[i]; 

        if (dilo === "ha") {
            haVoteDilo = haVoteDilo + 1; 
        } 
        else if (dilo === "na") {
            naVoteDilo = naVoteDilo + 1;
        }
        
    }
    if (haVoteDilo > naVoteDilo) {
        return true; 
    } 
    else if (haVoteDilo === naVoteDilo) {
        return "equal"; 
    } 
    else {
        return false; 
    }
}

// ------------------------
// উদাহরণ
console.log(gonoVote(["ha", "na", "ha", "na"])); // equal
console.log(gonoVote(["ha", "na", "na"]));       // false
console.log(gonoVote(["ha", "ha", "ha", "na"])); // true
console.log(gonoVote("ha, na"));                 // Invalid
console.log(gonoVote(12345));                    // Invalid


//-----Problem-05: Text Analyzer for an AI Company---

function analyzeText(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let spaceChara = str.split(" ").join("");
    if (spaceChara.length === 0) {
        return "Invalid";
    }

    let alada = str.split(" ");
    let longWord = "";
    for (let i = 0; i < alada.length; i++) {
        if (alada[i].length > longWord.length) {
            longWord = alada[i];
        }
    }

    let totalCharecter = spaceChara.length;
    let result = {};
    result.longwords = longWord;
    result.token = totalCharecter;

    return result;
}

// ------------------------
console.log(analyzeText("I am a little honest person")); // { longwords: "little", token: 22 }
console.log(analyzeText("Hello world"));                 // { longwords: "Hello", token: 10 }
console.log(analyzeText(" "));                           // Invalid
console.log(analyzeText("Keep coding keep shining"));
// Output: { longwords: "shining", token: 21 }

console.log(analyzeText(12345));
// Output: Invalid

console.log(analyzeText("Programming is fun"));
// Output: { longwords: "Programming", token: 16 }

console.log(analyzeText("A quick brown fox"));
// Output: { longwords: "quick", token: 14 }

console.log(analyzeText(" "));
// Output: Invalid
