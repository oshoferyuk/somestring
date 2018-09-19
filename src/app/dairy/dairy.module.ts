import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DairyComponent } from "./dairy.component";
import { DairyRoutingModule } from "./dairy-routing.module";
import { DairyCommentsComponent } from './dairy-comments/dairy-comments.component';
import { DairyItemsComponent } from './dairy-items/dairy-items.component';
import {FormsModule} from '@angular/forms';
import { DairyItemComponent } from './dairy-items/dairy-item/dairy-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, DairyRoutingModule],
  declarations: [DairyComponent, DairyCommentsComponent, DairyItemsComponent, DairyItemComponent],
  exports: [DairyComponent]
})
export class DairyModule {}
