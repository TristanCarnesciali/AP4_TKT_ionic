import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-missionid',
  templateUrl: './missionid.page.html',
  styleUrls: ['./missionid.page.scss'],
})
export class MissionidPage implements OnInit {

  constructor(private route: ActivatedRoute, private storage: Storage, private router: Router, private http: HttpClient, public formBuilder: FormBuilder) { }
  form: any = {
    commentaire: null,
  };
  idmission = this.route.snapshot.queryParams.id;

  ngOnInit() {
    this.loadMissionId(this.idmission);

  }
  missionId = this.idmission;
  missionData = [];

  missionUser = [];
  missionComplete = [];
  missionCom = [];

  missionLibelle = [];
  missionDescription = [];

  ionViewDidLeave() {
    this.missionData = [];
    this.missionUser = [];
    this.missionId = 0;
    this.missionLibelle = [];
    this.missionDescription = [];
    this.missionComplete = [];
    this.missionCom = [];
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
        this.missionLibelle.push(data.mission.libelle);
        this.missionDescription.push(data.mission.description);
        this.missionComplete.push(data.mission.complete);
        this.missionCom.push(data.mission.commentaire);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async redirect() {
    this.router.navigateByUrl(`missions`)
  }

  async onSubmitAss(){
    const userid = await this.storage.get("id");
    const libelle = this.missionLibelle.toString();
    const description = this.missionDescription.toString();
    console.log(libelle, description)
    this.http
      .put(`http://127.0.0.1:3000/missionAss/${this.idmission}`, {idUser: userid, libelle: libelle, description: description})
      .subscribe({
        next: (response) =>         {
          console.log(response);
          window.location.reload();
        },
        error: (error) => console.log(error),
      });
  }

  async onSubmitFin(){
    const libelle = this.missionLibelle.toString();
    const description = this.missionDescription.toString();
    console.log(libelle, description)
    this.http
      .put(`http://127.0.0.1:3000/missionFin/${this.idmission}`, { libelle: libelle, description: description})
      .subscribe({
        next: (response) =>         {
          console.log(response);
          window.location.reload();
        },
        error: (error) => console.log(error),
      });
  }

  async onSubmitCom(){
    const libelle = this.missionLibelle.toString();
    const description = this.missionDescription.toString();
    const { commentaire } = this.form;

    console.log(libelle, description, commentaire);
    this.http
      .put(`http://127.0.0.1:3000/missionCom/${this.idmission}`, { commentaire: commentaire, libelle: libelle, description: description})
      .subscribe({
        next: (response) =>
        {
          console.log(response);
          window.location.reload();
        },
        error: (error) => console.log(error),
      });
  }
}
