import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pembelian1Page } from './pembelian1.page';

describe('Pembelian1Page', () => {
  let component: Pembelian1Page;
  let fixture: ComponentFixture<Pembelian1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pembelian1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pembelian1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
