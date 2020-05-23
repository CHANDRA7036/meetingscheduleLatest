import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from
 './components/todos/todos.component';
import { AboutComponent } from 
'./components/pages/about/about.component';
import { CalendarComponent } from 
'./components/calendar/calendar.component';
import { MeetingComponent } from './components/meeting/meeting.component';


const routes: Routes = [
  // { path: '',component:TodosComponent },
  // { path: 'about',component:AboutComponent },
  { path: '',component:MeetingComponent },
  { path: 'calendar',component:CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
