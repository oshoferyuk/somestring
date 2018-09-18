import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DairyComponent } from "./dairy.component";
import { DairyRoutingModule } from "./dairy-routing.module";
import { DairyCommentComponent } from './dairy-comment/dairy-comment.component';
import { DairyItemComponent } from './dairy-item/dairy-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, DairyRoutingModule],
  declarations: [DairyComponent, DairyCommentComponent, DairyItemComponent],
  exports: [DairyComponent]
})
export class DairyModule {}
