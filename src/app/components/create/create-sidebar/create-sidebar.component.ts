import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faFileCode, faCloudUploadAlt, faFont, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-sidebar',
  templateUrl: './create-sidebar.component.html',
  styleUrls: ['./create-sidebar.component.scss']
})
export class CreateSidebarComponent implements OnInit {

  faFileCode = faFileCode;
  faCloudUploadAlt = faCloudUploadAlt;
  faFont = faFont;
  faSearch = faSearch;
  currentTab : string = 'text';
  currentElementList: Array<any> = [];

  @Output() element: EventEmitter<any> = new EventEmitter();

  // FOR TEXT
  textList = [
    {
      fontFace: 'Montserrat-Bold',
      fontSize: '25px',
      name: 'heading',
      label: 'Add heading'
    },
    {
      fontFace: 'Montserrat-Reg',
      fontSize: '16px',
      name: 'body-text',
      label: 'Add body text'
    }
  ];

  // FOR IMAGES
  imagesList = [
    {
      image: 'clouds.jpg',
    },
    {
      image: 'clouds.jpg',
    },
    {
      image: 'clouds.jpg',
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.showList(this.currentTab);
  }

  showList(selected: string) {
    this.currentTab = selected;
    if(selected === 'text') {
      this.currentElementList = this.textList;
    } else {
      this.currentElementList = this.imagesList;
    }
  }

  addElement(type: string, data: any) {
    data.type = type;
    this.element.emit(data);
  }

}
