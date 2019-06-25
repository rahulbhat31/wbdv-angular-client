import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowToolbarComponentComponent } from './row-toolbar-component.component';

describe('RowToolbarComponentComponent', () => {
  let component: RowToolbarComponentComponent;
  let fixture: ComponentFixture<RowToolbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowToolbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowToolbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
