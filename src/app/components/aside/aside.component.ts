import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { type Exercise } from '@models';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink],
  template: `
    <aside class="flex flex-col p-6 bg-zinc-200 h-full rounded-lg">
      <h3 class="text-4xl border-b border-black py-2">Exercices</h3>
      <nav class="flex flex-col gap-4 mt-6">
        <ul>
          <li class="text-xl"><a routerLink="">Home</a></li>
          @for (exercise of exercices; track exercise.title) {
            <li>
              <a class="text-xl" routerLink="{{ exercise.path }}">
                {{ exercise.title }}
              </a>
            </li>
          }
        </ul>
      </nav>
    </aside>
  `,
})
export class AsideComponent {
  exercices: Exercise[] = [
    { title: 'Exercise 1', path: 'ex1' },
    { title: 'Exercise 2', path: 'ex2' },
    { title: 'Exercise 3', path: 'ex3' },
    { title: 'Exercise 4', path: 'ex4' },
    { title: 'Exercise 5', path: 'ex5' },
    { title: 'Exercise 6', path: 'ex6' },
    { title: 'Exercise 7', path: 'ex7' },
    { title: 'Exercise 8', path: 'ex8' },
    { title: 'Exercise 9', path: 'ex9' },
    { title: 'Exercise 10', path: 'ex10' },
    { title: 'Exam', path: 'exam' },
  ];
}
