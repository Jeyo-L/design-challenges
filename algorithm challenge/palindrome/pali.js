
document.getElementById('checkButton').addEventListener('click', function () {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');
  
    if (!inputString) {
      resultElement.textContent = 'Please enter a word or phrase.';
      resultElement.style.color = 'red';
      return;
    }
  
    const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');
  
    if (cleanedString === reversedString) {
      resultElement.textContent = `"${inputString}" is a palindrome!`;
      resultElement.style.color = 'green';
    } else {
      resultElement.textContent = `"${inputString}" is not a palindrome.`;
      resultElement.style.color = 'red';
    }
  });
  