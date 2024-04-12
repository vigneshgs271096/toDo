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
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-category-form',
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
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit{
  action: any = 'create';
  category: any = {};
  categoryId: any;

  constructor(public categoryService: CategoryService,public route: ActivatedRoute,public router: Router) {

  }

  ngOnInit(): void {
    // console.log('llllll');
    this.categoryId = this.route.snapshot.paramMap.get('id');
    if(this.categoryId) {
      this.getCategory(this.categoryId);
      this.action = "update";
    }
  }

  getCategory(id:any) {
    this.categoryService.getCategoryById(id).subscribe((data:any)=>{
      this.category = data.category;
      console.log(data);
    })
  }

  saveCategory(form: any) {
    if(!form.form.invalid) {
      if(this.action == 'create') {
        this.categoryService.createCategory(this.category).subscribe((data:any)=>{
          this.router.navigate(['category']);
        })
      } else {
        this.categoryService.updateCategory(this.category._id,this.category).subscribe((data:any)=>{
          this.router.navigate(['category']);
        })
      }
    }

  }

}
