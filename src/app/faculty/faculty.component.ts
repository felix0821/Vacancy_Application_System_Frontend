import { Component, OnInit } from '@angular/core';
import { Faculty } from '../models/faculty';
import { FacultyService } from '../service/faculty.service';
import { FacultySchool } from '../models/faculty-school';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
 //faculties: Faculty[] = [];
   public faculties:Array<any>=[]
   public site1:Array<any>=[]
   public site2:Array<any>=[]
   public site3:Array<any>=[]
  constructor( private facultyService: FacultyService) { }

  ngOnInit(): void {
  /*  this.facultyService.list().subscribe(
      data => {
        this.faculties = data;

        console.log(data);
      },
      err => {
        console.log(err);
      }
    )*/
    this.faculties=[
    {name:"Produccion y Servicios",
    site:1,
    id:1,
    facultySchools:[{name:"Ingenieria Industrial",id:11},{name:"Ingenieria de Sistemas",id:12}]},
    {name:"Ciencias Biologicas",
    site:2,
    id:3,
    facultySchools:[{name:"Biologia",id:13}]},
    {name:"Facultad de Geología, Geofísica y Minas",
    site:1,
    id:4,
    facultySchools:[{name:"Ingeniería Geofísica",id:15}]},
    {name:"Administracion",
    site:3,
    id:2,
    facultySchools:[{name:"Administracion de empresas",id:14}]}
    ]
    for (let faculty of this.faculties) {
      switch(faculty.site) { 
         case 1: { 
            this.site1.push(faculty);
            break; 
         } 
         case 2: { 
            this.site2.push(faculty);
            break; 
         }
         case 3: { 
            this.site3.push(faculty); 
            break; 
         } 
         default: { 
            //statements; 
            break; 
   } 
}
    }
  }


  }

