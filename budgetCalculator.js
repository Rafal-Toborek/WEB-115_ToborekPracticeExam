const button = document.getElementById('calculateBudget');
const budgetResults = document.getElementById('budgetResults');
const monthlyIncome = document.getElementById('monthlyIncome');
const monthlyExpenses = document.getElementById('monthlyExpenses');
const monthlySavingsP = document.getElementById('monthlySavings');
const projectedSavingsP = document.getElementById('projectedSavings');
try {
    
    button.addEventListener('click', calculateBudget);
    function calculateBudget() {
        let income = prompt('Enter your monthly income:');
        income = parseFloat(income);
        if (isNaN(income)) {
            throw new Error('Invalid input for income. Please enter a number.');
        }
        let expenses = prompt('Enter your monthly expenses:');
        expenses = parseFloat(expenses);
        if (isNaN(expenses)) {
            throw new Error('Invalid input for expenses. Please enter a number.');
        }
        let months = prompt('Enter the number of months to budget for:');
        months = parseInt(months);
        if (isNaN(months)) {
            throw new Error('Invalid input for months. Please enter a number.');
        }

        let monthlySavings = income - expenses;
        let projectedSavings = monthlySavings * months;


        monthlyIncome.textContent = `Monthly Income: $${income.toFixed(2)}`;
        monthlyExpenses.textContent = `Monthly Expenses: $${expenses.toFixed(2)}`;
        monthlySavingsP.textContent = `Monthly Savings: $${monthlySavings.toFixed(2)}`;

        for (let i=0; i<months; i++) {
            let monthlyProjected = monthlySavings * (i + 1);
            if (projectedSavings < 0) {
            projectedSavingsP.textContent = "Warning: Spending exceeds income.";
            break;
        }

            projectedp = budgetResults.appendChild(document.createElement('p'));
            projectedp.textContent = `Projected Savings after ${i + 1} months: $${monthlyProjected.toFixed(2)}`;
        }
    }
} catch (error) {
    console.error('An error occurred:', error);
}