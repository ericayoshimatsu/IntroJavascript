/* -------------------------------
Event Handling
----------------------------------
*/

var input = document.getElementById("input");
var button = document.getElementById("button");
var output = document.getElementById("output");

function displayOutput() {
    const text = input.value;
    output.innerHTML = text;
}

// Event listener
button.addEventListener("click", displayOutput);
