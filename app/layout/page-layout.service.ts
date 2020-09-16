import { Injectable, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export class TemplateStack {
  private templates: Array<TemplateRef<any>> = [];
  private obs = new ReplaySubject<TemplateRef<any>>(1);

  public push(template: TemplateRef<any>) {
    this.templates.push(template);
    this.obs.next(template);
  }

  public pop() {
    this.templates.pop();
    this.obs.next(this.templates[this.templates.length - 1]);
  }

  public asObservable() {
    return this.obs.asObservable();
  }
}

@Injectable()
export class PageLayoutService {
  headerTemplates = new TemplateStack();
  contentTemplates = new TemplateStack();

  constructor() {}
}
