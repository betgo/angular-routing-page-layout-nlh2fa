import { Component } from '@angular/core';

@Component({
  selector: 'primary-page',
  template: `
    <div *pageContainerHeader>Primary Page</div>
    <div *pageContainerContent>
      <a routerLink="child">Child Page</a> 
    </div>
    <router-outlet></router-outlet>
  `,
})
export class PrimaryPageComponent {
  constructor() {}
}
