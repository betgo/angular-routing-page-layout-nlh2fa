import { Directive, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { PageContainerComponent } from './page-container.component';
import { PageLayoutService } from './page-layout.service';

@Directive({
  selector: '[pageContainerHeader]'
})
export class PageContainerHeaderDirective implements OnInit, OnDestroy {
  constructor(private template: TemplateRef<any>, private service: PageLayoutService) {}

  ngOnInit() {
    this.service.headerTemplates.push(this.template);
  }

  ngOnDestroy() {
    this.service.headerTemplates.pop();
  }
}