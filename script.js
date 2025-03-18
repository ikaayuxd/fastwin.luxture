let countdownSeconds = 28;
const countdownElement = document.getElementById('countdown');

// Countdown Timer
setInterval(() => {
    if (countdownSeconds > 0) {
        countdownSeconds--;
        const minutes = Math.floor(countdownSeconds / 60);
        const seconds = countdownSeconds % 60;
        countdownElement.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}, 1000);

// Populate sample records in the grid
const records = [
    '4', '5', '0', '3', '1', '2', '3', '1', '9',
    '3', '7', '7', '1', '6', '3', '4', '8', '3', '8',
    '9', '1', '?'
];

const recordGrid = document.querySelector('.record-grid');
records.forEach(record => {
    const recordButton = document.createElement('button');
    recordButton.className = 'number';
    recordButton.innerText = record;
    recordGrid.appendChild(recordButton);
});
