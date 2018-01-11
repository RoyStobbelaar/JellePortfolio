import {Component, Input} from '@angular/core';

@Component({
  selector: 'header',
  template: `
    
    <div class="row" *ngIf="titleOnly">

      <div class="col-sm-4 col-md-4 col-lg-6 margin-left menu-item">
        <slide-menu [title]="title"></slide-menu>
      </div>
      
    </div>
    

    <div class="row" *ngIf="!titleOnly">
      <div class="col-sm-4 col-md-4 col-lg-6 margin-left menu-item">
        <slide-menu [title]="'About Me'" [items]="['Intro', 'Hobbies', 'Music', 'Inspiration']"></slide-menu>
      </div>
      <div class="col-sm-4 col-md-4 col-lg-3 menu-item">
        <slide-menu [title]="'Renders'" [items]="['Low poly', 'Computer Girl', 'Other renders']"></slide-menu>
      </div>
      <div class="col-sm-4 col-md-4 col-lg-3 menu-item">
        <slide-menu [title]="'Photography'" [items]="['Urban', 'Portraits', 'Summer \\'17']"></slide-menu>
      </div>
    </div>

  `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Input() title: string;
  @Input() titleOnly: boolean;

}
