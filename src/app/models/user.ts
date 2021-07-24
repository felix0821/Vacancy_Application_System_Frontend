export class User {
  idUser?: Number;
  dni: String;
  username: String;
  password: String;
  name?: String;
  lastname?: String;
  lastnameMother?: String;
  email: String;
  dateBirth: Date;
  registrationDate?: Date;
  state?: CharacterData;
  constructor(dni: String, username: String, password: String, email: String, dateBirth: Date) {
    this.dni = dni;
    this.username = username;
    this.password = password;
    this.email = email;
    this.dateBirth = dateBirth;
  }
}
