import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//1.create a interface for object type with variabes

export interface Speciality {
  id : string;
  name : string;
}



@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.css']
})
export class SpecialityListComponent implements OnInit {

  //2.Create an empty bject Array
  specialities: Speciality[] =[];


  //3. a. import HttpClientModul in app.mosule.ts.file
  //3. b. create constructor argument for http variable that automatically injects the object
  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    //4. Load object from webservice or API

    let url = "http://"
    this.http.get<Speciality[]>(url)
    .subscribe(data =>{
      this.specialities =data;
    });
  }

}
