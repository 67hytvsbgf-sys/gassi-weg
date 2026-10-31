import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreiseComponent } from './pages/preise/preise.component';
import { AnfrageComponent } from './pages/anfrage/anfrage.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'preise', component: PreiseComponent },
  { path: 'anfrage', component: AnfrageComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '' }
];
