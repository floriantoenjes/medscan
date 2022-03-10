import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import { ScanComponent } from './scan/scan.component';
import { ManagePlansComponent } from './manage-plans/manage-plans.component';
import { MedscanComponent } from './medscan/medscan.component';

const routes = [
  {path: '', component: WelcomeComponent},
  {path: 'scan', component: ScanComponent},
  {path: 'manage-plans', component: ManagePlansComponent}
] as Routes;

@NgModule({
  declarations: [
    WelcomeComponent,
    ScanComponent,
    ManagePlansComponent,
    MedscanComponent
  ],
  exports: [
    WelcomeComponent,
    MedscanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class MedscanModule {
}
