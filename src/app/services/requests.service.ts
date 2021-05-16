import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  // public root_url = 'http://143.198.63.12:7891/'; // BGI Test Server URL s
  // public root_url = 'http://127.0.0.1:7891/'; // BENGEOS Local Server URL s
  // public root_url = 'http://127.0.0.1:8080/'; // BENGEOS Local Server URL s
  // public api_root_url = this.root_url + 'api/';
  public api_root_url = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpRequest: HttpClient) {
  }

  public sendGetRequest(routeName: string): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpRequest.get(this.api_root_url + routeName, { headers: header });
  }


  public sendPostRequest(routeName: string, body: any, token: string, header: any = null, progress = true): Observable<any> {
    if (header == null) {
      header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      });
    }
    return this.httpRequest.post(this.api_root_url + routeName, body, { headers: header, reportProgress: progress, observe: 'events' });
  }

  public sendPatchRequest(routeName: string, body: any, token: string): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    const param = new HttpParams().set('id', body.id);
    return this.httpRequest.patch(this.api_root_url + routeName, body, { headers: header, params: param });
  }

  public sendDeleteRequest(routeName: string, body: any, token: string): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    const param = new HttpParams().set('id', body.id);
    return this.httpRequest.delete(this.api_root_url + routeName, { headers: header, params: param });
  }

  public errorMgmt(error: HttpErrorResponse): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // public sendPutRequest(routeName: string, body: any, header): Observable<any> {
  //   return this.httpRequest.put(this.api_root_url + routeName, body, header);
  // }
}
