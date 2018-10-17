
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { environment } from '../../environments/environment'

// const URL = environment.url + environment.port;
@Injectable({
  providedIn: 'root'
})

export class hosterService {
  public token: string;
  constructor(private http: HttpClient) { }
  hostData(HostData): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
    headers = headers.set('Authorization', 'Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ=')
    return this.http.post('http://192.168.0.92:8080/hosts', HostData)
      .pipe(
        map((response: Response) => {
          // login successful if there's a jwt token in the response
          if (response.status === 200) {
            // login successful if there's a jwt token in the response
            const token = response.json() && response.json().access_token;
            // localStorage.setItem('token', response.json().access_token);
            // console.log(response.json())
            console.log(token + ' _token');
            // set token property
            this.token = token;
            console.log(this.token + ' _token');
            return 'success';
          }
          if ('') {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
          return response;
        }),
        catchError(error => of(error)));
  }
  geHostData(HostData): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
    headers = headers.set('Authorization', 'Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ=')
    return this.http.get('http://192.168.0.92:8080/hosts', HostData)
      .pipe(
        map((response: Response) => {
          // login successful if there's a jwt token in the responset
          if (response.status === 200) {
            // login successful if there's a jwt token in the response
            const token = response.json() && response.json().access_token;
            // localStorage.setItem('token', response.json().access_token);
            // console.log(response.json())
            console.log(token + ' _token');
            // set token property
            this.token = token;
            console.log(this.token + ' _token');
            return 'success';
          }
          if ('') {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
          return response;
        }),
        catchError(error => of(error)));
  }
}
