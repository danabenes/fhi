import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
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

  // readonly handleType = NgxResizeHandleType;
  type: string = "null";

  @Input('data') data: any;
  // @Input('width') public width: number = 300;
  // @Input('height') public height: number = 29;
  // @Input('left') public left: number = 100;
  // @Input('top') public top: number = 100;

  // @ViewChild("box") public box: ElementRef;
  // private boxPosition: { left: number, top: number };
  // private containerPos: { left: number, top: number, right: number, bottom: number };
  // public mouse: {x: number, y: number}
  // public status: Status = Status.OFF;
  // private mouseClick: {x: number, y: number, left: number, top: number}

  constructor() { }

  ngOnInit(): void {
    this.type = this.data.type;
    console.log(this.data);
  }

  ngAfterViewInit(){
  }

  onMouseOut() {
    console.log('mouse out');
  }

  onMouseIn() {
    console.log('mouse in');
  }

  // private loadBox(){
  //   const {left, top} = this.box.nativeElement.getBoundingClientRect();
  //   this.boxPosition = {left, top};
  // }

  // private loadContainer(){
  //   const left = this.boxPosition.left - this.left;
  //   const top = this.boxPosition.top - this.top;
  //   const right = left + 500;
  //   const bottom = top + 500;
  //   this.containerPos = { left, top, right, bottom };
  // }

  // setStatus(event: MouseEvent, status: number){
  //   if(status === 1) event.stopPropagation();
  //   else if(status === 2) this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
  //   else this.loadBox();
  //   this.status = status;
  // }

  // @HostListener('window:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent){
  //   this.mouse = { x: event.clientX, y: event.clientY };

  //   if(this.status === Status.RESIZE) this.resize();
  //   else if(this.status === Status.MOVE) this.move();
  // }

  // private resize(){
  //   if(this.resizeCondMeet()){
  //     this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
  //     this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
  //   }
  // }

  // private resizeCondMeet(){
  //   return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
  // }

  // private move(){
  //   if(this.moveCondMeet()){
  //     this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
  //     this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
  //   }
  // }

  // private moveCondMeet(){
  //   const offsetLeft = this.mouseClick.x - this.boxPosition.left; 
  //   const offsetRight = this.width - offsetLeft; 
  //   const offsetTop = this.mouseClick.y - this.boxPosition.top;
  //   const offsetBottom = this.height - offsetTop;
  //   return (
  //     this.mouse.x > this.containerPos.left + offsetLeft && 
  //     this.mouse.x < this.containerPos.right - offsetRight &&
  //     this.mouse.y > this.containerPos.top + offsetTop &&
  //     this.mouse.y < this.containerPos.bottom - offsetBottom
  //     );
  // }
}
