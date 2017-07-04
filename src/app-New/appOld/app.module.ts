import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkComponent } from './work/work.component';
import { QulificationComponent } from './qulification/qulification.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainbodyComponent,
    MenuComponent,
    HomeComponent,
    PortfolioComponent,
    WorkComponent,
    QulificationComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
