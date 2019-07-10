import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(newtitle: string, newcontent: string) {
    const post: Post = {title: newtitle, content: newcontent};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
