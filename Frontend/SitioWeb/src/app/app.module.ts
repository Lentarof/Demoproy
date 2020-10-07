import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './Component/gallery/gallery.component';
import { IvyGalleryModule } from 'angular-gallery';
import { NuestrasCasasComponent } from './Component/nuestras-casas/nuestras-casas.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NuestrasCasasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
