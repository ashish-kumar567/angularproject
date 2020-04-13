import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class PostService {

    //  newdata = [];
    url = "http://54.198.226.103:4500/api/posts";

    posts1: BehaviorSubject<Post[]> = new BehaviorSubject([]);
    http: any;
    constructor( private _http:HttpClient) {}
    post = new BehaviorSubject(new Post);
   
    // getData() {
    //     return this._http.get(this.url);
    //  }



    save(post: Post): void {
        this.posts1.next(this.posts1.getValue().concat([post]));
        let v1=JSON.parse(JSON.stringify(post));
        let httpHeaders=new HttpHeaders();
        httpHeaders.append("post","application/json");
        let v2={
            headers:httpHeaders
        }
        return this.http.post(this.url,v1,v2)
    }

    getPostList(): Observable<Post[]> {
    //return this.posts1.asObservable();
    return this._http.get<Post[]>('http://54.198.226.103:4500/api/posts');
       
    }

    deletePost(post: Post): void {
        let postArray = this.posts1.getValue();
        postArray = postArray.filter((value, key) => {
            return value.id != post.id;
        }
        )
        this.posts1.next(postArray);

    }
   
    getPostObject() {
        return this.post
    }

    setPostObject(post: Post) {
        this.post.next(post);
    }

}