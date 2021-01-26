import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [LeafletModule, CommonModule],
  exports: [MapComponent],
  declarations: [MapComponent],
})
export class ComponentModule {}
