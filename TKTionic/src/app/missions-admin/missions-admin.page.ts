import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missions-admin',
  templateUrl: './missions-admin.page.html',
  styleUrls: ['./missions-admin.page.scss'],
})

export class MissionsAdminPage implements OnInit {
  
  missions: Array<any>;
  missions_non_asignees: Array<any> = [];
  missions_non_complete: Array<any> = [];
  missions_complete: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadMission();
  }

  loadMission() {
    fetch(`http://127.0.0.1:3000/missions`)
    .then((resp) => resp.json())
    .then((data) => {
      this.missions = data.mission;
      this.SplitMissions();
    }).catch((error) => {
      console.log(error);
    });
  }

  SplitMissions() {
    this.missions.forEach(mission => {
      if (mission.complete == 1) {
        this.missions_complete.push(mission);
      } else if (mission.idUser == null) {
        this.missions_non_asignees.push(mission);
      } else {
        this.missions_non_complete.push(mission);
      }
    });
  }

  DisplayUnique(id: Number) {
    this.router.navigateByUrl(`/missions-admin/unique?id=${id}`);
  }

  GotoAjout() {
    this.router.navigateByUrl(`/missions-admin/ajout`);
  }
}
