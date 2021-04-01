import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User= new User();

  constructor(
    private usrsrvc: UserService,
    private router: Router

  ) { }

  save(): void{
console.log("B4 create:", this.user);
this.usrsrvc.create(this.user).subscribe(
res => {console.log("Create succesful");
this.router.navigateByUrl("/users/list");},
err =>{console.error(err);
    }
  );
}

  ngOnInit(): void {
  }

}