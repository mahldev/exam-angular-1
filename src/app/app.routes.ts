import { Routes } from '@angular/router';
import {
  HomeComponent,
  Ex01Component,
  Ex02Component,
  Ex03Component,
  Ex04Component,
  Ex05Component,
  Ex06Component,
  Ex07Component,
  Ex08Component,
  Ex09Component,
  Ex10Component,
  ExamComponent,
} from '@routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ex1', component: Ex01Component },
  { path: 'ex2', component: Ex02Component },
  { path: 'ex3', component: Ex03Component },
  { path: 'ex4', component: Ex04Component },
  { path: 'ex5', component: Ex05Component },
  { path: 'ex6', component: Ex06Component },
  { path: 'ex7', component: Ex07Component },
  { path: 'ex8', component: Ex08Component },
  { path: 'ex9', component: Ex09Component },
  { path: 'ex10', component: Ex10Component },
  { path: 'exam', component: ExamComponent },
];
