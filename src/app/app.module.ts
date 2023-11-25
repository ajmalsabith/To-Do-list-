import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyDirective } from './sty.directive';
import { ListComponent } from './components/list/list.component';
import { TodoComponent } from './components/todo/todo.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    StyDirective,
    ListComponent,
    TodoComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
