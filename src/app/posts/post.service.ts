// import { Post } from './post';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class PostService {



//     posts1: BehaviorSubject<Post[]> = new BehaviorSubject([]);
//   getPostListFromDb: any;

//     constructor( private httpclient: HttpClient) {}
//     post = new BehaviorSubject(new Post);
//     Url = "http://54.198.226.103:4500/api/posts";
//     // getData() {
//     //     return this._http.get(this.url);
//     //  



//     save(post: Post):void {

//         let body = JSON.parse(JSON.stringify(post));
//         let httpHeaders = new HttpHeaders();
//         httpHeaders.append("Content-Type", "application/json")
//         let options = {
//             headers: httpHeaders
//         }
//         // if (post._id) {
//         //     return this.httpclient.put(this.Url + "/" + post._id, body, options)
//         // } else {
//         //     return this.httpclient.post(this.Url, body, options)
//         // }


//          this.posts1.next(this.posts1.getValue().concat([post]));
//         // let v1=JSON.parse(JSON.stringify(post));
//         // let httpHeaders=new HttpHeaders();
//         // httpHeaders.append("post","application/json");
//         // let v2={
//         //     headers:httpHeaders
//         // }
//         // return this.http.post(this.url,v1,v2)


//     }

//     getPostList(): Observable<Post[]> {
//     return this.posts1.asObservable();
//    // this.httpclient.get<Post[]>(this.Url)
//     //debugger
//    // return this.http.get<Post[]>('http://54.198.226.103:4500/api/posts');
       
//     }

//     deletePost(post: Post): void {
//        // debugger
//         let postArray = this.posts1.getValue();
//         postArray = postArray.filter((value, key) => {
//             return value._id != post._id;
//         }
//      )
//         // this.posts1.next(postArray);
//         //return this.httpclient.delete(this.Url + "/" + post._id)
//     }
   
//     getPostObject() {
//         //debugger
//         return this.post
//     }

//     setPostObject(post: Post) {
//        // debugger
//         this.post.next(post);
//     }


    

// }

// import { Injectable } from '@angular/core';
// import { Post } from './post';
// import { Observable, BehaviorSubject } from 'rxjs';
// //import { map, catchError } from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map, catchError } from 'rxjs/operators';

// @Injectable()
// export class PostService {

//     //  newdata = [];
//     url = "http://54.198.226.103:4500/api/posts";

//     posts1: BehaviorSubject<Post[]> = new BehaviorSubject([]);
//     http: any;
//     constructor( private _http:HttpClient) {}
//     post = new BehaviorSubject(new Post);

//     save(post: Post): void {
//         this.posts1.next(this.posts1.getValue().concat([post]));
//         let v1=JSON.parse(JSON.stringify(post));
//         let httpHeaders=new HttpHeaders();
//         httpHeaders.append("post","application/json");
//         let v2={
//             headers:httpHeaders
//         }
//         return this.http.post(this.url,v1,v2)
//     }

//     getPostList(): Observable<Post[]> {
//         //return this.posts1.asObservable();
//     return this._http.get<Post[]>('http://54.198.226.103:4500/api/posts');

// }

// deletePost(post: Post): void {
//     let postArray = this.posts1.getValue();
//     postArray = postArray.filter((value, key) => {
//         return value.id != post.id;
//     }
//     )
//     this.posts1.next(postArray);
// }

// getPostObject() {
//     return this.post
// }
// setPostObject(post: Post) {
//     this.post.next(post);
// }
// }

import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, BehaviorSubject } from 'rxjs';
//import { map, catchError } from 'rxjs/operators';

@Injectable()
export class PostService {
    posts1: BehaviorSubject<Post[]> = new BehaviorSubject([]);
    constructor() { }

    post = new BehaviorSubject(new Post);

    save(post: Post): void {
        this.posts1.next(this.posts1.getValue().concat([post]));
    }

    getPostList(): Observable<Post[]> {
        return this.posts1.asObservable();
    }

    deletePost(post: Post): void {
        let postArray = this.posts1.getValue();
        postArray = postArray.filter((value, key) => {
            return value.id != post.id;
        })
        this.posts1.next(postArray);
    }
    getPostObject() {
        return this.post
    }
    setPostObject(post: Post) {
        this.post.next(post);
    }
} 



