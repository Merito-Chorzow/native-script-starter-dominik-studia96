import { Component } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";

@Component({
  selector: "ns-app",
  standalone: true,
  imports: [NativeScriptRouterModule],
  template: `<page-router-outlet></page-router-outlet>`,
})
export class AppComponent {}
