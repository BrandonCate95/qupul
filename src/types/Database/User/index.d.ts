export interface UserData {
  email: string,
  username: string
}

export interface User extends UserData {
  uid: string
}