import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  exports: [FormsModule], // Export FormsModule so it can be used elsewhere
})
export class SharedModule {}
