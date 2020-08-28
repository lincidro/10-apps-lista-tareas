import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public taskListCompleted: any[];
  public taskListNotCompleted: any[];

  constructor() {
    this.taskListCompleted = [];
    this.taskListNotCompleted = [];
  }

  ngOnInit() {
  }

}
