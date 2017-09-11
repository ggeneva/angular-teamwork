import { AuthService } from './../../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutComponent } from './logout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
class MockAuthService {
  logout() { return Promise.resolve(); }
}

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      providers: [
       { provide: AuthService, useClass: MockAuthService},
       { provide: RouterTestingModule, useValue: router }
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
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
    expect(el.innerHTML).toContain('logout works');
  });
});
