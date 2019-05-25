import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';
import { User } from './model/UserModel';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user={}as User
  confirmPassword=''
  displayedColumns: string[] = ['Name', 'Email', 'Contact', 'Address','action'];
  users:User[]=[]
  isUpdate=false;
  datasourse = new MatTableDataSource(this.users)
  constructor(private userservice:UserService,private toaster: ToastrService) {
    
    
  }
  ngOnInit(){

    this.userservice.getAllUsers().subscribe((res:any)=>{
      this.users = res.result;
      this.datasourse.data = this.users;
      console.log(res)
    })
    
  }
  addUser(){
console.log(this.user)
console.log(this.confirmPassword)
    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(this.user.email==''){
      this.toaster.error('Email is Empty') 
    }else if(!regexp.test(this.user.email)){
      this.toaster.error("Email is Invalid")
    
    }else if(this.user.Name==''){
      this.toaster.error('First Name is Empty')
    }else if(this.user.catagory==''){
      this.toaster.error('Select a Catagory')
    }else if(this.user.Address==''){
      this.toaster.error('Address is Empty')
    }else if(this.user.PhoneNumber==''){
      this.toaster.error('Phone Number is Empty')
    }else if(this.user.password==''){
      this.toaster.error('Password is Empty')
    }else if(this.confirmPassword==''){
      this.toaster.error('Confirm Password is Empty')
    }else if (this.user.type==''){
      this.toaster.error('Please Select the Catagory')
    
    }else if(this.user.password!=this.confirmPassword){
       this.toaster.error('Password is not matched')
    }else{
      console.log(this.user)
    this.userservice.createUser(this.user).subscribe((res:any)=>{
      console.log(res)
      if(res.code ==0){
        this.toaster.success('User added Sucessfully..')
        this.ngOnInit();
      
      }else{
        this.toaster.error('User add failed')
      }
    })

    }

    
  }

  deleteUser(element:any){
    this.userservice.deleteUser(element.id).subscribe((res:any)=>{
      if(res.code==0){
        this.toaster.info('User deleted')
        this.ngOnInit();
      }
      else{
        this.toaster.info('Unable to delete')
      }
    })
  }
  updateUser(){
    this.userservice.updateUser(this.user)
    this.ngOnInit();
  }
  selectUpdate(element){
    this.isUpdate = true;
    this.user = element;
  }
}
