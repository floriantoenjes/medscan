import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import { ScanComponent } from './scan/scan.component';
import { ManagePlansComponent } from './manage-plans/manage-plans.component';

const routes = [
  {path: '', component: WelcomeComponent}
] as Routes;

@NgModule({
  declarations: [
    WelcomeComponent,
    ScanComponent,
    ManagePlansComponent
  ],
  exports: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MedscanModule {
}
