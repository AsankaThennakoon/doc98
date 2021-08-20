import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

export interface Session{
  id: string;
  doctor_id:string;
  hospital_id: string;
  date_time: string;
  cout: string;
  hospital_name:string;
  doctor_name:string;
  speciality_name:string;
  hospital_place:string;
  next:string;
}


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {


  sid!: number;
  hid!: number;
  did!: number;

  sessions: Session[]=[];

  


  constructor(public router:Router, public route: ActivatedRoute, public http: HttpClient) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{

      this.sid = +params['sid'] || 0;
      
      this.did = +params['did'] || 0;
      this.hid = +params['hid'] || 0;
    });


    var url="";
    this.http.get<Session[]>(url).subscribe(data=>{
      this.sessions=data;
    });
  }

  book(id: any){
    this.router.navigate(['/book'],{

      queryParams:{session_id:id}
    });

  }

}
