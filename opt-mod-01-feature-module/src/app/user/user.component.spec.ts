import { async, TestBed } from "@angular/core/testing";
import { UserComponent } from "./user.component";


describe("This compiles the component", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  })

  it("This creates the component", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })


})