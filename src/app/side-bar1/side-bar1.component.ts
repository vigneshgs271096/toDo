import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ListboxModule } from 'primeng/listbox';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-side-bar1',
  standalone: true,
  imports: [ListboxModule,FormsModule],
  templateUrl: './side-bar1.component.html',
  styleUrl: './side-bar1.component.css'
})
export class SideBar1Component {
  cities!: City[];

  selectedCity!: City;

  constructor(
    private router: Router
  ) {

	}

  ngOnInit() {
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  }

  pageChange(url: any = 'tasks') {
    this.router.navigate([url])
  }


}
