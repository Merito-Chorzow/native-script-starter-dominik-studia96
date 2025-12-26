import { Routes } from "@angular/router";
import { ListComponent } from "./list.component";
import { AddComponent } from "./add.component";
import { DetailsComponent } from "./details.component";

export const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListComponent },
  { path: "add", component: AddComponent },
  { path: "details/:id", component: DetailsComponent },
];
