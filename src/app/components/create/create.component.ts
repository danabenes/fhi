import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import html2canvas from 'html2canvas';
import { NgxResizeHandleType } from 'ngx-drag-resize';
import { DynamicElementContainerComponent } from '../shared/dynamic-element-container/dynamic-element-container.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  readonly handleType = NgxResizeHandleType;

  elementData: any;
  newElement: any;
  arrayOfElements: Array<any> = [];

  @ViewChild('appendElement', { read: ViewContainerRef })
  appendElement!: ViewContainerRef;

  components: Array<any> = [];
  dynamicElement = DynamicElementContainerComponent;

  @ViewChild('screen')screen!: ElementRef;
  @ViewChild('canvas')canvas!: ElementRef;
  @ViewChild('downloadLink')downloadLink!: ElementRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { 
  }

  ngOnInit(): void {
    console.log(this.elementData);
  }

  getElementData(data: any) {
    const componentFactory = this.resolver.resolveComponentFactory(DynamicElementContainerComponent);
    const elementData = this.appendElement.createComponent(componentFactory).instance;
    elementData.data = data;
    this.components.push(elementData);
  }

  handleElementStyle(style:any) {
    if (this.components[this.components.length - 1].data.hasOwnProperty('fontStyle')) {
      delete this.components[this.components.length - 1].data[style.key];
    } else {
      this.components[this.components.length - 1].data[style.key] = style.value;
    }
  }

  saveImage() {
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }

}
