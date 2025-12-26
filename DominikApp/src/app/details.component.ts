import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http } from "@nativescript/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

@Component({
  standalone: true,
  imports: [NativeScriptCommonModule],
  template: `
    <ActionBar title="Szczegóły"></ActionBar>

    <StackLayout padding="16" *ngIf="product">
      <Label [text]="product.title" fontSize="20" fontWeight="bold"></Label>
      <Image [src]="product.thumbnail" height="200"></Image>
      <Label [text]="product.description"></Label>
    </StackLayout>
  `,
})
export class DetailsComponent {
  product: any;

  constructor(route: ActivatedRoute) {
    const id = route.snapshot.params["id"];
    Http.getJSON<any>(`https://dummyjson.com/products/${id}`).then(
      (p) => (this.product = p)
    );
  }
}
