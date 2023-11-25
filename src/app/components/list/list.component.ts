import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  showPopup = false;
  formData: any = {};
  dataArray:any[]=[]
  searchval=""
  isedit=false
  i=0

  togglePopup() {
    
    this.showPopup = true
    console.log(this.showPopup);
    
  }

  closePopup() {
    this.formData.email=""
    this.formData.name=""
    this.showPopup = false;
    this.isedit=false
  }

  submitForm() {
    if(this.formData.email=="" || this.formData.name===""){
      alert("please fill ...!")
      return
    }
    let user={
      name:this.formData.name,
      email:this.formData.email
    }
    this.dataArray.push(user)
    this.closePopup()
  }

  editfun(i:number){
    this.togglePopup()
    this.isedit=true
   this.formData.name= this.dataArray[i].name
  this.formData.email=this.dataArray[i].email
  this.i=i
  }

  editconform(){
    if(this.formData.email=="" || this.formData.name===""){
      alert("please fill ...!")
      return
    }
    this.dataArray[this.i].name=this.formData.name
    this.dataArray[this.i].email=this.formData.email
    this.closePopup()
  }

  deletefun(i:number){
    this.dataArray.splice(i, 1)
  }
 }
