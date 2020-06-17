import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhereDoWeGoPage } from './where-do-we-go.page';

describe('WhereDoWeGoPage', () => {
  let component: WhereDoWeGoPage;
  let fixture: ComponentFixture<WhereDoWeGoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereDoWeGoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhereDoWeGoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
