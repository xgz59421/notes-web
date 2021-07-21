import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { TodoEntityComponent } from './pages/todo-entity/todo-entity.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {
    path: "counter",
    component: CounterComponent
  },
  {
    path: "todo",
    component: TodoComponent
  },
  {
    path: "todo-entity",
    component: TodoEntityComponent
  },
  {
    path: "",
    // 重定向
    redirectTo: "todo-entity",
    // 完全匹配
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
