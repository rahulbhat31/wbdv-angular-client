import {Component, Input, OnInit} from '@angular/core';
import Model from '../models/Model';
import PageService from '../services/PageService';

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
  @Input() pageId
  @Input() websiteId

  constructor(private model: Model , private service: PageService) { }

  ngOnInit() {
  }

  deleteRow() {
    this.model.deleteRow(this.page, this.row);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveRowUp() {
    this.model.moveRowUp(this.page, this.row);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveRowDown() {
    this.model.moveRowDown(this.page, this.row);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }
}
