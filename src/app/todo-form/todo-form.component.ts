import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../interfaces/state';
import { ADD_TODO } from '../actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;

  priorities: {key: string, value: string}[] = [
    {key: 'low', value: 'Low'},
    {key: 'medium', value: 'Medium'},
    {key: 'high', value: 'High'}
  ];

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private form: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.todoForm = this.form.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      responsible: ['', Validators.required],
      priority: ['low', Validators.required],
      isCompleted: [false, Validators.required]
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.ngRedux.dispatch({type: ADD_TODO, todo: this.todoForm.value});
      this.initForm();
    }
  }

}
