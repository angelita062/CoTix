import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowImFeelingPage } from './how-im-feeling.page';

describe('HowImFeelingPage', () => {
  let component: HowImFeelingPage;
  let fixture: ComponentFixture<HowImFeelingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowImFeelingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowImFeelingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
