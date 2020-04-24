import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  EmpForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){}
}
