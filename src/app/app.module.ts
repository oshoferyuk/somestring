import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { DairyModule } from "./dairy/dairy.module";
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, DairyModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
