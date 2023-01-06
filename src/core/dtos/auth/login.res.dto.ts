export class LoginResDto {
  public status: number;
  public accessToken: string;
  public refreshToken: string;
  public message: string;
  constructor(
    status: number,
    accessToken: string,
    refreshToken: string,
    message: string,
  ) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.status = status;
    this.message = message;
  }
}
