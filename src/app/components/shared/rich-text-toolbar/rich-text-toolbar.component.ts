import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBold, faItalic, faTrashAlt, faMinus, faPlus, faEyeDropper } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rich-text-toolbar',
  templateUrl: './rich-text-toolbar.component.html',
  styleUrls: ['./rich-text-toolbar.component.scss']
})
export class RichTextToolbarComponent implements OnInit {

  @Output() style = new EventEmitter<any>();
  @Output() deleteItem = new EventEmitter<any>();

  faBold = faBold;
  faItalic = faItalic;
  faDelete = faTrashAlt;
  faMinus = faMinus;
  faPlus = faPlus;
  faEyeDropper = faEyeDropper;

  styleElement:any = {};
  bgColor: any = 'black';
  textColor: any = 'black';
  fonts: any = [];
  hideSelectLabel: boolean = false;
  selectedOption = "default";

  @Input() fontSize: any = 12;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getFonts().subscribe(data => {
      this.fonts = data;
    });
  }

  onColorChange(type: string, colorCode: string) {
    if(type === 'bg') {
      this.bgColor = colorCode;
      this.setStyle('bg', colorCode);
    } else {
      this.textColor = colorCode;
      this.setStyle('textColor', colorCode);
    }
  }

  onFontSelect(type:string, font: any) {
    this.hideSelectLabel = true;
    if(type === 'fontFace') {
      this.setStyle('fontFace', font.value)
    } else {
      this.setStyle('fontSize', font)
    }
  }

  setStyle(key: string, value: string) {
    this.style.emit({key: key, value: value});
  }

  deleteElement(){
    this.deleteItem.emit(true);
  }

  handleFont(type: string) {
    this.fontSize = parseInt(this.fontSize);
    if(type === 'add') {
      this.fontSize = this.fontSize += 1;
    } else {
      this.fontSize = this.fontSize -= 1;
    }

    this.setStyle('fontSize', this.fontSize.toString()+'px');
  }

}
