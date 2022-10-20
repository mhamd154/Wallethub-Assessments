/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { CommonModule } from "@angular/common";
import {
  Component,
  DEFAULT_CURRENCY_CODE,
  NgModule,
  OnInit,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "ng-app",
  template: `<div>
    <h2>Loan Details</h2>
    <b>Monthly Payment:</b>
    {{
      monthly_payment !== "N/A" ? (monthly_payment | currency) : monthly_payment
    }}
    <br />
    <b
      >Late Payment Fee :
      {{ late_payment !== "N/A" ? (late_payment | currency) : late_payment }}</b
    >
    <br />
  </div>`,
})
export class Test01Component implements OnInit {
  loan_amount: any = 1000;
  monthly_payment: any = 200;
  late_payment: any = 10;

  loan$: BehaviorSubject<any>;
  monthly$: BehaviorSubject<any>;

  constructor() {
    this.loan$ = new BehaviorSubject(this.loan_amount);
    this.monthly$ = new BehaviorSubject(this.monthly_payment);
  }

  ngOnInit(): void {
    this.loan$.subscribe((loan_amount) => {
      if (loan_amount === 0 || !loan_amount) {
        this.monthly$.next("N/A");
      } else {
        const newMonthlyPayment = loan_amount * 0.02;
        this.monthly$.next(newMonthlyPayment);
      }
    });

    this.monthly$.asObservable().subscribe((newMonthlyPayment) => {
      this.monthly_payment = newMonthlyPayment;
      if (newMonthlyPayment !== "N/A") {
        this.late_payment = newMonthlyPayment * 0.05;
      } else {
        this.late_payment = "N/A";
      }
    });
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: Test01Component,
      },
    ]),
  ],
  declarations: [Test01Component],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: "USD" }],
})
export class Test01Module {}
