import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Option } from '../../core/models/option';
import { TaskStep } from '../../core/models/task';
import { taskCardData } from '../../core/data/task';

@Component({
  selector: 'app-task',
  templateUrl: './admin-task.component.html',
  styleUrls: ['./admin-task.component.scss']
})
export class AdminTaskComponent implements OnInit {

  TaskStep = TaskStep;
  taskCardData = taskCardData;

  options: Option<string>[] = [
    { value: 'All', label: 'All Task'},
    { value: 'None', label: 'No Task'}
  ];

  taskForm: FormGroup = this.fb.group({
    invoiceType: '',
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  newTask(event): void {
    alert('New Task');
  }

}
