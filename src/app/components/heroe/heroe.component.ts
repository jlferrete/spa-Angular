import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html"
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesServices.getHeroe(params["id"]);
      console.log(this.heroe);
    });
  }
}
