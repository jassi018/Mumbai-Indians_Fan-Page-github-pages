let bets = {
    MI: 0,
    RCB: 0
};

function placeBet(team) {
    const amountInput = document.getElementById(`amount${team}`);
    const bet = document.getElementById('displayBet');
    const amount = parseInt(amountInput.value);

    bet.innerHTML = `Bet placed : ${amount}`
    
    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }
    
    bets[team] += amount;
    alert(`Bet placed on ${team} for ₹${amount}. Total bet amount on ${team}: ₹${bets[team]}`);
    
    // Reset input field
    amountInput.value = "";
}

function cashOut() {

    const bet = document.getElementById('displayBet');

     bet.innerHTML = `Bet placed : 0`

    const totalBetMI = bets.MI;
    const totalBetRCB = bets.RCB;

    const cashOutAmountMI = totalBetMI + totalBetMI * 0.9; // Example: 90% of total bet amount
    const cashOutAmountRCB = totalBetRCB + totalBetRCB * 0.5; // Example: 80% of total bet amount

    alert(`Cash out amount for Mumbai Indians: ₹${cashOutAmountMI}\nCash out amount for Royal Challengers Bangalore: ₹${cashOutAmountRCB}`);

    

    // Reset bets
    bets.MI = 0;
    bets.RCB = 0;
}
