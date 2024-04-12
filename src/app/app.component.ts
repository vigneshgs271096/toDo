import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { SideBar1Component } from "./side-bar1/side-bar1.component";
import { SideBar2Component } from "./side-bar2/side-bar2.component";
import { HttpClientModule } from '@angular/common/http';
import { TasksListComponent } from "./tasks-list/tasks-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        FormsModule,
        HeaderComponent,
        SideBar1Component,
        SideBar2Component,
        HttpClientModule,
        TasksListComponent
    ]
})
export class AppComponent {
  title = 'toDoList';
  // @HostBinding('style.--bg-color') bgColor: string = 'lightblue';
  // @HostBinding('style.--text-color') textColor: string = 'black';



  taskCreated(isTaskCreated: any) {
    if(isTaskCreated) {
      console.log(isTaskCreated)
    }
  }
  










  onDarkModeChanged(isDark: boolean) {
    // Handle the dark mode change here...
    // console.log(isDark)
    // if(isDark) {
    //   this.bgColor = 'yellow';
    //   this.textColor = 'blue';
      
    // }
    
  }


}



