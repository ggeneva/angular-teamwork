import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  commentSubmitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submitComment(text: string) {
    this.commentSubmitted.emit(text);
  }

}
