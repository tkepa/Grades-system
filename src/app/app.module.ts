import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'
 
import { AppComponent } from './app.component';
import { GradesListComponent } from './grades-list/grades-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GradeDetailComponent } from './grade-detail/grade-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    GradesListComponent,
    GradeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
