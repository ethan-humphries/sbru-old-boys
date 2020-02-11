import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavigationModule } from 'src/app/navigation/navigation/navigation.module';
import { FooterModule } from 'src/app/footer/footer/footer.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    FooterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
