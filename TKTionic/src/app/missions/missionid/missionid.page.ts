import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-missionid',
  templateUrl: './missionid.page.html',
  styleUrls: ['./missionid.page.scss'],
})
export class MissionidPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams.id);
    this.loadMissionId(this.route.snapshot.queryParams.id);
  }
  missionId = this.route.snapshot.queryParams.id;
  missionData = [];

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
}
