export class User {

  private _id: number|string;
  public getUserId(): string|number {
    return this._id;
  }
  
  public setUserId(value: string|number) {
    this._id = value;
  }

  private _fullname: string;
  public getFullname(): string {
    return this._fullname;
  }
  public setFullname(value: string) {
    this._fullname = value;
  }

  private _email: string;
  public getEmail(): string {
    return this._email;
  }
  public setEmail(value: string) {
    this._email = value;
  }

  private _password: string;
  public getPassword(): string {
    return this._password;
  }
  public setPassword(value: string) {
    this._password = value;
  }

  private _phonenumber: string;
  public getPhonenumber(): string {
    return this._phonenumber;
  }
  public setPhonenumber(value: string) {
    this._phonenumber = value;
  }

  constructor(
    fullname?: string,
    email?: string,
    password?: string,
    phonenumber?: string,
  ) {
    if (fullname && email && password && phonenumber) {
      this._fullname = fullname;
      this._email = email;
      this._password = password;
      this._phonenumber = phonenumber;
    }
  }
}
