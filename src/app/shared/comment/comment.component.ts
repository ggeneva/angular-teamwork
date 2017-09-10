import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;

  @Input()
  uid: string;

  @Output()
  commentRemoved = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit() {
  }

  removeComment(comment: Comment) {
    this.commentRemoved.emit(comment);
  }

}
