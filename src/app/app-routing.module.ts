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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MycalendlyComponent } from './components/mycalendly/mycalendly.component';
import { EventTypeComponent } from './components/event-type/event-type.component';


const routes: Routes = [
  { path: '', component: MycalendlyComponent },
  { path: 'event-type/new', component: EventTypeComponent },
  { path: 'calendar/:calendarUsername', component: MeetingComponent },
  { path: 'calendar/:calendarUsername/:id', component: CalendarComponent },
  { path: 'calendar/:calendarUsername/:id/confirm', component: FormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
