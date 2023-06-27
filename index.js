const compute = () => {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let year = new Date().getFullYear() + parseInt(years);
    let result = document.getElementById("result");

    const amount = parseInt(principal);
    const interest = principal * years * rate / 100;

    
    if(principal <= 0){
        alert("Please enter a positve number!");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }
    
}

const updateRate = () => {
    let rateval = document.getElementById('rate').value;
    document.getElementById("rate_val").innerText = rateval;
}
        