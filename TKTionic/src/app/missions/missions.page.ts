import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.paramMap.subscribe(
      (data) => {

      }
    )
  }

  ngOnInit() {
    this.loadMission();
    console.log(this.userId);
  }
  MissionData;

  userId = this.route.snapshot.queryParams.id;
  

  loadMission(){
    fetch(`http://127.0.0.1:3000/missions/${this.userId}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.MissionData = data.mission;
      console.log(this.MissionData);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  redirectid(id){
    this.router.navigateByUrl(`missions/missionid?id=${id}`)
  }
}
