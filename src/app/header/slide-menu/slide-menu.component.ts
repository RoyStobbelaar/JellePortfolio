import {Component, Input} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'slide-menu',
  template: `

    <div class="menu-item" (mouseleave)="onLeave()">
      <div>
        <span (mouseenter)="onEnter()" class="item" (click)="navigate(title)">
          {{title}}
        </span>

        <div *ngIf="open" class="item menu-item-expand"[@expand]>
            <div *ngFor="let item of items">
              <div (click)="navigateChild(item)">{{item}}</div>
            </div>
          </div>

      </div>
    </div>

  `,
  styleUrls: ['./slide-menu.component.scss'],
  animations: [
    trigger(
      'expand', [
        transition(':enter', [
          style({transform: 'translateY(-5%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(30%)', opacity: 0}))
        ])
      ]
    )
  ],
})

export class SlideMenuComponent {

  public open: boolean;

  @Input() items: string[];
  @Input() title: string;

  constructor(private _router: Router) {

  }

  public onEnter() {
    this.open = true;
  }

  public onLeave() {
    this.open = false;
  }

  public navigate(path: string) {
    this._router.navigateByUrl(path);
  }

  public navigateChild(path: string) {

    let formattedPath = path.replace(' ','').toLowerCase();
    formattedPath = formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);

    console.log(formattedPath);
    this._router.navigateByUrl(`${this.title}/${formattedPath}`);
  }

}
