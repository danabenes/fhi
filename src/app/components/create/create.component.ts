import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('canvas')canvas!: ElementRef;
  @ViewChild('richText')richText!: ElementRef;

  arrayOfElements: Array<any> = [];
  selectedElement: any;

  bgSelected : boolean = false;
  currentIndex:any = null;
  backgroundColor: string = 'white';
  defaultFontSize : number = 12;

  constructor(
  ) { 
  }

  ngOnInit(): void {
    this.arrayOfElements.push({type: 'background', color: 'white'});
  }

  clickedOutside(element:any) {
    if(element.target === element.currentTarget) {
      this.bgSelected = false;
      this.currentIndex = null;
    }
  }

  selectBgArea(element: any) {
    if(element.target === element.currentTarget) {
      this.bgSelected = true;
      this.currentIndex = 0;
    }
  }

  addElement(data: any) {
    let indexOfLatestElem = this.arrayOfElements.push(data) - 1;
    this.currentIndex = indexOfLatestElem;
    this.defaultFontSize = data.fontSize ? data.fontSize.substring(0,2) : 12;
  }

  selectElement(index: number) {
    this.currentIndex = index;
  }

  setElementStyle(styles: any) {
    if(this.arrayOfElements[this.currentIndex].hasOwnProperty(styles.key) && this.arrayOfElements[this.currentIndex][styles.key] === styles.value) {
      delete this.arrayOfElements[this.currentIndex][styles.key];
    } else {
      this.arrayOfElements[this.currentIndex][styles.key] = styles.value;
    }

    if(styles.key === 'bg') {
      this.backgroundColor = styles.value;
    }
  }

}
