import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  public createComment = new FormGroup({
    text: new FormControl()
  });

  @Input()
  user: User;

  @Output()
  commentSubmitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submitComment(text: string) {
    this.commentSubmitted.emit(text);
    this.createComment.reset();
  }

}
