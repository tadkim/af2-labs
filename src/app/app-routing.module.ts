import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//page
import { AppComponent } from './app.component';
import { Page404Component } from './page404.component';


//labs 
import { LabsComponent } from './labs/labs.component';

const routes: Routes = [
    { path: '', redirectTo: '/labs', pathMatch: 'full' },
    { path: 'labs', component: LabsComponent },
    { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];