import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'todo',component:TodoComponent},
  {path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
