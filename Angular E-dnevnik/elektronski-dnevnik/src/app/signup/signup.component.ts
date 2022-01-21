import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    };

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
     // alert('User is required!');
     this.snack.open('Username is required!', '', {
       duration: 3000,
     });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
       // alert('success');
       Swal.fire('Success', 'User is registered', 'success');
      },
      (error)=>{
        console.log(error);
       // alert('something went wrong');
       this.snack.open('Something went wrong', '', {
         duration:3000,
       })
      }
    )
      
    }
    
      
    
    }
