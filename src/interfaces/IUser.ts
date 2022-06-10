export interface IUser {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  date: Date;
}

export interface IUserInputDTO {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  date?: Date;
}

export interface UserUniqueSearchInput {
  email: string;
}
