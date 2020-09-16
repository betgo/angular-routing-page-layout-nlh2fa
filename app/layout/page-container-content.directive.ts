import { Directive, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { PageContainerComponent } from './page-container.component';
import { PageLayoutService } from './page-layout.service';

@Directive({
    selector: '[pageContainerContent]'
})
export class PageContainerContentDirective implements OnInit, OnDestroy {
    constructor(private template: TemplateRef<any>, private service: PageLayoutService) {}

    ngOnInit() { 
        this.service.contentTemplates.push(this.template);
    }

    ngOnDestroy() {
        this.service.contentTemplates.pop();
    }
}