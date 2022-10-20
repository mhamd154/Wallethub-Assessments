/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ng-app",
  template: `
    <h2>Enter your first and last name</h2>
    <div>
      <input
        type="text"
        [(value)]="firstname"
        (change)="firstNameValue($event.target.value)"
        name="firstname"
      />
      <input
        type="text"
        [(value)]="lastname"
        (change)="lastNameValue($event.target.value)"
        name="lastname"
      />
    </div>
    {{ username }}
  `,
  styles: [],
})
export class UserNameComponent {
  username: string = "";
  firstname: string = "";
  lastname: string = "";

  firstNameValue(value) {
    const firstName = value;
    this.firstname = firstName;

    if (!!this.lastname) {
      this.username = this.generateUserName(firstName, this.lastname);
    }
  }

  lastNameValue(value) {
    const lastname = value;
    this.lastname = lastname;

    if (!!this.firstname) {
      this.username = this.generateUserName(this.firstname, lastname);
    }
  }

  generateUserName(firstname: string, lastname: string) {
    return `${firstname}_${lastname}_${
      Math.floor(Math.random() * (9 - 9 + 1)) + 1
    }`.toLowerCase();
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: UserNameComponent,
      },
    ]),
  ],
  declarations: [UserNameComponent],
})
export class UserNameModule {}
