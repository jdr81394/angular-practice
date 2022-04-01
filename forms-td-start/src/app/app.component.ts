import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("f") signupForm: NgForm;
  defaultQuestion: string = "pet";
  answer: string = "test";
  genders: Array<string> = ["male", "female"];
  submitted: boolean = false;
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  }
  suggestUserName() {
    console.log("here");
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ""
    //   },
    //   secret: "pet",
    //   questionAnswer: 'works',
    //   gender: "male"
    // })
    this.signupForm.form.patchValue({
        userData:{ 
          username: suggestedName
        }
    })
  }
  /* Alternative Approach */
  // onSubmit(form: NgForm): void {
  //   console.log("Forms: " , form);
  // }

  onSubmit() {
    console.log(
      "This sign up form: " ,  this.signupForm
    )
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
