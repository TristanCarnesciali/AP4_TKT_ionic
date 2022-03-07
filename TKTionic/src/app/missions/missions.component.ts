import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss'],
})

export class MissionsComponent implements OnInit {

  missionData: any = [];
  constructor(public authService: AuthService, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');

    this.authService.getAll().subscribe((data: any)=>{
      this.missionData = data.mission;
      console.log(this.missionData);
      console.log("ID : " + id)
    })
  }
}