import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'renders',
  template: `    
    <header></header>
    
    <carousel [photos]="photos"></carousel>
    
    <div class="left-options">
      <div class="option" (click)="navigate('Lowpoly')">
        Low poly
      </div>
      <div class="option" (click)="navigate('Otherrenders')">
        Other renders
      </div>
    </div>
    
    <footer></footer>
  `,
  styleUrls: ['./renders.component.scss']
})

export class RendersComponent implements OnInit {

  public photos: string[];

  constructor(private _router: Router) {

  }

  ngOnInit() {
    this.photos = [];
    this.photos.push('/assets/photo/Background1.png');
    this.photos.push('/assets/photo/Background2.png');
  }

  public navigate(path: string) {
    this._router.navigateByUrl(`Renders/${path}`);
  }

}
