export interface IAuth {
  login(data: object): Promise<{access_token: string, refresh_token: string}>;
}
