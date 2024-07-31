import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { UpiPaymetComponent } from './upi-payment/upi-payment.component';

const routes: Routes = [
  {path:"card-payment",component:CardPaymentComponent},
  {path:"upi-payment",component:UpiPaymetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
