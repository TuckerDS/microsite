import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing.module';
import { PageModule } from './page/page.module';

@NgModule({
  imports: [CommonModule, PublicRoutingModule, PageModule],
  declarations: [PublicComponent],
  exports: [PageModule]
})
export class PublicModule {}
