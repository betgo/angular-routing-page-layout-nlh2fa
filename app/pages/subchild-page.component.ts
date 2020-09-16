import { Component } from '@angular/core';

@Component({
  selector: 'subchild-page',
  template: `
  <div *pageContainerHeader>Subchild Page</div>
  <div *pageContainerContent>
    <a routerLink="..">Previous Page</a> 
  </div>
  <router-outlet></router-outlet>
  `,
})
export class SubchildPageComponent {
  constructor() {}
}
