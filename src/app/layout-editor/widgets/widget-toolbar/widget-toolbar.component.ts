import {Component, Input, OnInit} from '@angular/core';
import PageModel from '../../../models/PageModel';
import Model from '../../../models/Model';
import PageService from '../../../services/PageService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-toolbar',
  templateUrl: './widget-toolbar.component.html',
  styleUrls: ['./widget-toolbar.component.css']
})
export class WidgetToolbarComponent implements OnInit {
  hideWidgetToolbar = true
  @Input() row;
  @Input() col;
  @Input() widget;
  @Input() pageId
  @Input() page
  @Input() websiteId

  constructor(private model: Model, private service: PageService,
  private router: ActivatedRoute) { }

  ngOnInit() {
  }

  deleteWidget() {
    this.model.deleteWidget(this.row, this.col, this.widget);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveWidgetUp() {
    this.model.moveWidgetUp(this.row, this.col, this.widget);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveWidgetDown() {
    this.model.moveWidgetDown(this.row, this.col, this.widget);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveWidgetLeft() {

  }

  moveWidgetRight() {

  }

  onChange (value) {
    this.widget.type = value;
  }
}
