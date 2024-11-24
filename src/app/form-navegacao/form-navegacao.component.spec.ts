import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNavegacaoComponent } from './form-navegacao.component';

describe('FormNavegacaoComponent', () => {
  let component: FormNavegacaoComponent;
  let fixture: ComponentFixture<FormNavegacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNavegacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
