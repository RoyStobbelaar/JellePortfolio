import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {SlideMenuComponent} from './header/slide-menu/slide-menu.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {RendersComponent} from './renders/renders.component';
import {CarouselComponent} from './carousel/carousel.component';
import {PhotographyComponent} from './photography/photography.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: ContentComponent},
  {path: 'Renders', component: RendersComponent},
  {path: 'Photography', component: PhotographyComponent},
  {path: '**', redirectTo: 'Home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    RendersComponent,
    SlideMenuComponent,
    CarouselComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
