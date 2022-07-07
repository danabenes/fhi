import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { NgxResizeHandleType } from 'ngx-drag-resize';

const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}

@Component({
  selector: 'app-dynamic-element-container',
  templateUrl: './dynamic-element-container.component.html',
  styleUrls: ['./dynamic-element-container.component.scss']
})
export class DynamicElementContainerComponent implements OnInit {

  type: string = "null";
  isSelected: boolean = true;
  clickCount: number = 0;

  @Input('data') data: any;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.isSelected = true;
    } else {
      this.clickCount += 1;
      if(this.clickCount >= 2) {
        this.isSelected = false;
        this.clickCount = 0;
      }
    }
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    this.type = this.data.type;
  }

  ngAfterViewInit(){
  }
}
