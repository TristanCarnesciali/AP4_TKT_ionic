import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';




@Component({
  selector: 'app-missionid',
  templateUrl: './missionid.page.html',
  styleUrls: ['./missionid.page.scss'],
})
export class MissionidPage implements OnInit {

  constructor(private route: ActivatedRoute, private storage: Storage, private router: Router, private AppModule: AppModule, private http: HttpClient) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams.id);
    this.loadMissionId(this.route.snapshot.queryParams.id);
    
  }
  missionId = this.route.snapshot.queryParams.id;
  missionData = [];
  missionUser = [];

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
      this.missionUser.push(data.mission.idUser);
      console.log(data.mission.idUser);

    })
    .catch(function(error) {
      console.log(error);
    });
  }
  async redirect(){
    this.router.navigateByUrl(`missions`)
  }

  onSubmit(): void {
    this.http
        .post(`http://127.0.0.1:3000/avertissement`, {})
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
        });
  }
}
