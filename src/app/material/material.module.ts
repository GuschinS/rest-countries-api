import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatCommonModule, MatButtonModule],
  exports: [MatCommonModule, MatButtonModule],
})
export class MaterialModule {}
