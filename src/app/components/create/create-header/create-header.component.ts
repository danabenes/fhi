import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-header',
  templateUrl: './create-header.component.html',
  styleUrls: ['./create-header.component.scss']
})
export class CreateHeaderComponent implements OnInit {

  faAngleLeft = faAngleLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
