import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
    imports:[
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,MatButtonToggleModule
        
        
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,MatButtonToggleModule
    ]
})
export class MyMaterialModule{
    

}