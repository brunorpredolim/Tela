import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SobreComponent } from './sobre/sobre.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: 'sobre', component: SobreComponent },
  { path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
