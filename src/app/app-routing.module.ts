import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from
 './components/todos/todos.component';
import { AboutComponent } from 
'./components/pages/about/about.component';
import { CalendarComponent } from 
'./components/calendar/calendar.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { FormComponent } from './components/form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
 
const routes: Routes = [
  // { path: '',component:TodosComponent },
  // { path: 'about',component:AboutComponent },
  { path: 'calendar/chandrasekhar',component:MeetingComponent },
  { path: 'calendar/chandrasekhar/7036',component:CalendarComponent },
  { path: 'calendar/chandrasekhar/7036/confirm',component:FormComponent},
  { path: '**', component: PageNotFoundComponent } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
