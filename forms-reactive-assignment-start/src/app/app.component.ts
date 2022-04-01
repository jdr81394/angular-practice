import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  assignmentForm: FormGroup;
  dropdowns: string[] = ["Stable", "Critical", "Finished"];

  ngOnInit() : void {
    this.assignmentForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, Validators.minLength(1)], this.customValidator.bind(this)),
      "email": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "status": new FormControl(null)
    })
  }

  onSubmit(): void {
    console.log("This form: "  ,this.assignmentForm);
  }

  customValidator(): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, _)=> {
        if(this.assignmentForm.get("name").value === "Test") {
          resolve({"nameIsTest": true});
        } 
    })
    return promise;
  }


}
