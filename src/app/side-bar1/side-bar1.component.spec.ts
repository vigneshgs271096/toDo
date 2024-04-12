import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBar1Component } from './side-bar1.component';

describe('SideBar1Component', () => {
  let component: SideBar1Component;
  let fixture: ComponentFixture<SideBar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBar1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
