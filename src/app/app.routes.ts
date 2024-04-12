import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

export const routes: Routes = [
    {path: "tasks", component: TasksListComponent },
    {path: "goals", component: GoalsListComponent },
    {path: "category" , component: CategoriesListComponent },
    {path: "task/create" , component: TaskFormComponent },
    {path: "task/update/:id" , component: TaskFormComponent },
    {path: "goal/create" , component: GoalFormComponent },
    {path: "goal/update/:id" , component: GoalFormComponent },
    {path: "category/create" , component: CategoryFormComponent },
    {path: "category/update/:id" , component: CategoryFormComponent },
    {path: "" , component: TasksListComponent }
];
