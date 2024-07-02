function calculateLoan(){
    const loanAmountValue = document.getElementById("loan-amount").value;
    const interestRateValue  = document.getElementById("interest-rate").value;
    const repaymentPeriodValue = document.getElementById("months").value 

    interest = (loanAmountValue * (interestRateValue * 0.01)) / repaymentPeriodValue

    monthlyPayment =  (loanAmountValue / repaymentPeriodValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
};



