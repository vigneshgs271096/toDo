import { Component, OnInit } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TreeSelectModule } from 'primeng/treeselect';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaskService } from '../services/tasks/task.service';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category/category.service';
import { GoalService } from '../services/goal/goal.service';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
		MenubarModule,
		InputSwitchModule,
		FormsModule,
		DialogModule,
		InputTextModule,
		InputTextareaModule,
		InputNumberModule,
		TreeSelectModule,
		NgSelectModule,
    CalendarModule,
    CheckboxModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit{
  task: any = {}
  taskId: any;
  selectedCar: number = 1;
  action: any = "create";
  categories: any = [];
  goalsList: any = [];

	cars = [
		{ id: 1, name: 'Volvo' },
		{ id: 2, name: 'Saab' },
		{ id: 3, name: 'Opel' },
		{ id: 4, name: 'Audi' },
	];

  constructor(public taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    public goalService: GoalService
  ) {

	}

  ngOnInit(): void {
    this.searchGoal();
    this.searchCategory();
    this.taskId = this.route.snapshot.paramMap.get('id');
    if(this.taskId) {
      this.getTask(this.taskId);
      this.action = "update";
    }
  }

  getTask(id: string) {
    this.taskService.getTaskById(id).subscribe((data:any)=>{
      this.task = data.task;
      if(this.task.due_date) {
        this.task.due_date = new Date(this.task.due_date);
      }
      console.log(this.task)
    })
  }


  saveTask(form: any) {
    if(form.form.valid) {
      if(this.action == 'create') {
        this.taskService.createTask(this.task).subscribe((data: any) => {
          if(data.message == "Task created") {
            this.router.navigate(['/tasks']);
          }
        });
      } else {
        this.taskService.updateTask(this.taskId , this.task).subscribe((data:any)=>{
          this.router.navigate(['/tasks']);
        })
      }
    }
	}

  searchCategory() {
    this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories = data.categories;
    })
  }

  searchGoal() {
    this.goalService.getGoals().subscribe((data: any) => {
      this.goalsList = data.goals || [];
    })
  }

}
