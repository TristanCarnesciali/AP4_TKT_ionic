import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  avertDetail = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.queryParams.id;;
    console.log(id);
    this.loaddetail(id);
  }

  loaddetail(id: number) {
    fetch(`http://127.0.0.1:3000/avertissement/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.avertDetail = data.avertissements;
      console.log(this.avertDetail);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  redirect(){
    this.router.navigateByUrl(`alertes`)
  }
}
