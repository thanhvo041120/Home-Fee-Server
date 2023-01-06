export class RegisterResDto {
  public status: number;
  public message: string;
  public email?: string;
  constructor(status: number, message: string, email?: string) {
    if (email) {
      this.status = status;
      this.message = message;
      this.email = email;
    } else {
      this.status = status;
      this.message = message;
    }
  }
}
