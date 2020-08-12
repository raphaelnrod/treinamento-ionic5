import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestedNgForPage } from './nested-ng-for.page';

const routes: Routes = [
  {
    path: '',
    component: NestedNgForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NestedNgForPageRoutingModule {}
