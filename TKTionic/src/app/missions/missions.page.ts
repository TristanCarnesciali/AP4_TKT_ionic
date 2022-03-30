import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {

  constructor(private route: ActivatedRoute, private storage: Storage, private router: Router) {
    this.route.paramMap.subscribe(
      (data) => {

      }
    )
  }

  async ngOnInit() {
    const userid = await this.storage.get("id");
    this.loadMission(userid);

  }
  MissionData;



  loadMission(id) {
    fetch(`http://127.0.0.1:3000/missions/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.MissionData = data.mission;
        console.log(this.MissionData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  redirectid(id) {
    this.router.navigateByUrl(`missions/missionid?id=${id}`)
  }
}
