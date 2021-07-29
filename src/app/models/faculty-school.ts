export class FacultySchool {
  id?: Number;
  idFaculty: Number;
  name: String;
  urlImage?: String;
  constructor(idFaculty:Number,name: String, urlImage: String) {
    this.name = name;
    this.urlImage = urlImage;
    this.idFaculty=idFaculty;
  }
}