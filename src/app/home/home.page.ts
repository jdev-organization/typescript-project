import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

import {
  PlatformDetails,
  PlatformInfoService
} from "../services/platform-info.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonTitle,
    IonToolbar
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Mobile / Desktop App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list *ngIf="details as d">
        <ion-item>
          <ion-label>Platform</ion-label>
          <ion-note slot="end">{{ d.platform }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Native</ion-label>
          <ion-note slot="end">{{ d.isNative ? "yes" : "no" }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>App version</ion-label>
          <ion-note slot="end">{{ d.appVersion }}</ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class HomePage implements OnInit {
  details?: PlatformDetails;

  constructor(private readonly platformInfo: PlatformInfoService) {}

  async ngOnInit(): Promise<void> {
    this.details = await this.platformInfo.getDetails();
  }
}
