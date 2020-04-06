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
      alert("Submit successfully");
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
