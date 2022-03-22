import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';


@Component({
  selector: 'app-missionid',
  templateUrl: './missionid.page.html',
  styleUrls: ['./missionid.page.scss'],
})
export class MissionidPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams.id);
    this.loadMissionId(this.route.snapshot.queryParams.id);
  }
  missionId = this.route.snapshot.queryParams.id;
  missionData = [];

  ionViewDidLeave() {
    this.missionData = [];
  }

  ionViewDidEnter() { 
    this.loadMissionId;
  }


  loadMissionId(missionId) {
    fetch(`http://127.0.0.1:3000/mission/${missionId}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.missionData.push(data.mission);
      console.log(data.mission);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  redirect(){
    this.router.navigateByUrl(`missions`)
  }
}
