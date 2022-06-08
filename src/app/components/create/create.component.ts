import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  elementData: any;
  newElement: any;
  arrayOfElements: Array<any> = [];

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  @ViewChild('screen')screen!: ElementRef;
  @ViewChild('canvas')canvas!: ElementRef;
  @ViewChild('downloadLink')downloadLink!: ElementRef;

  ngOnInit(): void {
    console.log(this.elementData);
  }

  getElementData(data: any) {
    if(data.type === 'textbox') {
      const inputField = '<div class="input-container"><input type="text" placeholder="Add text here" style="font-family:'+ data.fontFace +';font-size:'+data.fontSize+'"></div>';
      this.arrayOfElements.push({
        elmnt: this.sanitizer.bypassSecurityTrustHtml(inputField), 
        style: data
      });
    }

    console.log(this.arrayOfElements);
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
