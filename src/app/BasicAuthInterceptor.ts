import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add the authorization header with basic authentication credentials
    req = req.clone({
      setHeaders: {
        Authorization: 'Basic ' + btoa('vishal.darekar:003358!Thu!Mar21')
      }
    });
    return next.handle(req);
  }
}
