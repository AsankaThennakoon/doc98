import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyMaterialModule} from './material';
import { PastAppointmentsComponent } from './past-appointments/past-appointments.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PastAppointmentsComponent,
    SpecialityListComponent,
    DoctorListComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
