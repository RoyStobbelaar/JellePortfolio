import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'other',
  template: `
  
    <header [titleOnly]="true" [title]="'Low Poly'" class="header"></header>
    
    <div class="photo-zoom">
      
      <!-- Left photo -->
      <div class="left-photo">
        <img [src]="photoLeft" *ngIf="photoLeft" [ngClass]="{'rotate-right': navigateRight, 'rotate-left': navigateLeft}" (click)="rotate(false)">
      </div>
      
      <!-- Mid photo -->
      <div class="mid-photo">
        <img [src]="photoMid" *ngIf="photoMid" [ngClass]="{'rotate-right': navigateRight, 'rotate-left': navigateLeft}">

      </div>
      
      <!-- Right photo -->
      <div class="right-photo">
        <img [src]="photoRight" *ngIf="photoRight" [ngClass]="{'rotate-right': navigateRight, 'rotate-left': navigateLeft}" (click)="rotate(true)">

      </div>
      
    </div>
    <footer class="footer"></footer>
    
  `,
  styleUrls: ['./other.component.scss']
})

export class OtherComponent implements OnInit {

  public photos: string[];
  public photoLeft: string;
  public photoMid: string;
  public photoRight: string;
  public index: number;

  public navigateRight: boolean;
  public navigateLeft: boolean;

  constructor() {

  }

  ngOnInit() {
    this.photos = [];
    this.photos.push('/assets/photo/other1.png');
    this.photos.push('/assets/photo/other2.png');
    this.photos.push('/assets/photo/other3.png');
    this.photos.push('/assets/photo/other4.png');
    this.photos.push('/assets/photo/other5.png');
    this.photos.push('/assets/photo/other6.png');
    this.photos.push('/assets/photo/other7.png');

    this.index = 0;
    this.photoMid = this.photos[0];
    this.photoRight = this.photos[1];
  }

  public rotate(right: boolean) {

    if(right) {
      this.index++;
      this.navigateRight = true;
    } else {
      this.index--;
      this.navigateLeft = true;
    }

    setTimeout(() => {

      this.photoLeft = this.photos[this.index -1];
      this.photoMid = this.photos[this.index];
      this.photoRight = this.photos[this.index +1];

      this.navigateRight = false;
      this.navigateLeft = false;

    }, 1000);
  }
}
