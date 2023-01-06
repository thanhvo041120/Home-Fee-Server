export class RegisterResDto {
  public status: number;
  public message: string;
  public email?: string;
  constructor(status?: number, message?: string, email?: string) {
    if (email && message && status) {
      this.status = status;
      this.message = message;
      this.email = email;
    }
    if(message && status){
      this.message = message;
      this.status = status;
    }
  }
}
