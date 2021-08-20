import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//1
export interface Hospital{
  id: string;
  name: string;
  place: string;
}

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  //2
  hospitals : Hospital[] =[];
  //3
   constructor(public http: HttpClient) { }

  ngOnInit(): void {

    let url ="";
    this.http.get<Hospital[]>(url).subscribe(data=>{
      this.hospitals =data;
    });
  }

}
