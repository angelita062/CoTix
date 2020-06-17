import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneLisnWorldTourPage } from './one-lisn-world-tour.page';

describe('OneLisnWorldTourPage', () => {
  let component: OneLisnWorldTourPage;
  let fixture: ComponentFixture<OneLisnWorldTourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLisnWorldTourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneLisnWorldTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
