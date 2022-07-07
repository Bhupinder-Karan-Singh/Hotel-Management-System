import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { request } from 'http';


@Component({
  selector: 'app-reservationlist',
  templateUrl: './reservationlist.component.html',
  styleUrls: ['./reservationlist.component.css']
})
export class ReservationlistComponent implements OnInit {

  room_type?:string;
  from_date?:String;
  to_date?:String;
  breakfast?:string;
  userAdded?: boolean = false;
  air_conditioner?:string;
  wakeup_service?:string;
  selected = 'Single';

  public reservationlist;
  public reservationid;

  constructor(private appService: AppService) {

    appService.getUser().subscribe((response: any) => {
    if (response.status) {
      this.reservationlist = response.data;
      console.log(response.data)
    }});
  }

  ngOnInit(): void {}

  edit(d) {
    let confirmation = confirm("Do you want to edit this reservation?");
    if(confirmation){
      this.appService.edit(d).subscribe((response: any) => {
        if (response.status) {
          this.reservationid = response.data;
          console.log(response.data);
          this.room_type = this.reservationid.room_type;
          this.from_date = this.reservationid.from_date;
          this.to_date = this.reservationid.to_date;
          this.breakfast = this.reservationid.breakfast;
          this.air_conditioner = this.reservationid.air_conditioner;
          this.wakeup_service = this.reservationid.wakeup_service;
        }});
     }
   }

   save(d){
    let confirmation = confirm("Do you want to edit this reservation?");
    if(confirmation){
    const user = {
      room_type:this.room_type,
      from_date:this.from_date,
      to_date:this.to_date,
      breakfast:this.breakfast,
      air_conditioner:this.air_conditioner,
      wakeup_service:this.wakeup_service
     }
     this.appService.editUser(d,user).subscribe((response: any) => {
      if (response.status) {
        this.userAdded = true;
      }});
      window.location.reload();
    }
   }

   delete(d){
    let confirmation = confirm("Do you want to delete this reservation?");
    if(confirmation){
      this.appService.deleteUser(d).subscribe((response: any) => {
        if (response.status) {
          this.userAdded = true;
        }});
        window.location.reload();
      }
   }

}
