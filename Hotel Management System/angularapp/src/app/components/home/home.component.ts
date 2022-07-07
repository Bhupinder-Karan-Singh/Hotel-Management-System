import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { request } from 'http';
import { loadavg } from 'os';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  @ViewChild('NgForm')
  public createResForm!:NgForm;
  title = 'angularapp';
  room_type?:string;
  from_date?:String;
  to_date?:String;
  breakfast?:string;
  userAdded?: boolean = false;
  air_conditioner?:string;
  wakeup_service?:string;
  selected = 'Single';


constructor(private appService: AppService){}

onSubmit() : void {
const user = {
    room_type:this.room_type,
    from_date:this.from_date,
    to_date:this.to_date,
    breakfast:this.breakfast,
    air_conditioner:this.air_conditioner,
    wakeup_service:this.wakeup_service
}
if(this.from_date !=null && this.to_date !=null && this.room_type !=null){
  this.appService.addUser(user).subscribe((response: any) => {
    if (response.status) {
      this.userAdded = true;
    }});
  }
 }
}

