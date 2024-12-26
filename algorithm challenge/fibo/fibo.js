
document.getElementById('generateButton').addEventListener('click', function () {
    const input = parseInt(document.getElementById('fibonacciInput').value);
    const resultElement = document.getElementById('fibonacciResult');
  
    if (isNaN(input) || input <= 0) {
      resultElement.textContent = 'Please enter a valid positive number.';
      resultElement.style.color = 'red';
      return;
    }
  
    let sequence = [];
    for (let i = 0; i < input; i++) {
      if (i === 0 || i === 1) {
        sequence.push(1);
      } else {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
    }
  
    resultElement.textContent = `Fibonacci Sequence: ${sequence.join(', ')}`;
    resultElement.style.color = 'green';
  });
  