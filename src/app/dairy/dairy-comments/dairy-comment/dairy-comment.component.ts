import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dairy-comment',
  templateUrl: './dairy-comment.component.html',
  styleUrls: ['./dairy-comment.component.scss']
})
export class DairyCommentComponent implements OnInit {
  @Input() comment: string;
  constructor() { }

  ngOnInit() {

  }

}
