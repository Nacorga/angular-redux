import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../interfaces/state';
import { ITodo } from '../interfaces/todo';
import { TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { MatDialog } from '@angular/material';
import { TodoModalComponent } from '../todo-modal/todo-modal.component';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @select() todos;

  displayedColumns: string[];
  dataSource: ITodo[];

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private dialog: MatDialog
  ) {

    this.displayedColumns = ['id', 'responsible', 'priority', 'completed'];
    this.dataSource = this.todos;

  }

  openModal(todo: ITodo) {

    const dialogRef = this.dialog.open(TodoModalComponent, {
      width: '420px',
      autoFocus: false,
      data: todo
    });

    dialogRef.afterClosed().subscribe((dialog: {todo: ITodo, action: string}) => {
      if (dialog) {
        switch (dialog.action) {
          case 'remove':
            this.removeTodo(dialog.todo);
            break;
        }
      }
    });

  }

  toggleTodo(todo: ITodo) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
  }

  removeTodo(todo: ITodo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});
  }

}
