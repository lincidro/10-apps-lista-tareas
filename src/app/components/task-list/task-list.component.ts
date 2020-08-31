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

  addTask(description) {

    if (description) {
      console.log(description);

      const task: Task = {
        date: new Date(),
        descripcion: description,
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
