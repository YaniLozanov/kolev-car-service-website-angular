import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './modules/content/pages/index/index.component';
import { AboutUsSectionComponent } from './modules/content/pages/about-us-section/about-us-section.component';
import { ServicesSectionComponent } from './modules/content/pages/services-section/services-section.component';
import { IonicModule } from '@ionic/angular';
import { GalerySectionComponent } from './modules/content/pages/galery-section/galery-section.component';
import { ReviewsSectionComponent } from './modules/content/pages/reviews-section/reviews-section.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutUsSectionComponent,
    ServicesSectionComponent,
    GalerySectionComponent,
    ReviewsSectionComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
