import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'lowpoly',
  template: `
  
    <header [titleOnly]="true" [title]="'Low Poly'" class="header"></header>
    
    <div class="photo-zoom">
      
      <!-- Left photo -->
      <div class="left-photo" #leftbox>
        <img #left [src]="photoLeft" *ngIf="photoLeft" [ngClass]="{'rotate-right': navigateRight, 'rotate-left': navigateLeft}" (click)="rotate(false)">
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
  styleUrls: ['./lowpoly.component.scss']
})

export class LowpolyComponent implements OnInit {

  public photos: string[];
  public photoLeft: string;
  public photoMid: string;
  public photoRight: string;
  public index: number;

  public navigateRight: boolean;
  public navigateLeft: boolean;

  public left: any;
  // @ViewChild('left') left: ElementRef;

  constructor() {

  }

  ngOnInit() {
    this.photos = [];
    this.photos.push('/assets/photo/render1.png');
    this.photos.push('/assets/photo/render2.png');
    this.photos.push('/assets/photo/render3.png');
    this.photos.push('/assets/photo/render4.png');
    this.photos.push('/assets/photo/render5.png');

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

  public getLeft(): string {


    let width = this.left.nativeElement.width;
    let correction = (width*4);
    let widthCorrection = correction/4;

    console.log((correction - widthCorrection)+'px');
    return (correction - widthCorrection) + 'px';

  }
}
