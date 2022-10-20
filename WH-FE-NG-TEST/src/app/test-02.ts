/**
 * Update the following components to meet the requirements :
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, EventEmitter, NgModule, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "textfield",
  template:
    '<input type="text" [value]="field" (keyup)="type($event.target.value)" />',
})
export class TextField {
  field = "";
  @Output() title: EventEmitter<string> = new EventEmitter<string>();

  type(val) {
    this.title.emit(val);
  }
}

@Component({
  selector: "child-component",
  template: `<h2>
    Title:
    <h2><br /><textfield (title)="set($event)"></textfield></h2>
  </h2>`,
})
export class ChildComponent {
  @Output() title: EventEmitter<string> = new EventEmitter<string>();

  set(val) {
    this.title.emit(val);
  }
}

@Component({
  selector: "ng-app",
  template: `<div>
    <child-component (title)="set($event)"></child-component> <br />
    Title is {{ title }}
  </div>`,
})
export class Test02Component {
  title: string = "";
  set(val) {
    this.title = val;
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: Test02Component,
      },
    ]),
  ],
  declarations: [Test02Component, ChildComponent, TextField],
})
export class Test02Module {}
