let loopVariable = true;
let balance = 0;
let transactions = [];

function processDeposit(amount) {
  if (amount > 0) {
    balance += amount;
    transactions.push(amount);
    alert(
      `You have successfully deposited ${amount}. Your new balance is: ${balance}`,
    );
  } else {
    alert("Invalid amount, please try again.");
    alert(`Your current balance is: ${balance}`);
  }
}

function processWithdrawal(amount) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    transactions.push(-amount);
    alert(
      `You have successfully withdrawn ${amount}. Your new balance is: ${balance}`,
    );
  } else {
    alert("Invalid amount or insufficient funds, please try again.");
    alert(`Your current balance is: ${balance}`);
  }
}

function viewTransactionsHistory() {
  if (transactions.length === 0) {
    alert("You have no transactions, yet!");
  } else {
    let historyText = "Here's your transactions history:\n";
    for (let i = 0; i < transactions.length; i++) {
      historyText += String(transactions[i]) + "\n";
    }
    alert(historyText + `\nYour current balance is: ${balance}`);
  }
}

alert("Welcome to the bank! Your current balance is: " + balance);

while (loopVariable) {
  let choice = prompt(
    "1. Check Balance\n2. Deposit\n3. Withdraw\n4. View Transaction History\n5. Exit",
  );

  switch (choice) {
    case "1":
      alert(`Your current balance is: ${balance}`);
      break;
    case "2":
      let depositAmount = parseFloat(
        prompt("Please, enter the amount to deposit: "),
      );
      processDeposit(depositAmount);
      break;
    case "3":
      let withdrawAmount = parseFloat(
        prompt("Please, enter the amount to withdraw: "),
      );
      processWithdrawal(withdrawAmount);
      break;
    case "4":
      viewTransactionsHistory();
      break;
    case "5":
      alert("Thank you for using the bank! Your final balance is: " + balance);
      loopVariable = false;
      break;
    default:
      alert("Invalid choice. Please try again.");
  }
}
