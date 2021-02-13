import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  RendererFactory2,
  ViewContainerRef,
} from '@angular/core';
import { marker, LatLng, latLng, tileLayer, divIcon } from 'leaflet';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnDestroy {
  options: any;
  mapCenter: LatLng = latLng(46.879966, -121.726909);
  mapZoom: number = 5;
  layer: any;
  renderer: Renderer2;
  popUpComponentRef: any;

  constructor(
    public viewRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private rendererFactory: RendererFactory2,
    private viewContainerRef: ViewContainerRef,
    private elemRef: ElementRef
  ) {
    //  this.vwcRef = (appRef.components[0].instance as MapComponent).viewRef;
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer(
          'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmlzaGNoYWxwcm8iLCJhIjoiY2trZTJuN3d3MHg2ajJvcGFmaWRhN2IxeiJ9.WdoqM71wHpruh8FVOXuErQ',
          {
            attribution: '...',
          }
        ),
      ],
      tileSize: 256,
      center: this.mapCenter,
      zoom: this.mapZoom,
    };
  }

  locationChange(value: string) {
    let coordinates = value.split(',').map((char) => Number(char));
    this.mapCenter = latLng(coordinates[0], coordinates[1]);
    this.mapZoom = 14;
    this.layer = marker(this.mapCenter, {
      icon: divIcon({
        html: `<div id="popupcontainer"></div>`,
      }),
    });

    setTimeout(() => {
      let elem: Element = document.getElementById('popupcontainer') as Element;
      this.createPopUp(elem);
    }, 100);
  }

  createPopUp(viewRef: any) {
    const factory: ComponentFactory<PopUpComponent> = this.componentFactoryResolver.resolveComponentFactory(
      PopUpComponent
    );
    this.popUpComponentRef = factory.create(
      this.viewContainerRef.injector,
      undefined,
      viewRef
    );
  }

  ngOnDestroy() {
    this.popUpComponentRef.unsubscribe();
  }
}
