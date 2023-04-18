import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatCommonModule, MatButtonModule, MatDialogModule, MatIconModule],
  exports: [MatCommonModule, MatButtonModule, MatDialogModule, MatIconModule],
})
export class MaterialModule {}
