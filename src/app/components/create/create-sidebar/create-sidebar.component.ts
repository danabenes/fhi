import { Component, OnInit } from '@angular/core';
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
  currentTab : string = 'template';

  constructor() { }

  ngOnInit(): void {
  }

  showList(selected: string) {
    this.currentTab = selected;
  }

}
