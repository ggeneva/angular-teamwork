import { element } from 'protractor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ErrorComponent } from './error.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  const currentPath = 'Random';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    component.currentPath = currentPath;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display current Path in paragraph element', () => {
    // Arrange.
    const de = fixture.debugElement.query(By.css('p'));
    const el: HTMLElement = de.nativeElement;

    // Assert.
    expect(el.innerHTML).toContain(currentPath);
  });

  it('should display Page not found in break element', () => {
    // Arrange.
    const de = fixture.debugElement.query(By.css('p'));
    const el: HTMLElement = de.nativeElement;

    // Assert.
    expect(el.innerHTML).toContain('Page not found!');
  });
});
