import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TreeSelectModule } from 'primeng/treeselect';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaskService } from '../services/tasks/task.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-header',
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
		NgSelectModule
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
	items: MenuItem[] | undefined;
	darkMode: boolean = false;
	@Output() darkModeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() isTaskCreated: EventEmitter<boolean> = new EventEmitter<boolean>();
	displayDialog: boolean = false;
	task: any = {};

	constructor(public taskService: TaskService,private router: Router) {

	}




	// showDialog() {
	// 	this.displayDialog = true;
	// }

	ngOnInit() {
		this.items = [];
	}

	toggleDarkMode(isDarkMode: boolean) {
		// Logic to toggle dark mode...
		this.darkModeChanged.emit(isDarkMode);
	}

	addTask() {
		this.router.navigate(['/task/create']);
	}

	// saveTask(form: any) {
	// 	this.taskService.createTask(this.task).subscribe((data: any) => {
	// 		console.log(data)
	// 		if(data.message == "Task created") {
	// 			this.isTaskCreated.emit(true);
	// 			this.hideDialog();
	// 		}
	// 	});
	// }

}
