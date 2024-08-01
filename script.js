document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.theory, .practical');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            calculateTotal(this);
            calculateOverallResults();
        });
    });
});

function calculateTotal(element) {
    const row = element.closest('tr');
    const theoryInput = row.querySelector('.theory');
    const practicalInput = row.querySelector('.practical');
    const totalInput = row.querySelector('.total');

    const theoryMarks = parseFloat(theoryInput.value) || 0;
    const practicalMarks = parseFloat(practicalInput.value) || 0;
    const totalMarks = theoryMarks + practicalMarks;

    totalInput.value = totalMarks;
}

function calculateOverallResults() {
    const totalInputs = document.querySelectorAll('.total');
    let grandTotal = 0;

    totalInputs.forEach(input => {
        grandTotal += parseFloat(input.value) || 0;
    });

    const percentage = (grandTotal / 700) * 100;
    const result = percentage >= 40 ? 'PASS' : 'FAIL';

    document.getElementById('overallPercentage').textContent = percentage.toFixed(2) + '%';
    document.getElementById('overallResult').textContent = result;
}


