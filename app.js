// https://calculator.swiftutors.com/debt-coverage-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const debtCoverageRatioRadio = document.getElementById('debtCoverageRatioRadio');
const netOperatingIncomeRadio = document.getElementById('netOperatingIncomeRadio');
const debtServiceRadio = document.getElementById('debtServiceRadio');

let debtCoverageRatio;
let netOperatingIncome = v1;
let debtService = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

debtCoverageRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Operating Income';
  variable2.textContent = 'Debt Service';
  netOperatingIncome = v1;
  debtService = v2;
  result.textContent = '';
});

netOperatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt Coverage Ratio';
  variable2.textContent = 'Debt Service';
  debtCoverageRatio = v1;
  debtService = v2;
  result.textContent = '';
});

debtServiceRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt Coverage Ratio';
  variable2.textContent = 'Net Operating Income';
  debtCoverageRatio = v1;
  netOperatingIncome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(debtCoverageRatioRadio.checked)
    result.textContent = `Debt Coverage Ratio = ${computeDebtCoverageRatio().toFixed(2)}`;

  else if(netOperatingIncomeRadio.checked)
    result.textContent = `Net Operating Income = ${computeNetOperatingIncome().toFixed(2)}`;

  else if(debtServiceRadio.checked)
    result.textContent = `Debt Service = ${computeDebtService().toFixed(2)}`;
})

// calculation

function computeDebtCoverageRatio() {
  return Number(netOperatingIncome.value) / Number(debtService.value);
}

function computeNetOperatingIncome() {
  return Number(debtCoverageRatio.value) * Number(debtService.value);
}

function computeDebtService() {
  return Number(netOperatingIncome.value) / Number(debtCoverageRatio.value);
}