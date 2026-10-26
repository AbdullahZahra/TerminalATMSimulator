let loopVariable = true;

const account = {
  balance: 0,
  transactions: [],

  processDeposit: function (amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push(amount);
      alert(
        `You have successfully deposited ${amount}. Your new balance is: ${this.balance}`,
      );
    } else {
      alert("Invalid amount, please try again.");
      alert(`Your current balance is: ${this.balance}`);
    }
  },

  processWithdrawal: function (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(-amount);
      alert(
        `You have successfully withdrawn ${amount}. Your new balance is: ${this.balance}`,
      );
    } else {
      alert("Invalid amount or insufficient funds, please try again.");
      alert(`Your current balance is: ${this.balance}`);
    }
  },

  viewTransactionsHistory: function () {
    if (this.transactions.length === 0) {
      alert("You have no transactions, yet!");
    } else {
      let historyText = "Here's your transactions history:\n";
      for (let i = 0; i < this.transactions.length; i++) {
        historyText += String(this.transactions[i]) + "\n";
      }
      alert(historyText + `\nYour current balance is: ${this.balance}`);
    }
  },
};

alert("Welcome to the bank! Your current balance is: " + account.balance);

while (loopVariable) {
  let choice = prompt(
    "1. Check Balance\n2. Deposit\n3. Withdraw\n4. View Transaction History\n5. Exit",
  );

  switch (choice) {
    case "1":
      alert(`Your current balance is: ${account.balance}`);
      break;
    case "2":
      let depositAmount = parseFloat(
        prompt("Please, enter the amount to deposit: "),
      );
      account.processDeposit(depositAmount);
      break;
    case "3":
      let withdrawAmount = parseFloat(
        prompt("Please, enter the amount to withdraw: "),
      );
      account.processWithdrawal(withdrawAmount);
      break;
    case "4":
      account.viewTransactionsHistory();
      break;
    case "5":
      alert(
        `Thank you for using the bank! Your final balance is: ${account.balance}`,
      );
      loopVariable = false;
      break;
    default:
      alert("Invalid choice. Please try again.");
  }
}
