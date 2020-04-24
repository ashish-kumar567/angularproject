// import { PostService } from '../post.service';
// import { MatTable } from '@angular/material/table';
// import { PostCreateComponent } from '../post-create/post-create.component';
// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { Post } from '../post';

// //import { url } from 'inspector';
// @Component({

//   selector: 'app-post-list',
//   templateUrl: './post-list.component.html',
//   styleUrls: ['./post-list.component.css']
// })
// export class PostListComponent implements OnInit {
//   displaypostdata: string[] = ["id", "title", "content", "actions"];
//   posts: Post[] = [];
//   post = new Post();

//   row_obj: any;
//   alertService: any;
  


//   // resdata;
//   // newdata;
//   // http: any;
//   constructor(private postService: PostService, private changeDetector: ChangeDetectorRef) { }

//   ngOnInit(): void {
//     this.postService.getPostListFromDb();
//     this.getPostList()
     
//     // const url="http://54.198.226.103:4500/api/posts";
//     // this.http.get(url).subscribe(res=>{
//     // this.resdata=res;
//     // this.newdata=this.resdata.posts;
//     // console.log(JSON.stringify(this.newdata))
//     //})
 
//   }
  
//   getPostList(): void {
//     this.postService.getPostList().subscribe((postData) => { //: Post[]
//       this.posts = postData
//     });
//   }

  
//   deletePost():void {
//     this.post = JSON.parse(JSON.stringify(this.row_obj));
//     //.postService.deletePost(this.post);
//     this.postService.deletePost(this.post)
//       {
//         // this.alertService.openDialog(response['message'])
//          this.postService.getPostListFromDb();

//       }
//       }
//   // row_obj(row_obj: any): string {
//   //   throw new Error("Method not implemented.");
//   // }

    
//   editPost(data): void {
//     this. post = JSON.parse(JSON.stringify(data));
//     this.postService.setPostObject(this.post)
//   }
// }


// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { Post } from '../post';
// import { PostService } from '../post.service';
// import { MatTable } from '@angular/material/table';
// import { PostCreateComponent } from '../post-create/post-create.component';

// import { HttpClient } from '@angular/common/http';
// //import { url } from 'inspector';
// @Component({

//   selector: 'app-post-list',
//   templateUrl: './post-list.component.html',
//   styleUrls: ['./post-list.component.css']
// })
// export class PostListComponent implements OnInit {
//   displaypostdata: string[] = ["id", "title", "content", "actions"];
//   posts: Post[] = [];
//   post = new Post();
//   resdata;
//   newdata;
//   http: any;
//   constructor(private postService: PostService, private changeDetector: ChangeDetectorRef) { }

//   ngOnInit(): void {
//     this.getPostList()

//     // const url="http://54.198.226.103:4500/api/posts";
//     // this.http.get(url).subscribe(res=>{
//     // this.resdata=res;
//     // this.newdata=this.resdata.posts;
//     // console.log(JSON.stringify(this.newdata))


//     //})



//   }

//   getPostList(): void {
//     this.postService.getPostList().subscribe((postData) => { //: Post[]
//       this.posts = postData['posts']
//     });
//   }



//      deletePost(posts): void {
//       this.post = JSON.parse(JSON.stringify(posts))
//       this.postService.deletePost(this.post)
//     }
    
//     editPost(posts): void {
//       this.post = JSON.parse(JSON.stringify(posts))
//       this.postService.setPostObject(this.post)
//     }
//   }

  import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
  import { Post } from '../post';
  import { PostService } from '../post.service';
  import { MatTable } from '@angular/material/table';
  import { PostCreateComponent } from '../post-create/post-create.component';
  
  @Component({
  
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
  })
  export class PostListComponent implements OnInit {
    displaypostdata: string[] = ["id", "title", "content", "actions"];
    posts: Post[] = [];
    post = new Post();
  
    constructor(private postService: PostService, private changeDetector: ChangeDetectorRef) { }
  
    ngOnInit(): void {
      this.getPostList()
    }
  
    getPostList(): void {
      this.postService.getPostList().subscribe((postData: Post[]) => {
        this.posts = postData
      });
    }
  
    deletePost(row_obj): void {
      this.post = JSON.parse(JSON.stringify(row_obj));
      this.postService.deletePost(this.post);
    }
  
    editPost(row_obj): void {
      this.post = JSON.parse(JSON.stringify(row_obj));
      this.postService.setPostObject(this.post);
    }
    updatePost(row_obj):void{
      this.post=JSON.parse(JSON.stringify(row_obj));
      this.postService.setPostObject(this.post)
    
    }
  }


