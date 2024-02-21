import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from '@components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideComponent],
  template: `
    <main class="grid grid-cols-5 w-full h-dvh p-6">
      <section class="col-span-1">
        <app-aside></app-aside>
      </section>
      <section class="col-span-4 p-6">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {}
