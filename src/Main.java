public static double[] transactions = new double[5];
public static int transactionCount = 0;

void main() {
    double balance = 0;
    Scanner input = new Scanner(System.in);

    System.out.println("Welcome to our bank services!");

    while (true) {
        try {
            displayMenu();
            int choice = input.nextInt();
            switch (choice) {
                case 1:
                    displayBalance(balance);
                    break;
                case 2:
                    System.out.print("Please enter the deposited amount: ");
                    balance = processDeposit(balance, input.nextDouble());
                    System.out.println("Your current balance is: " + balance);
                    break;
                case 3:
                    System.out.print("Please enter the withdrawal amount: ");
                    balance = processWithdraw(balance, input.nextDouble());
                    System.out.println("Your current balance is: " + balance);
                    break;
                case 4:
                    System.out.println("Thank you for using our bank services!");
                    return;
                case 5:
                    displayTransactions();
                    break;
                default:
                    System.out.println("Invalid choice, Please try again...");
                    break;
            }
        } catch (InputMismatchException e) {
            System.out.println("Invalid choice, Please try again...");
            input.nextLine();
        }
    }
}

public static void displayMenu() {
    System.out.println("1. Check Balance");
    System.out.println("2. Deposit Money");
    System.out.println("3. Withdraw Money");
    System.out.println("4. Exit");
    System.out.println("5. Display Transactions");
    System.out.print("Please choose an option: ");
}

public static void displayBalance(double balance) {
    System.out.println("Your current balance is: " + balance);
}

public static double processDeposit(double currentBalance, double depositAmount) {
    if (depositAmount <= 0) {
        System.out.println("Invalid deposit amount, Please try again...");
        return currentBalance;
    }
    setTransactions(depositAmount);
    return currentBalance + depositAmount;
}

public static double processWithdraw(double currentBalance, double withdrawalAmount) {
    if (withdrawalAmount <= 0) {
        System.out.println("Invalid withdrawal amount, Please try again...");
        return currentBalance;
    }
    if (currentBalance >= withdrawalAmount) {

        setTransactions(-withdrawalAmount);
        return currentBalance - withdrawalAmount;
    } else {
        System.out.println("Insufficient funds. Please try again...");
        return currentBalance;
    }
}

public static void displayTransactions() {
    if (transactionCount > 0 && transactionCount < 5) {
        System.out.println("Here are you transactions: ");
        for (int i = 0; i < transactionCount; i++) {
            System.out.println("Transaction " + (i + 1) + ": " + transactions[i]);
        }
    } else if (transactionCount > 5) {
        System.out.println("Here are you transactions: ");
        for (int i = 0; i < 5; i++) {
            System.out.println("Transaction " + (i + 1) + ": " + transactions[i]);
        }
    } else {
        System.out.println("You don't have any transactions.");
    }
    System.out.println();
}

public static void setTransactions(double transactionAmount) {
    transactions[transactionCount % 5] = transactionAmount;
    transactionCount++;
}