import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task/task.service';
import { UiService } from 'src/app/service/ui/ui.service';
import {Subscription} from 'rxjs';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  showAddTask : boolean = false;
  subscription : Subscription = new Subscription();
  tasks:Task[] = [];

  constructor(private taskService:TaskService , 
    private uiService : UiService) {
      this.uiService.onToggle().subscribe(value => 
        this.showAddTask = value
      )
      
  }

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks)=>{
     this.tasks = tasks;
   });
  }

  deleteTaskById(task: Task){
    this.taskService.deleteTaskById(task.id).subscribe(()=>{
      this.tasks = this.tasks.filter(_task => _task.id !== task.id);
    })
  }

  toggleTaskReminder(task : Task){
    task.reminder = !task.reminder;
    this.taskService.toggleTaskReminder(task).subscribe();
  }
  addTask(task : Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    })
  }

  toggleTaskForm(){
    this.uiService.toggleAdd();
  }

}
