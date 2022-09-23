document.querySelector(".btn").addEventListener("click", binaryToDecimal);

function binaryToDecimal(){
    var value = document.querySelector("#binary").value;
    let span = document.createElement("span");
    var result = document.querySelector(".result");
    result.appendChild(span)
    let decimalNumber = 0;
    decimalNumber = parseInt(value, 2);
    span.innerHTML = decimalNumber;
    

}