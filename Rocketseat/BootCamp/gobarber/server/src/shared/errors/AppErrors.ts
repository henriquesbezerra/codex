export default class AppError {
  /**
   * Mensagem de Error
   */
  public readonly message: string;

  /**
   * Code HTTP Error
   */
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
