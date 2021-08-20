import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { start } from 'repl';
import { Observable } from 'rxjs';
import {map,startWith} from 'rxjs/operators';

export interface Speciality{
  id: string;
  name: string;

}



export interface Hospital{
  id: string;
  name: string;
  place: string;

}



export interface Doctor{
  id: string;
  name: string;
  speciality_name: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  specialties: Speciality[]=[];
  hospitals: Hospital[]=[];
  doctors: Doctor[]=[];
  

//auto comeplet text view configure
  // crete form control object for editable input 
  //a. app.module.ts. import ReactiveFormModule


  specialityControl =new FormControl();
  hospitalControl =new FormControl();
  doctorControl =new FormControl();

  //b create array variable for filtered data 

  //b create array variable for filtered data 
  filteredSpecialities: Observable<Speciality[]> | undefined;
  filteredHospital: Observable<Hospital[]> | undefined;
  filteredDoctor: Observable<Doctor[]> | undefined;



  constructor(public http:HttpClient , public router:Router) { }

  ngOnInit(): void {

    let url1="";
    this.http.get<Speciality[]>(url1).subscribe(data=>{
      this.specialties=data;
    });


    let url2="";

    this.http.get<Hospital[]>(url2).subscribe(data=>{
      this.hospitals=data;
    });


    let url3="";

    this.http.get<Doctor[]>(url3).subscribe(data=>{
      this.doctors=data;
    });


    //c.filtered option
    this.filteredSpecialities=this.specialityControl.valueChanges.pipe(
      startWith<string | Speciality>(''),
      map(value=> typeof value === 'string'? value: value.name),
      map(name => name? this._filter1(name):this.specialties.slice())
    );


    this.filteredHospital=this.hospitalControl.valueChanges.pipe(
      startWith<string | Hospital>(''),
      map(value=> typeof value === 'string'? value: value.name),
      map(name => name? this._filter2(name):this.hospitals.slice())
    );




    this.filteredDoctor=this.doctorControl.valueChanges.pipe(
      startWith<string | Doctor>(''),
      map(value=> typeof value === 'string'? value: value.name),
      map(name => name? this._filter3(name):this.doctors.slice())
    );
  }


  //d Filter FUnction
  private _filter1(name:string):Speciality[]{
    const filterValue =name.toLocaleLowerCase();
    return this.specialties.filter(option => option.name.toLocaleLowerCase().indexOf(filterValue)===0)
  }

  private _filter2(name:string):Hospital[]{
    const filterValue =name.toLocaleLowerCase();
    return this.hospitals.filter(option => option.name.toLocaleLowerCase().indexOf(filterValue)===0)
  }

  private _filter3(name:string):Doctor[]{
    const filterValue =name.toLocaleLowerCase();
    return this.doctors.filter(option => option.name.toLocaleLowerCase().indexOf(filterValue)===0)
  }

  // e display name overide

  displayFn1(speciality?:Speciality):string | undefined{
    return speciality? speciality.name : undefined;
  }

  displayFn2(hospital?:Hospital):string | undefined{
    return hospital? hospital.name : undefined;
  }
  
  displayFn3(doctor?:Doctor):string | undefined{
    return doctor? doctor.name : undefined;
  }


  reset(){
   this.specialityControl.reset();
   this.doctorControl.reset();
   this.hospitalControl.reset();

  }

  search(){
    var sid= (this.specialityControl.value)?this.specialityControl.value.id:0;
    var did= (this.doctorControl.value)?this.doctorControl.value.id:0;
    var hid= (this.hospitalControl.value)?this.hospitalControl.value.id :0;


    // this is use for navigete two screen with data 
    this.router.navigate(['/session-list'],{queryParams:{sid:sid, did:did, hid:hid}});

  }


}
