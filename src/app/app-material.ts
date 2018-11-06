import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatIconModule,
         MatExpansionModule,
         MatFormFieldModule,
         MatInputModule } from '@angular/material';

/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [ MatToolbarModule,
             MatIconModule ,
             MatExpansionModule,
             MatFormFieldModule,
             MatInputModule ]
})
export class MaterialModule {}
