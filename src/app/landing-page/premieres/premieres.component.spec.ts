import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremieresComponent } from './premieres.component';



describe('WeeklyBilboardsComponent', () => {
  let component: PremieresComponent
  let fixture: ComponentFixture<PremieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremieresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
