import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraderPageComponent } from './trader-page.component';

describe('TraderPageComponent', () => {
  let component: TraderPageComponent;
  let fixture: ComponentFixture<TraderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
