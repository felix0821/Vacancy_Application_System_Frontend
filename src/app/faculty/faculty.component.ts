import { Component, OnInit } from '@angular/core';
import { Faculty } from '../models/faculty';
import { FacultyService } from '../service/faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  public site1: Array<Faculty>=[]
  public site2: Array<Faculty>=[]
  public site3: Array<Faculty>=[]
  constructor( private facultyService: FacultyService) { }

  ngOnInit(): void {
    this.facultyService.list().subscribe(
      data => {
        for (let faculty of data) {
          switch (faculty.siteId) {
            case "I": {
              this.site1.push(new Faculty(faculty.name, faculty.siteId, faculty.facultySchools));
              break;
            }
            case "B": {
              this.site2.push(new Faculty(faculty.name, faculty.siteId, faculty.facultySchools));
              break;
            }
            case "S": {
              this.site3.push(new Faculty(faculty.name, faculty.siteId, faculty.facultySchools));
              break;
            }
            default: {
              //statements; 
              break;
            }
          }
        }
      },
      err => {
        window.sessionStorage.clear();
        console.log(err);
      }
    );
  }


  }

