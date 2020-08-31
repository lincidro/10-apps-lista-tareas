import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public taskListCompleted: any[];
  public taskListNotCompleted: any[];
  public showInputTask: boolean;
  public errorInput: boolean;

  constructor() {
    this.taskListCompleted = [];
    this.taskListNotCompleted = [];
    this.showInputTask = false;
  }

  ngOnInit() {
  }

  showInputTextTask() {
    this.showInputTask = true;
  }

  addTask(descripcion) {

    if (descripcion) {
      console.log(descripcion);

      const task: Task = {
        date: new Date(),
        description: descripcion,
        completed: false
      };

      this.taskListNotCompleted.push(task);
      this.errorInput = false;
      this.showInputTask = false;
    } else {
      this.errorInput = true;
    }


  }

}
