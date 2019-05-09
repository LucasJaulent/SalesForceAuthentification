import { Component, OnInit } from "@angular/core";
import { Constants } from "../constants";

@Component({
  selector: "app-authentification",
  templateUrl: "./authentification.component.html",
  styleUrls: ["./authentification.component.css"]
})
export class AuthentificationComponent implements OnInit {

  public ngOnInit(): void {
    window.location.href = this.buildUrl();
  }

  private buildUrl(): string {
    let url: string = "";

    for (let i = 0; i < Constants.urlInformations.length; i++) {
      url += Constants.urlInformations[i];
    }

    return url;
  }
}
