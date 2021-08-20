import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface Result{
  status: string;
  msg: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  nameControl =new FormControl();
  emailControl =new FormControl();
  mobileControl =new FormControl();
  nicControl = new FormControl();


  session_id!    : number;

  result!: Result;

  

  constructor(public http: HttpClient, public router :Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.session_id=+params["sessoin_id"] || 0;
    });
  }


  reset(){

  }
  confirm(){

    //1 collect parameters

    let body = new HttpParams({
      fromObject:{
        'name' : this.nameControl.value,
        'email': this.emailControl.value,
        
        'nic': this.nicControl.value, 
        'mobile': this.mobileControl.value,

        'sesson_id':this.session_id.toString()
      }
    });

    //2 send to a URL

    //video 1.25 see
    var url = "";
    this.http.post<Result>(url,body).subscribe(data=>{
      this.result =data;
      alert(this.result.msg);
    });



  }

}
