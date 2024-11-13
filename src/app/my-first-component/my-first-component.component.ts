import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {
  name: string = ''
  position: string= ''
  userName: string = 'Tahsin';
  // userImage: string = '../assets/doctor-img.jpeg';
  userStatus: boolean = true;

  onClickMe(){
   this.userName = 'Mr Tahsin'
  }

  onSubmit(){
    console.log(this.name)
  }
}
