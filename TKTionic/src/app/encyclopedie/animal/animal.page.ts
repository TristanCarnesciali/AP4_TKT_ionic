import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  espece = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id;

    this.route.queryParams.subscribe(params => {
      id = params["id"]
    });
    fetch(`http://127.0.0.1:3000/espece/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.espece.push(data.espece);
    })
    .catch((error) => {
      console.log(error);
    });
  }

}
