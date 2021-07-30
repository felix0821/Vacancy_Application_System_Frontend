export class FacultySchoolWorkplace {
  name: String;
  workplaces: CompetitionWorkplace[];
  constructor(name: String, workplaces: CompetitionWorkplace[]) {
    this.name = name;
    this.workplaces = workplaces;
  }
}

export class CompetitionWorkplace {
  id?: Number;
  name?: String;
  openingDate?: Date;
  deadline?: Date;
  evaluationDate?: Date;
}
