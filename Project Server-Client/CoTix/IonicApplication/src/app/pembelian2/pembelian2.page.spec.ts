import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pembelian2Page } from './pembelian2.page';

describe('Pembelian2Page', () => {
  let component: Pembelian2Page;
  let fixture: ComponentFixture<Pembelian2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pembelian2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pembelian2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
