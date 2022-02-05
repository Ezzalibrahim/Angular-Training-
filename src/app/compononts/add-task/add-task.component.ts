import { Component, OnInit , Output ,EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui/ui.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  subscription : Subscription = new Subscription();

  text :string = '';
  day :string = '';
  reminder :boolean = false;
  showAddForm : boolean = false;

  constructor(private uiService: UiService) {
    this.uiService
      .onToggle()
      .subscribe(value => this.showAddForm = value);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text || !this.day)
      alert("Please Add All Info About Task")
    else{ 
      const newTask :Task = {
        text : this.text,
        day : this.day,
        reminder : this.reminder
      }
      
      this.onAddTask.emit(newTask);

      this.text = "";
      this.day ="";
      this.reminder = false;

    }
  }
}
