import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

  export class MapComponent implements AfterViewInit {
    @ViewChild('map', { static: false }) mapElement: ElementRef;
  
    ngAfterViewInit() {
      const map = new Map({
        target: this.mapElement.nativeElement,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 0
        })
      });
    }
  }