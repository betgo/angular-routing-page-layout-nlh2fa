import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChildPageComponent } from './pages/child-page.component';
import { PrimaryPageComponent } from './pages/primary-page.component';
import { PageContainerComponent } from './layout/page-container.component';
import { PageContainerHeaderDirective } from './layout/page-container-header.directive';
import { PageContainerContentDirective } from './layout/page-container-content.directive';
import { SubchildPageComponent } from './pages/subchild-page.component';

@NgModule({
  declarations: [
    PageContainerComponent, PageContainerHeaderDirective, PageContainerContentDirective,
    PrimaryPageComponent, ChildPageComponent, SubchildPageComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: PageContainerComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'primary'
          },
          {
            path: 'primary',
            component: PrimaryPageComponent,
            children: [
              {
                path: 'child',
                component: ChildPageComponent,
                children: [
                  {
                    path: 'subchild',
                    component: SubchildPageComponent
                  }
                ]
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule { }


