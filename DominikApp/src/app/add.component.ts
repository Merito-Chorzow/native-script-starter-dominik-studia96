import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from "@nativescript/core";
import * as camera from "@nativescript/camera";
import { NativeScriptCommonModule } from "@nativescript/angular";

@Component({
  standalone: true,
  imports: [NativeScriptCommonModule],
  template: `
    <ActionBar title="Dodaj produkt"></ActionBar>

    <StackLayout padding="16">
      <TextField hint="Nazwa *" [(ngModel)]="title"></TextField>
      <Label *ngIf="error" text="Nazwa jest wymagana" color="red"></Label>

      <Button text="Zrób zdjęcie" (tap)="photo()"></Button>
      <Image *ngIf="img" [src]="img" height="200"></Image>

      <Button text="Zapisz" (tap)="save()"></Button>
    </StackLayout>
  `,
})
export class AddComponent {
  title = "";
  img: any;
  error = false;

  constructor(private router: Router) {}

  async photo() {
    await camera.requestPermissions();
    this.img = await camera.takePicture();
  }

  save() {
    if (!this.title) {
      this.error = true;
      return;
    }

    Http.request({
      url: "https://dummyjson.com/products/add",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({ title: this.title }),
    }).then(() => this.router.navigate(["list"]));
  }
}
