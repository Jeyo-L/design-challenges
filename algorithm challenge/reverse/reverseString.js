// Get elements
const inputString = document.getElementById('inputString');
const reverseBtn = document.getElementById('reverseBtn');
const reversedOutput = document.getElementById('reversedOutput');

// Add event listener
reverseBtn.addEventListener('click', () => {
  const str = inputString.value.trim();
  if (str) {
    reversedOutput.textContent = str.split('').reverse().join('');
  } else {
    reversedOutput.textContent = 'Please enter a valid string!';
  }
});

