import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CompetitionWorkplace } from '../../models/competition-workplace';
import { CompetitionWorkplaceService } from '../../service/competition-workplace.service';

@Component({
  selector: 'app-competition-workplace-list',
  templateUrl: './competition-workplace-list.component.html',
  styleUrls: ['./competition-workplace-list.component.css']
})
export class CompetitionWorkplaceListComponent implements OnInit {

 // competitionWorkplaces: CompetitionWorkplace[] = [];
  public competitionWorkplaces:Array<any>=[]
  constructor(private activatedRoute: ActivatedRoute,
    private competitionWorkplaceService: CompetitionWorkplaceService,
    private router: Router) { }

  ngOnInit(): void {
    /*const id = this.activatedRoute.snapshot.params.id;
    this.competitionWorkplaceService.listByFacultySchool(id).subscribe(
      data => {
        this.competitionWorkplaces = data;
      },
      err => {
        console.log("Error de vista por id");
      }
    );*/

 this.competitionWorkplaces=[
    {name:"Programador en Java",
    idFacultySchool:11},
    {name:"Uso de algoritmos",
    idFacultySchool:11},
    {name:"Uso de procesos2",
    idFacultySchool:12},
    {name:"Manejo de excel ",
    idFacultySchool:13},
    {name:"Manejo de calculdora",
    idFacultySchool:13},
     ]
  }

}