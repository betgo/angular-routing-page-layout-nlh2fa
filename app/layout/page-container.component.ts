import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { filter, tap, takeUntil } from 'rxjs/operators';
import { PageLayoutService, TemplateStack } from './page-layout.service';

@Component({
  selector: 'page-container',
  template: `
    <h1><ng-container #header></ng-container></h1>
    <div><ng-container #content></ng-container></div>
    <router-outlet></router-outlet>
  `,
  styles: [`div { margin-top: 40px }`]
})
export class PageContainerComponent implements OnInit {
  protected onDestroy$ = new Subject();
  private initialized = false;
  private headerTemplates: Array<TemplateRef<any>> = [];
  private contentTemplates: Array<TemplateRef<any>> = [];

  @ViewChild('header', { read: ViewContainerRef })
  private headerContainer: ViewContainerRef;

  @ViewChild('content', { read: ViewContainerRef })
  private contentContainer: ViewContainerRef;

  constructor(private service: PageLayoutService, private renderer: Renderer2) { }

  ngOnInit() {
    const setupTemplateListener = (stack: TemplateStack, container: ViewContainerRef) => {
      stack
        .asObservable()
        .pipe(
          takeUntil(this.onDestroy$),
          tap(_ => container.clear()),
          filter(t => !!t)
        )
        .subscribe(template => {
          const view = container.createEmbeddedView(template);
          view.detectChanges();
        });
    };

    setupTemplateListener(this.service.headerTemplates, this.headerContainer);
    setupTemplateListener(this.service.contentTemplates, this.contentContainer);
  }

  public ngOnDestroy() {
    this.headerContainer.clear();
    this.contentContainer.clear();
    
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
