import { Component, OnInit } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TreeSelectModule } from 'primeng/treeselect';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from '../services/goal/goal.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-goal-form',
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
    CalendarModule
  ],
  templateUrl: './goal-form.component.html',
  styleUrl: './goal-form.component.css'
})
export class GoalFormComponent implements OnInit{

  goalId: any;
  action: any = 'create';
  goal: any = {};

  constructor(public goalService: GoalService,
    public router: Router,
    public route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.goalId = this.route.snapshot.paramMap.get('id');
    if(this.goalId) {
      this.getgoal(this.goalId);
      this.action = "update";
    }
  }

  getgoal(id:any) {
    this.goalService.getGoalById(id).subscribe((data: any)=>{
      this.goal = data.goal;
      this.goal.start_date = new Date(this.goal.start_date);
      this.goal.due_date = new Date(this.goal.due_date);
    })
  };

  saveGoal(form: any) {
    if(!form.form.invalid) {
      if(this.action == 'create') {
        this.goalService.createGoal(this.goal).subscribe((data:any)=>{
          this.router.navigate(['goals']);
        })
      } else {
        this.goalService.updateGoal(this.goal._id,this.goal).subscribe((data:any)=>{
          this.router.navigate(['goals']);
        })
      }
    }
  }



}
