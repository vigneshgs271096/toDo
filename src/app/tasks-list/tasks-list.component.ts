import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks/task.service';
import { Router } from '@angular/router';
import { GoalService } from '../services/goal/goal.service';
import { DatePipe } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [DatePipe,CheckboxModule,FormsModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent implements OnInit{
  tasksList: any = [];

  @Input() refreshTaskList: any = false;

  constructor(public taskService: TaskService,private router: Router,public goalService: GoalService) {

  }

  deleteTask(id: any) {
    this.taskService.deleteTask(id).subscribe((data: any)=>{
      if(data.message == "Task deleted") {
        this.searchTask();
      }
      console.log(data);
    })
  }

  searchTask() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasksList = data.tasks || [];
      console.log(this.tasksList)
    })
  }



  editTask(task: any) {
    this.router.navigate(['/task/update',task._id])
    // this.taskService.getTaskById(task)
  }
  
  updateTask(task: any) {
    console.log(task);
    this.taskService.updateTask(task._id , task).subscribe((data:any)=>{
      this.router.navigate(['/tasks']);
    })
  }

  ngOnInit(): void {
    this.searchTask();
  }

}
