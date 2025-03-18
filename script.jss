const countdownTime = 60; //Seconds
let countdownInterval;
let currentPeriod = 1;

const countdownElement = document.getElementById('countdown-time');
const periodDisplay = document.getElementById('current-period');
periodDisplay.textContent = currentPeriod;
let selectedNumber = null;
let selectedColor = null;

//Countdown timer
function updateCountdown() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    countdownElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    countdownTime--;

    if (countdownTime < 0){
        clearInterval(countdownInterval);
        //Add game end logic here (e.g., display results)
        alert("Betting Period Ended!");
        countdownTime = 60;
    }
}

countdownInterval = setInterval(updateCountdown, 1000);

//Add Number Buttons dynamically
const numberGrid = document.querySelector('.number-grid');
for (let i = 0; i <= 9; i++){
    const numberButton = document.createElement('button');
    numberButton.className = 'number-btn';
    numberButton.textContent = i;
    numberButton.addEventListener('click', () => {
        selectedNumber = i;
    });
    numberGrid.appendChild(numberButton);
}

//Handle color selection
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedColor = button.dataset.color;
        colorButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    })
})


//Place Bet - This requires significant expansion to work with backend
const placeBetBtn = document.getElementById('place-bet-btn');
placeBetBtn.addEventListener('click', async () => {
    if(selectedNumber === null || selectedColor === null){
        alert("Please select a number and color!");
        return;
    }
    //This part needs backend integration for making the actual bet
    console.log("Placing bet:", selectedNumber, selectedColor)
    //Fetch the result from the backend:
    //const response = await fetch('/api/placeBet', { /* Your Fetch logic here */ });
    //const data = await response.json();

    //After getting response from backend:
    //Update UI with bet information or result here
});

//Placeholder for Records and Orders (needs backend integration)
// ... (Code to fetch and display records and orders from backend) ...

