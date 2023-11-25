import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  
  texts: string = '';
  items: string[] = [];
  isshow=true
  i=0

  constructor() { }

  ngOnInit(): void {

  }

  addtext() {
    if (this.texts === '' ) {
      alert('Fill text..!');
    }else if(this.texts.length>=10){
      alert('length max 10')
    }
    else {
      this.items.push(this.texts);
      this.texts=""
    }
  }
  edittext() {
    if (this.texts === '') {
      alert('Fill text..!');
    } else {
      this.items[this.i]=this.texts
      this.isshow=true
      this.texts=""
    }
  }

  

  edit(i:number){
    this.texts=this.items[i]
    this.isshow=false
    this.i=i
  }

  delete(i:number){
    this.items.splice(i,1)
  }


}
