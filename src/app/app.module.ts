import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SlotsComponent } from './components/slots/slots.component';
import { FormComponent } from './components/form/form.component';
import { MeetinginfoComponent } from './components/meetinginfo/meetinginfo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MycalendlyComponent } from './components/mycalendly/mycalendly.component';
import { EventTypeComponent } from './components/event-type/event-type.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AboutComponent,
    AddTodoComponent,
    MeetingComponent,
    CalendarComponent,
    SlotsComponent,
    FormComponent,
    MeetinginfoComponent,
    PageNotFoundComponent,
    MycalendlyComponent,
    EventTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzFormModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
