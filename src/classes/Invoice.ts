import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter {
  constructor(
    public client: string, // automatically assigns props of the class there
    public details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}
