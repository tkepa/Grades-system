import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { GradesListComponent } from './grades-list/grades-list.component';

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
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
