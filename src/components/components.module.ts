import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './map/slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { PopUpComponent } from './map/pop-up/pop-up.component';

@NgModule({
  imports: [LeafletModule, CommonModule, MatSliderModule],
  exports: [MapComponent],
  declarations: [MapComponent, SliderComponent, PopUpComponent],
})
export class ComponentModule {}
