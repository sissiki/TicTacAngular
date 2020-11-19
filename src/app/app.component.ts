import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:`<nb-layout>
  <nb-layout-header fixed>

  </nb-layout-header>
  <nb-layout-column>
      <app-board> </app-board>
      
      <router-outlet> </router-outlet>
  </nb-layout-column>
  <nb-layout-footer fixed>
      
  </nb-layout-footer>
</nb-layout>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
}
