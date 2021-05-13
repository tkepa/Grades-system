import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesListComponent } from './grades-list/grades-list.component';
import { MainPanelPageComponent } from './main-panel-page/main-panel-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'mainPanel', pathMatch: 'full' },
  {
    path: 'mainPanel',
    component: MainPanelPageComponent,
    data: { title: 'Grades System' }
  },
  { path: 'grades-system', component: GradesListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
