let balance = 0;

alert("Welcome to the bank! Your current balance is: " + balance);

while (true) {
  let choice = prompt("1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");

  if (choice === "1") {
  } else if (choice === "2") {
  } else if (choice === "3") {
  } else if (choice === "4") {
    alert("Thank you for using the bank! Your final balance is: " + balance);
    break;
  } else {
    alert("Invalid choice. Please try again.");
  }
}
