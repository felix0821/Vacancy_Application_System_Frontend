export class UserRegister {
  dni: String;
  username: String;
  password: String;
  email: String;
  dateBirth: Date;
  constructor(dni: String, username: String, password: String, email: String, dateBirth: Date) {
    this.dni = dni;
    this.username = username;
    this.email = email;
    this.dateBirth = dateBirth;
    this.password = password;
  }
}
