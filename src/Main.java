void main() {
    double balance = 0;
    Scanner input = new Scanner(System.in);

    System.out.println("Welcome to our bank services!");

    while(true) {
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
                    System.out.println("Deposited successfully, your current balance is: " + balance);
                    break;
                case 3:
                    System.out.print("Please enter the withdrawal amount: ");
                    balance = processWithdraw(balance, input.nextDouble());
                    System.out.println("Your current balance is: " + balance);
                    break;
                case 4:
                    System.out.println("Thank you for using our bank services!");
                    return;
                default:
                    System.out.println("Invalid choice, Please try again...");
                    break;
            }
        } catch (InputMismatchException e) {
            System.out.println("Invalid choice, Please try again...");
        }
    }
}

public static void displayMenu() {
    System.out.println("1. Check Balance");
    System.out.println("2. Deposit Money");
    System.out.println("3. Withdraw Money");
    System.out.println("4. Exit");
    System.out.print("Please choose an option: ");
}

public static void displayBalance(double balance) {
    System.out.println("Your current balance is: " + balance);
}

public static double processDeposit(double currentBalance, double depositAmount) {
    return currentBalance + depositAmount;
}

public static double processWithdraw(double currentBalance, double withdrawalAmount) {
    if (currentBalance >= withdrawalAmount) {
        return currentBalance - withdrawalAmount;
    } else {
        System.out.println("Insufficient funds. Please try again...");
        return currentBalance;
    }
}