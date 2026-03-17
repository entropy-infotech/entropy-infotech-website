export interface User {
  _id?: string;
  username: string;
  role: string;
  token?: string;
  isTwoFactorEnabled?: boolean;
}
