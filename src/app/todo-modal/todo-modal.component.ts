import { Component, OnInit, Inject } from '@angular/core';
import { ITodo } from '../interfaces/todo';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})
export class TodoModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TodoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITodo
  ) { }

  ngOnInit() {
  }

  emitAction(action: string) {
    this.dialogRef.close({action, todo: this.data});
  }

}
