import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { QulificationComponent } from './qulification/qulification.component';
import { MenuComponent } from './menu/menu.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { HeaderComponent } from './header/header.component';


export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'work', component: WorkComponent },
    { path: 'qualification', component: QulificationComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
