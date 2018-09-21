import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DairyComponent } from "./dairy.component";
import { DairyRoutingModule } from "./dairy-routing.module";
import { DairyCommentsComponent } from "./dairy-comments/dairy-comments.component";
import { DairyItemsComponent } from "./dairy-items/dairy-items.component";
import { DairyItemComponent } from "./dairy-items/dairy-item/dairy-item.component";
import { DairyCommentComponent } from "./dairy-comments/dairy-comment/dairy-comment.component";

@NgModule({
  imports: [CommonModule, FormsModule, DairyRoutingModule],
  declarations: [
    DairyComponent,
    DairyCommentsComponent,
    DairyCommentComponent,
    DairyItemsComponent,
    DairyItemComponent,
    DairyCommentComponent
  ],
  exports: [DairyComponent]
})
export class DairyModule {}
