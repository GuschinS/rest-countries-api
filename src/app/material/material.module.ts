import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [MatCommonModule, MatButtonModule, MatDialogModule],
  exports: [MatCommonModule, MatButtonModule, MatDialogModule],
})
export class MaterialModule {}
