
document.getElementById("btnSubmit").addEventListener("click", getValues)

function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        let fbArray = FizzBuzz(fizzValue, buzzValue);
        displayValues(fbArray);


    } else {
        alert("Wrong values");
    }


}


function FizzBuzz(fizzValue, buzzValue) {

    let numArray = [];
    for (let index = 1; index <= 100; index++) {
        if (index % fizzValue == 0 && index % buzzValue != 0) {
            numArray.push("Fizz");
        } else if (index % buzzValue == 0 && index % fizzValue != 0) {
            numArray.push("Buzz");
        } else if (index % fizzValue == 0 && index % buzzValue == 0) {
            numArray.push("FizzBuzz");
        } else {
            numArray.push(index);
        }
    }
    return numArray;
}

function displayValues(fbArray) {

    let tableBody = document.getElementById("results");


    let templateRow = document.getElementById("fbTemplate");


    tableBody.innerHTML = "";


    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");


        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index]

        rowCols[1].classList.add(fbArray[index + 1])
        rowCols[1].textContent = fbArray[index + 1];

        rowCols[2].classList.add(fbArray[index + 2])
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index + 3])
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index + 4])
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);

    }
}