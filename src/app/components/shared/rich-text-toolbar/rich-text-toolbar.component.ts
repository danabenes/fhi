import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rich-text-toolbar',
  templateUrl: './rich-text-toolbar.component.html',
  styleUrls: ['./rich-text-toolbar.component.scss']
})
export class RichTextToolbarComponent implements OnInit {

  @Output() style = new EventEmitter<any>();
  styleElement:any = {};

  constructor() { }

  ngOnInit(): void {
  }

  setStyle(key: string, value: string) {
    this.style.emit({key: key, value: value});
  }

}
