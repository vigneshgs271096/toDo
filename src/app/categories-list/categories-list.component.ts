import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent implements OnInit {
  categories: any = [];

  constructor(public router: Router,public categoryService: CategoryService) {}


  ngOnInit(): void {
    this.searchCategory();
  }


  openCategoryForm() {
    this.router.navigate(['/category/create']);
  }

  searchCategory() {
    this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories = data.categories;
    })
  }

  editCategory(category:any = {}) {
    this.router.navigate(['/category/update',category._id]);
  }

  deleteCategory(id:any = {}) {
    this.categoryService.deleteCategory(id).subscribe((data:any)=>{
      this.searchCategory();
    })
  }
}
