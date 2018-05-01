import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ContactusComponent} from './contactus/contactus.component';
import {AboutusComponent} from './aboutus/aboutus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactusComponent},
  {path: 'about', component: AboutusComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
