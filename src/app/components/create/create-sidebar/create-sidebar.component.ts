import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faFileCode, faCloudUploadAlt, faFont, faSearch, faImages } from '@fortawesome/free-solid-svg-icons';

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
  faImages = faImages;
  currentTab : string = 'elements';
  currentElementList: Array<any> = [];

  selectedFileName: string = 'Select Image';
  enableUploadBtn: boolean = false;

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

  // FOR SHAPES
  shapesList = [
    {
      fig: '<svg width="100%" height="90"><circle cx="50" cy="50" r="40" fill="white" /></svg>'
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
    } else if (selected === 'elements'){
      this.currentElementList = this.shapesList;
    } else {
      this.currentElementList = this.imagesList;
    }
  }

  addElement(type: string, data: any) {
    data.type = type;
    this.element.emit(data);
  }

  selectImage(imageDetails: any) {
    this.selectedFileName = imageDetails.target.files[0].name;
    this.enableUploadBtn = true;
  }

  uploadImage() {
    console.log('upload image');
  }

}
