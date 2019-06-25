import {Component, Input, OnInit} from '@angular/core';
import PageService from '../services/PageService';

@Component({
  selector: 'app-page-column',
  templateUrl: './page-column.component.html',
  styleUrls: ['./page-column.component.css']
})
export class PageColumnComponent implements OnInit {

  @Input() column;
  @Input() row;
  span = 6;
  @Input() websiteId;
  @Input() pageId;
  @Input() page;

  constructor(private service: PageService) { }

  ngOnInit() {
    console.log(this.column);
  }

  addWidget = () => {
    const widget = {
      title : 'New Widget',
        type: 'HEADING',
      size: 1,
      text: 'New Widget'}
    this.column.widgets.push(widget)
    this.service.updatePage(this.websiteId, this.pageId, this.page);

  }
}
