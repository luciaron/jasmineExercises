window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      updateMonthly(update());
    });
  }
});



function getCurrentUIValues() { //use this in other functions rather than redeclaring the object
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs


// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let principle = document.getElementById('loan-amount'); // best practice includes avoiding declaration of global variables in case a coworker might need the same thing for another function
  let term = document.getElementById('loan-years');
  let apr = document.getElementById('loan-rate');
  principle.value = 1000;
  term.value = 5;
  apr.value = 5;
  let obj = {
    amount: principle.value,
    years: term.value,
    rate: apr.value
  }
  calculateMonthlyPayment(obj);
  updateMonthly(update());
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let obj = getCurrentUIValues();
  let monthly = calculateMonthlyPayment(obj);
  return monthly;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //p = principle, i = periodic interest (apr/12), n = total payments (years*12)
  let p = values.amount;
  let i = values.rate / 100 / 12;
  let n = values.years * 12;
  let numerator = p * i;
  let parens = 1 + i;
  let exp = parens**-n;
  let denominator = 1 - exp;
  return (numerator/denominator).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  update();
  let payment = document.getElementById('monthly-payment');
  payment.innerText = `$${monthly}`;
}