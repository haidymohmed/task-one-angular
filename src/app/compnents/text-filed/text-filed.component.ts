import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-filed',
  templateUrl: './text-filed.component.html',
  styleUrls: ['./text-filed.component.css']
})


export class TextFiledComponent implements OnInit {

  textInput : string = '';
  @Input() title : string = '';
  @Input() placeholder:string = '';
  @Input() inputType:string = '';
  @ViewChild('getTextValue', { static: false }) getTextValue: ElementRef<HTMLInputElement> = {} as ElementRef;
  @Output() updateFiledValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    console.log(this.getTextValue.nativeElement.value);
    this.updateFiledValue.emit(this.textInput);
    console.log(this.textInput);
  }
}
