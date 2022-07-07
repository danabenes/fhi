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
  currentTab : string = 'image';
  currentElementList: Array<any> = [];

  @Output() element: EventEmitter<any> = new EventEmitter();

  // FOR TEXT
  textList = [
    {
      fontFace: 'Montserrat-Bold',
      fontSize: '18pt',
      name: 'heading',
      label: 'Add heading'
    },
    {
      fontFace: 'Montserrat-SemiBold',
      fontSize: '15pt',
      name: 'sub-heading',
      label: 'Add subheading'
    },
    {
      fontFace: 'Montserrat-Reg',
      fontSize: '12pt',
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
