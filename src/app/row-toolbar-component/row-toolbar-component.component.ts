import {Component, Input, OnInit} from '@angular/core';
import Model from '../models/Model';

@Component({
  selector: 'app-row-toolbar-component',
  templateUrl: './row-toolbar-component.component.html',
  styleUrls: ['./row-toolbar-component.component.css']
})
export class RowToolbarComponentComponent implements OnInit {

  @Input() row
  @Input() column
  @Input() widget
  @Input() page

  constructor(private model: Model) { }

  ngOnInit() {
  }

  deleteRow() {
    this.model.deleteRow(this.page, this.row);
  }

  moveRowUp() {
    this.model.moveRowUp(this.page, this.row);
  }

  moveRowDown() {
    this.model.moveRowDown(this.page, this.row);
  }
}
