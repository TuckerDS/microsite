import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('app/modules/public/public.module').then(m => m.PublicModule)
      },
      { path: '**', redirectTo: '/home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [],
  exports: [RouterModule]
})
export class MainRoutingModule {}
