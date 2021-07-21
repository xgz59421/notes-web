import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { addEntityTodo, deleteEntityTodo } from 'src/app/store/actions/todo-entity.actions';
import { EntityTodo } from 'src/app/store/reducers/todo-entity.reducer';
import { selectEntityTodos } from 'src/app/store/selectors/todo-entity.selectors';

@Component({
  selector: 'app-todo-entity',
  templateUrl: './todo-entity.component.html',
  styles: [
  ]
})
export class TodoEntityComponent{

  @ViewChild('ul') ul!:ElementRef
  todos: Observable<EntityTodo[]>
  public todoitem = "";
  constructor(private store: Store<AppState>) {
    this.todos = this.store.pipe(select(selectEntityTodos))
  }

  addTodo(){
    console.log(this.todoitem);
    this.store.dispatch(addEntityTodo({title: this.todoitem}));
    this.todoitem = ''
  }
  deleteTodo(id: string){ 
    console.log(id);
    let _children = this.ul.nativeElement.children;
    for (const elements of _children) {
      // console.log(elements.children[0].value);
      // console.log(elements.children[0].checked);
      if (elements.children[0].checked && id === elements.children[0].value) {
        this.store.dispatch(deleteEntityTodo({id}))
      }
    }
  }
  onCheckbox(event: Event){
    // const target = event.target as HTMLInputElement
    // const checked = target.checked
    // const value = target.value
    // console.log(checked);
  }
  changeTodo(){
    // console.log(this.todoitem);
  }
}
