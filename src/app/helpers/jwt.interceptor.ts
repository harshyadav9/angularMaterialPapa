import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class JwtInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any> , next:HttpHandler):Observable<HttpEvent<any>>{
        // alert("jwt");
        let currentUser = sessionStorage.getItem('currentUser');
        console.log("currentUser",currentUser);
        if(currentUser && currentUser['token']){
            req.clone({
                setHeaders:{
                    Authorization:`Bearer ${currentUser['token']}`
                }
            })
        }
        return next.handle(req);

    }
}