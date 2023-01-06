export class FindUserResDto {
  public status: number;
  public message: string;
  public data?: object|[];
  constructor(status?: number, message?: string, data?: object|[]) {
    if (data && message && status) {
      this.status = status;
      this.message = message;
      this.data = data;
    }
  }
}
