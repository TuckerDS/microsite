import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('app/modules/main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
