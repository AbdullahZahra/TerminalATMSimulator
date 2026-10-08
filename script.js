let balance = 0;

alert("Welcome to the bank! Your current balance is: " + balance);

while (true) {
  let choice = prompt("1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");

  if (choice === "1") {
    alert(`Your current balance is: ${balance}`);
  } else if (choice === "2") {
    let depositAmount = parseFloat(
      prompt("Please, enter the amount to deposit: "),
    );
    if (depositAmount > 0) {
      balance += depositAmount;
      alert(
        `You have successfully deposited ${depositAmount}. Your new balance is: ${balance}`,
      );
    } else {
      alert("Invalid amount, please try again.");
      alert(`Your current balance is: ${balance}`);
    }
  } else if (choice === "3") {
    let withdrawAmount = parseFloat(
      prompt("Please, enter the amount to withdraw: "),
    );
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
      balance -= withdrawAmount;
      alert(
        `You have successfully withdrawn ${withdrawAmount}. Your new balance is: ${balance}`,
      );
    } else {
      alert("Invalid amount or insufficient funds, please try again.");
      alert(`Your current balance is: ${balance}`);
    }
  } else if (choice === "4") {
    alert("Thank you for using the bank! Your final balance is: " + balance);
    break;
  } else {
    alert("Invalid choice. Please try again.");
  }
}
