import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() PData:any;
  @Output() childEvent=new EventEmitter();
  constructor() { }
  onChange(value){
    this.childEvent.emit(value);
  }
  ngOnInit(): void {
  }
  //CheckTest
  //CheckTest2
}
