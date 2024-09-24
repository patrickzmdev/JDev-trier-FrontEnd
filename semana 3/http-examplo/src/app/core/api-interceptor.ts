import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class ApiInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("antes de fazer a req")
    req = req.clone({headers: req.headers.set('authorization', 'hdaksjhdakjsdsakj')})
    return next.handle(req);
  }


}
