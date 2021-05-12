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
import { AppRoutingModule } from './app-routing.module';
import { MainPanelPageComponent } from './main-panel-page/main-panel-page.component';
import { PanelNavComponent } from './panel-nav/panel-nav.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';



@NgModule({
  declarations: [
    AppComponent,
    GradesListComponent,
    GradeDetailComponent,
    MainPanelPageComponent,
    PanelNavComponent,
    PanelHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
