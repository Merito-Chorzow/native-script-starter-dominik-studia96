import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@nativescript/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  standalone: true,
  imports: [NativeScriptCommonModule],
  template: `
<ActionBar title="Produkty">
  <ActionItem text="Dodaj" ios.position="right" (tap)="add()"></ActionItem>
</ActionBar>

<ListView [items]="products" (itemTap)="open($event.index)">
  <ng-template let-item="item">
    <StackLayout padding="10">
      <Label [text]="item.title" fontWeight="bold"></Label>
      <Label [text]="'Kod: ' + item.id"></Label>
    </StackLayout>
  </ng-template>
</ListView>
`,
})
export class ListComponent {
  products: any[] = [];

  constructor(private router: Router) {
    Http.getJSON<any>('https://dummyjson.com/products')
      .then(r => this.products = r.products);
  }

  open(i: number) {
    this.router.navigate(['details', this.products[i].id]);
  }

  add() {
    this.router.navigate(['add']);
  }
}
