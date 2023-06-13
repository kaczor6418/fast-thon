export class ReactContextError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ReactContextError.name;
  }
}
