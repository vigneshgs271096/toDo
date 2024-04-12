import { Component, Input } from '@angular/core';
import { GoalService } from '../services/goal/goal.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-goals-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './goals-list.component.html',
  styleUrl: './goals-list.component.css'
})
export class GoalsListComponent {
  goalsList: any = [];
  @Input() refreshTaskList: any = false;
  action: any = 'create';

  constructor(public goalService: GoalService,private router: Router) {

  }

  deleteGoal(id: any) {
    this.goalService.deleteGoal(id).subscribe((data: any)=>{
      if(data.message == "Goal deleted") {
        this.searchGoal();
        this.action = 'update';
      }
    })
  }

  searchGoal() {
    this.goalService.getGoals().subscribe((data: any) => {
      this.goalsList = data.goals || [];
      console.log(data);
    })
  }

  editGoal(task: any) {
    this.router.navigate(['/goal/update',task._id]);
    // this.searchGoal();
    // this.taskService.getTaskById(task)
    // this.taskService.updateTask(task._id , task).subscribe((data:any)=>{
    //   console.log(data);
    // })
  }

  ngOnInit(): void {
    this.searchGoal();
  }

  openGoalForm() {
    this.router.navigate(['/goal/create'])
  }

}
