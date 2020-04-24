// import { Component, OnInit } from '@angular/core';

// import { Post } from '../post';
// import { PostService } from '../post.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { PostListComponent } from '../post-list/post-list.component';
// import { Observable} from 'rxjs'
// import { HttpClient } from '@angular/common/http';



// @Component({
//   providers:[PostListComponent],
//   selector: 'app-post-create',
//   templateUrl: './post-create.component.html',
//   styleUrls: ['./post-create.component.css']
// })
// export class PostCreateComponent implements OnInit {
//   post = new Post();
//   EmpForm: FormGroup;
//   alertService: any;
//   resdata;
//   newdata;
// http:any;

//   constructor(private postService: PostService, private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.EmpForm = this.fb.group({
//         postCreate:[this.post],
//      id: ['', Validators.required],
//      title: ['', [Validators.required, Validators.minLength(3)]],
//      _id: [''],
     
//       content: ['', Validators.required]
//     })
//     this.postService.getPostObject().subscribe(
//       postData => {
           
//              if (postData._id) {
//               this.EmpForm.patchValue(postData);
//             }
//           });

        
//   const url="http://54.198.226.103:4500/api/posts";
//   this.http.get(url).subscribe(res=>{
//   this.resdata=res;
//   this.newdata=this.resdata.posts;
//   console.log(JSON.stringify(this.newdata))
     
//   })
// }

//   onSubmit(): void {

//       if (this.EmpForm.valid) {
//         var value = this.EmpForm.value;
//         this.post = JSON.parse(JSON.stringify(value));
//         this.postService.save(this.post);
//         this.resetForm();
//       }
//     }
//   // this.postService.save(this.post).subscribe((response) => { 
//         //   this.postService.save(this.post).subscribe((response:any) => { 
//         //     this.alertService.openDialog(response['message'])
//         //     this.resetForm();
//         //     this.postService.getPostListFromDb();
//         //});
    
//     resetForm() {
//     this.post = new Post();
//    this.post.title = "";
//     this.post.content = "";
//     this.post._id="";
//     this.EmpForm.setValue(this.post);
//      this.EmpForm.updateValueAndValidity();
// }
// }



// import { Component, OnInit } from '@angular/core';
// import { Post } from '../post';
// import { PostService } from '../post.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { PostListComponent } from '../post-list/post-list.component';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';



// @Component({
//   providers:[PostListComponent],
//   selector: 'app-post-create',
//   templateUrl: './post-create.component.html',
//   styleUrls: ['./post-create.component.css']
// })
// export class PostCreateComponent implements OnInit {
//   post = new Post();
//   EmpForm: FormGroup;
//   resdata;
//   newdata;




//   constructor(private postService: PostService, private fb: FormBuilder,private http:HttpClient) {}

//   ngOnInit(): void {
//        this.EmpForm = this.fb.group({  
//       id: ['', Validators.required],
//       title: ['', [Validators.required, Validators.minLength(3)]],
//       content: ['', Validators.required]
//     })
//     this.postService.getPostObject().subscribe(
//       postData => {
//             if(postData.id){ 
//               this.EmpForm.setValue(postData);
//              }
//   });

//   const url="http://54.198.226.103:4500/api/posts";
//   this.http.get(url).subscribe(res=>{
//   this.resdata=res;
//   this.newdata=this.resdata.posts;
//   console.log(JSON.stringify(this.newdata))


//   })

//   }
//   onSubmit() {
//     if (this.EmpForm.valid) {
//       var postdata = this.EmpForm.value;
//       this.post = JSON.parse(JSON.stringify(postdata));
//       this.postService.save(this.post);
//       this.resetForm();
//       alert("Submit successfully");
//     }
//   }
//   resetForm() {
//     this.post=new Post();
//     this.post.id="";
//     this.post.title="";
//     this.post.content="";
//     this.EmpForm.setValue(this.post);
   
// }
// }
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostListComponent } from '../post-list/post-list.component';
import { Observable } from 'rxjs';

@Component({
  providers:[PostListComponent],
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  post = new Post();
  EmpForm: FormGroup;



  constructor(private postService: PostService, private fb: FormBuilder) {}

  ngOnInit(): void {
       this.EmpForm = this.fb.group({  
      id: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', Validators.required]
    })
    this.postService.getPostObject().subscribe(
      postData => {
            if(postData.id){ 
              this.EmpForm.setValue(postData);
             }
  });

  }

  onSubmit() {
    if (this.EmpForm.valid) {
      var postdata = this.EmpForm.value;
      this.post = JSON.parse(JSON.stringify(postdata));
      this.postService.save(this.post);
      this.resetForm();
      alert("new post created");
    }
  }

  resetForm() {
    this.post=new Post();
    this.post.id="";
    this.post.title="";
    this.post.content="";
    this.EmpForm.setValue(this.post);

}

}