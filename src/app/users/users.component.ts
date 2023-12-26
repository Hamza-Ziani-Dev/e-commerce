import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Response } from '../interface/Response.interface';
import { User } from '../interface/User.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

response :Response;

constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.userService.getUsers(20).subscribe((res)=>{
      this.response = res;
      console.log(this.response);
    });

    // this.userService.getDetailsUsers().subscribe((res)=>{
    //   console.log(res);
    // });
  }

}
