import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';

import { PastAppointmentsComponent } from './past-appointments/past-appointments.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'past-appointments',component:PastAppointmentsComponent},
  {path: 'speciality-list',component:SpecialityListComponent},
  {path: 'doctor-list',component:DoctorListComponent},
  {path: 'hospital-list',component:HospitalListComponent},
  {path: 'session-list',component:SessionListComponent},
  {path: 'book',component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
