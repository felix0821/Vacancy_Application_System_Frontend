export class Faculty {
  id?: Number;
  name: String;
  urlImage?: String;
  site?:Number;
  facultySchools?:any[];
  constructor(name: String, urlImage: String) {
    this.name = name;
    this.urlImage = urlImage;
  }

}