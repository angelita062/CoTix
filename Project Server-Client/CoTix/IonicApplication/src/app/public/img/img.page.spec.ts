import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImgPage } from './img.page';

describe('ImgPage', () => {
  let component: ImgPage;
  let fixture: ComponentFixture<ImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
