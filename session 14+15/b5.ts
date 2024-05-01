
class Transaction {
    id: number;
    type: string;
    amount: number;
    newBalance: number;

    constructor(id: number, type: string, amount: number, newBalance: number) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.newBalance = newBalance;
    }
}

class Account5 {
    accountNumber: string;
    balance: number;
    history: Transaction[];

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            const transaction = new Transaction(
                this.generateTransactionId(),
                ‘Deposit’,
                amount,
                this.balance
            );
            this.history.push(transaction);
        }
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            const transaction = new Transaction(
                this.generateTransactionId(),
                ‘Withdraw’,
                amount,
                this.balance
            );
            this.history.push(transaction);
        }
    }   

}
const accounts: Account[] = [];

