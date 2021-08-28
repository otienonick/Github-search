import { NotfoundComponent } from './notfound/notfound.component';
import { SearchusersComponent } from './searchusers/searchusers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'username' , component:HomepageComponent},
  {path:'search' , component:SearchusersComponent},
  { path: '', redirectTo:"/username", pathMatch:"full"},
  {path: '**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
