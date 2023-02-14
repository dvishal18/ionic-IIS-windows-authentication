import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('http://10.102.200.1/UniverseWS/Universe?service=wmts&request=GetCapabilities')
      .subscribe(data => {
        console.log("data",data)
        alert(data);
        this.data = JSON.stringify(data);
      });
  }
}
