import { Component } from '@angular/core';

@Component({
  selector: 'child-page',
  template: `
  <div *pageContainerHeader>Child Page</div>
  <div *pageContainerContent>
    <a routerLink="..">Previous Page</a> 
    <a routerLink="subchild">Sub Page</a> 
  </div>
  <router-outlet></router-outlet>
  `,
})
export class ChildPageComponent {
  constructor() {}
}
