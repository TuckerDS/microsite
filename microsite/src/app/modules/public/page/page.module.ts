import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { HttpClientModule } from '@angular/common/http';

// import { BannerModule } from 'app/components/banner/banner.module';
import { BannerComponent } from 'app/components/banner/banner.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // BannerModule
  ],
  declarations: [PageComponent, BannerComponent]
})
export class PageModule { }
