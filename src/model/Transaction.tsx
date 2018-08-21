export class Transaction {
  private static NewTransactionId = -1;
  public static NewRecord(): Transaction {
    return new Transaction(
      Transaction.NewTransactionId--,
      '',
      new Date(),
      '',
      0
    );
  }
  public constructor(
    public Id: number,
    public Store: string,
    public Date: Date,
    public Category: string,
    public Amount: number
  ) {}
}
