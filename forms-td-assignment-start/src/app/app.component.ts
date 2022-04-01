import { Component,ViewChild , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("form") ngForm: NgForm;
  subscriptions: string[] = ["Basic", "Advanced", "Pro"];

  ngOnInit(): void {
    // this.ngForm.form.patchValue({subscriptionDropdown: "Advanced"})
  }

  onSubmit(): void {
    console.log("form: " , this.ngForm.form);
  }
}
