export class User {
  dni?: String;
  username?: String;
  password?: String;
  name: String;
  lastname: String;
  lastnameMother: String;
  email: String;
  dateBirth: Date;
  state?: CharacterData;
  constructor(dni: String, username: String, name: String, lastname: String,
    lastnameMother: String, email: String, dateBirth: Date) {
    this.dni = dni;
    this.username = username;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.lastnameMother = lastnameMother;
    this.dateBirth = dateBirth;
  }
}
