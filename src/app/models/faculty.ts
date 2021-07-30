import { FacultySchool } from '../models/faculty-school';
export class Faculty {
  name: String;
  siteId: String;
  facultySchools: FacultySchool[];
  constructor(name: String, siteId: String, facultySchools: FacultySchool[]) {
    this.name = name;
    this.siteId = siteId;
    this.facultySchools = facultySchools;
  }

}
