import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteAccountingComponent } from './vote-accounting.component';

describe('VoteAccountingComponent', () => {
  let component: VoteAccountingComponent;
  let fixture: ComponentFixture<VoteAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteAccountingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
