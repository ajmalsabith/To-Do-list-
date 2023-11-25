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
  search=''

  togglePopup() {
    console.log('syye');
    
    
    this.showPopup = true
    console.log(this.showPopup);
    
  }

  closePopup() {
    this.formData.email=""
    this.formData.name=""
    this.showPopup = false;
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

 }
